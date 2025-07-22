"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const email = searchParams.get("email") || "";
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!password || !confirm) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to reset password.");
      } else {
        setSuccess(true);
        setTimeout(() => router.push("/login"), 2000);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-md">
      <div className="container-sm">
        <div className="card shadow-lg rounded-xl overflow-hidden">
          <div className="card-header text-center bg-white">
            <h1 className="text-3xl font-bold mb-sm">Reset Password</h1>
            <p className="text-gray-600 mb-lg">Enter your new password below.</p>
          </div>
          <div className="card-body">
            {error && <div className="alert alert-error flex items-center gap-sm">⚠️ {error}</div>}
            {success ? (
              <div className="alert alert-success flex items-center gap-sm">✅ Password reset! Redirecting to login...</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-lg">
                <div className="form-group">
                  <label htmlFor="password" className="form-label">New Password</label>
                  <input
                    id="password"
                    type="password"
                    className="form-input"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirm" className="form-label">Confirm Password</label>
                  <input
                    id="confirm"
                    type="password"
                    className="form-input"
                    value={confirm}
                    onChange={e => setConfirm(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full text-base font-semibold py-md"
                  disabled={isLoading}
                >
                  {isLoading ? "Resetting..." : "Reset Password"}
                </button>
              </form>
            )}
            <div className="text-center mt-lg">
              <p className="text-sm text-gray-600">
                <a href="/login" className="text-primary hover:underline font-medium">Back to login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 