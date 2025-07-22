"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container-sm">
        <div className="card">
          <div className="card-header">
            <h1 className="text-2xl font-bold text-center">Sign In</h1>
            <p className="text-center text-gray-600 mt-sm">
              Welcome back! Please sign in to your account.
            </p>
          </div>
          
          <div className="card-body">
            {error && (
              <div className="alert alert-error">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-md">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
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
                <label htmlFor="password" className="form-label">
                  Password
                </label>
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
                className="btn btn-primary w-full"
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
            
            <div className="text-center mt-lg">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/register" className="text-primary hover:underline">
                  Sign up here
                </Link>
              </p>
              <p className="text-sm text-gray-600 mt-sm">
                <Link href="/forgot-password" className="text-primary hover:underline">
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
