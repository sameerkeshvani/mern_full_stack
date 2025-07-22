"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
      });

      if (res?.error) {
        setError("Invalid email or password");
      } else {
        router.push(callbackUrl);
      }
    } catch (error) {
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
            <h1 className="text-3xl font-bold mb-sm">Sign In</h1>
            <p className="text-gray-600 mb-lg">Welcome back! Please sign in to your account.</p>
          </div>
          <div className="card-body">
            {error && (
              <div className="alert alert-error flex items-center gap-sm">
                <span>⚠️</span> {error}
              </div>
            )}
            <button
              type="button"
              className="btn btn-outline w-full mb-md flex items-center justify-center gap-sm border border-gray-300 bg-white hover:bg-gray-50"
              onClick={() => signIn("google", { callbackUrl })}
              disabled={isLoading}
            >
              <FcGoogle className="icon-md" />
              <span>Sign in with Google</span>
            </button>
            <div className="flex items-center gap-sm mb-md">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-gray-400 text-sm">or</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <form onSubmit={handleSubmit} className="space-y-lg">
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="form-input"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  disabled={isLoading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  id="password"
                  type="password"
                  required
                  className="form-input"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full text-base font-semibold py-md"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-sm">
                    <div className="spinner"></div>
                    Signing In...
                  </span>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>
            <div className="text-center mt-lg space-y-sm">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link href="/register" className="text-primary hover:underline font-medium">
                  Sign up here
                </Link>
              </p>
              <p className="text-sm text-gray-600 mt-sm">
                <Link href="/forgot-password" className="text-primary hover:underline font-medium">
                  Forgot your password?
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
