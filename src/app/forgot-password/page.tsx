"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/reset-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to send reset email.");
      } else {
        setSuccess(true);
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
            <h1 className="text-3xl font-bold mb-sm">Forgot Password</h1>
            <p className="text-gray-600 mb-lg">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>
          <div className="card-body">
            {error && <div className="alert alert-error flex items-center gap-sm">⚠️ {error}</div>}
            {success ? (
              <div className="alert alert-success flex items-center gap-sm">
                ✅ If an account with that email exists, a reset link has been sent.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-lg">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    className="form-input"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full text-base font-semibold py-md"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Reset Link"}
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