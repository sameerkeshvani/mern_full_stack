import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (
    !session ||
    !session.user ||
    (session.user as { role?: string }).role !== "admin"
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const { userId, newRole } = await req.json();
  const client = await clientPromise;
  const db = client.db();

  await db.collection("users").updateOne(
    { _id: new ObjectId(userId) },
    { $set: { role: newRole } }
  );

  return NextResponse.json({ success: true });
}
