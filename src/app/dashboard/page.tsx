import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-md">Access Denied</h1>
          <p className="text-gray-600 mb-md">You need to be logged in to view this page.</p>
          <Link href="/login" className="btn btn-primary">Sign In</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-xl">
        {/* Header */}
        <div className="mb-xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-sm">Welcome back, {session.user?.name}!</h1>
          <p className="text-gray-600">Here's what's happening with your account.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
          <div className="card">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Account Status</p>
                  <p className="text-2xl font-bold text-gray-900">Active</p>
                </div>
                <div className="logo-md bg-success-color rounded-lg flex items-center justify-center">
                  <svg className="icon-md text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">User Role</p>
                  <p className="text-2xl font-bold text-gray-900 capitalize">{session.user?.role}</p>
                </div>
                <div className="logo-md bg-primary rounded-lg flex items-center justify-center">
                  <svg className="icon-md text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Email</p>
                  <p className="text-lg font-medium text-gray-900 truncate">{session.user?.email}</p>
                </div>
                <div className="logo-md bg-info-color rounded-lg flex items-center justify-center">
                  <svg className="icon-md text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xl">
          <div className="card">
            <div className="card-header">
              <h3 className="text-lg font-semibold">Quick Actions</h3>
            </div>
            <div className="card-body">
              <div className="space-y-md">
                {session.user?.role === "admin" && (
                  <>
                    <Link href="/admin/users" className="flex items-center gap-md p-md rounded border border-gray-200 hover:bg-gray-50 transition-colors">
                      <div className="logo-sm bg-primary rounded flex items-center justify-center">
                        <svg className="icon-sm text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">User Management</p>
                        <p className="text-sm text-gray-600">Manage user accounts and roles</p>
                      </div>
                    </Link>
                    <Link href="/admin/audit" className="flex items-center gap-md p-md rounded border border-gray-200 hover:bg-gray-50 transition-colors">
                      <div className="logo-sm bg-warning-color rounded flex items-center justify-center">
                        <svg className="icon-sm text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Audit Logs</p>
                        <p className="text-sm text-gray-600">View system activity and changes</p>
                      </div>
                    </Link>
                  </>
                )}
                <Link href="/profile" className="flex items-center gap-md p-md rounded border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="logo-sm bg-info-color rounded flex items-center justify-center">
                    <svg className="icon-sm text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Profile Settings</p>
                    <p className="text-sm text-gray-600">Update your account information</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
            </div>
            <div className="card-body">
              <div className="space-y-md">
                <div className="flex items-center gap-md p-md rounded bg-gray-50">
                  <div className="logo-sm bg-success-color rounded-full flex items-center justify-center">
                    <svg className="icon-sm text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Successfully logged in</p>
                    <p className="text-sm text-gray-600">Just now</p>
                  </div>
                </div>
                <div className="flex items-center gap-md p-md rounded bg-gray-50">
                  <div className="logo-sm bg-info-color rounded-full flex items-center justify-center">
                    <svg className="icon-sm text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Account created</p>
                    <p className="text-sm text-gray-600">Account setup completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Information */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold">System Information</h3>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div>
                <h4 className="font-medium mb-sm">Application Details</h4>
                <div className="space-y-sm text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Framework:</span>
                    <span className="font-medium">Next.js 15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Database:</span>
                    <span className="font-medium">MongoDB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Authentication:</span>
                    <span className="font-medium">NextAuth.js</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Styling:</span>
                    <span className="font-medium">Custom CSS</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-sm">Your Account</h4>
                <div className="space-y-sm text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">User ID:</span>
                    <span className="font-medium">{session.user?.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Role:</span>
                    <span className="font-medium capitalize">{session.user?.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-medium text-success-color">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
