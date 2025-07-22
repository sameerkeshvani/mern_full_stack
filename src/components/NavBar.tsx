"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function NavBar() {
  const { data: session, status } = useSession();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="container">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Main Navigation */}
          <div className="flex items-center gap-lg">
            <Link href="/" className="flex items-center gap-sm">
              <div className="logo-md bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-lg font-bold text-gray-900">MERN App</span>
            </Link>
            <div className="hidden md:flex items-center gap-lg">
              <Link href="/" className="text-gray-700 hover:text-primary px-md py-sm rounded text-sm font-medium transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-primary px-md py-sm rounded text-sm font-medium transition-colors">About</Link>
              {session && (
                <Link href="/dashboard" className="text-gray-700 hover:text-primary px-md py-sm rounded text-sm font-medium transition-colors">Dashboard</Link>
              )}
              {session?.user?.role === "admin" && (
                <div className="dropdown">
                  <button className="text-gray-700 hover:text-primary px-md py-sm rounded text-sm font-medium transition-colors flex items-center cursor-pointer">Admin</button>
                  <div className="dropdown-menu">
                    <Link href="/admin/users" className="dropdown-item">User Management</Link>
                    <Link href="/admin/audit" className="dropdown-item">Audit Logs</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* User Menu */}
          <div className="flex items-center gap-md">
            {status === "loading" ? (
              <div className="spinner"></div>
            ) : session ? (
              <div className="dropdown">
                <button className="flex items-center gap-sm text-gray-700 hover:text-primary transition-colors cursor-pointer">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {session.user?.name?.charAt(0) || session.user?.email?.charAt(0) || "U"}
                    </span>
                  </div>
                  <span className="hidden md:block text-sm font-medium">{session.user?.name || session.user?.email}</span>
                </button>
                <div className="dropdown-menu">
                  <div className="px-md py-sm border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900">{session.user?.name}</p>
                    <p className="text-xs text-gray-500">{session.user?.email}</p>
                    <span className="badge badge-primary mt-xs">{session.user?.role}</span>
                  </div>
                  <Link href="/dashboard" className="dropdown-item">Dashboard</Link>
                  <button 
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="dropdown-item w-full text-left"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-sm">
                <Link href="/login" className="btn btn-secondary btn-sm">Sign In</Link>
                <Link href="/register" className="btn btn-primary btn-sm">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
