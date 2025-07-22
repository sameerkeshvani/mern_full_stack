import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import getClientPromise from "@/lib/mongodb";
import crypto from "crypto";

export async function POST(req: Request) {
  const { email } = await req.json();
  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const client = await getClientPromise();
  const db = client.db();
  const user = await db.collection("users").findOne({ email });
  if (!user) {
    // For security, don't reveal if user exists
    return NextResponse.json({ success: true });
  }

  // Generate a reset token and expiry (1 hour)
  const token = crypto.randomBytes(32).toString("hex");
  const expires = new Date(Date.now() + 60 * 60 * 1000);

  // Store token and expiry in user document
  await db.collection("users").updateOne(
    { email },
    { $set: { resetToken: token, resetTokenExpires: expires } }
  );

  // Send email with reset link
  const resetUrl = `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/reset-password?token=${token}&email=${encodeURIComponent(email)}`;

  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Support" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Password Reset Request",
    html: `<p>You requested a password reset.</p><p>Click <a href="${resetUrl}">here</a> to reset your password. This link will expire in 1 hour.</p>`,
  });

  return NextResponse.json({ success: true });
} 