import { NextResponse } from "next/server";
import getClientPromise from "@/lib/mongodb";
import { hash } from "bcryptjs";

export async function POST(req: Request) {
  const { email, token, password } = await req.json();
  if (!email || !token || !password) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const client = await getClientPromise();
  const db = client.db();
  const user = await db.collection("users").findOne({ email, resetToken: token });

  if (!user || !user.resetTokenExpires || new Date(user.resetTokenExpires) < new Date()) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
  }

  const hashedPassword = await hash(password, 12);
  await db.collection("users").updateOne(
    { email },
    {
      $set: { password: hashedPassword },
      $unset: { resetToken: "", resetTokenExpires: "" },
    }
  );

  return NextResponse.json({ success: true });
} 