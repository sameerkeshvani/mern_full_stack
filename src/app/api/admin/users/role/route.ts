import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { logAuditEvent } from "@/lib/audit";

export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session || session.user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { userId, newRole } = await req.json();

    if (!userId || !newRole) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!["admin", "user"].includes(newRole)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    // Prevent self-demotion
    if (session.user?.id === userId && newRole !== "admin") {
      return NextResponse.json(
        { error: "Admins cannot demote themselves" },
        { status: 400 }
      );
    }

    // Check if this is the last admin and prevent demotion
    if (newRole !== "admin") {
      const adminCount = await db.collection("users").countDocuments({ role: "admin" });
      const targetUser = await db.collection("users").findOne({ _id: new ObjectId(userId) });
      
      if (targetUser?.role === "admin" && adminCount === 1) {
        return NextResponse.json(
          { error: "Cannot demote the last remaining admin" },
          { status: 400 }
        );
      }
    }

    // Get the target user's current role for audit logging
    const targetUser = await db.collection("users").findOne({ _id: new ObjectId(userId) });
    const previousRole = targetUser?.role;

    // Update the user's role
    await db.collection("users").updateOne(
      { _id: new ObjectId(userId) },
      { $set: { role: newRole } }
    );

    // Log the audit event
    if (session.user?.id) {
      await logAuditEvent({
        actorId: session.user.id,
        action: "UPDATE_ROLE",
        targetUserId: userId,
        details: {
          previousRole,
          newRole,
        },
      });
    }

    return NextResponse.json({ success: true, role: newRole });
  } catch (error) {
    console.error("Error updating user role:", error);
    return NextResponse.json({ error: "Failed to update role" }, { status: 500 });
  }
} 