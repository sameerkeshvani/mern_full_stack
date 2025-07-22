import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container py-xl">
        {/* Hero Section */}
        <div className="text-center mb-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-lg">
            Welcome to <span className="text-primary">MERN</span> Full-Stack App
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-xl max-w-3xl mx-auto">
            A production-grade web application built with MongoDB, Next.js 15, React, and Node.js. 
            Experience modern authentication, role-based access control, and secure administrative features.
          </p>
          <div className="flex gap-md justify-center">
            <Link 
              href="/register" 
              className="btn btn-primary btn-lg"
            >
              Get Started
            </Link>
            <Link 
              href="/login" 
              className="btn btn-secondary btn-lg"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
          <div className="card">
            <div className="card-body text-center">
              <div className="logo-lg bg-primary rounded-lg flex items-center justify-center mx-auto mb-md">
                <svg className="icon-lg text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-sm">Secure Authentication</h3>
              <p className="text-gray-600">
                NextAuth.js integration with bcrypt password hashing and JWT sessions for secure user management.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body text-center">
              <div className="logo-lg bg-primary rounded-lg flex items-center justify-center mx-auto mb-md">
                <svg className="icon-lg text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-sm">Role-Based Access</h3>
              <p className="text-gray-600">
                Advanced authorization system with admin and user roles, protected routes, and audit logging.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body text-center">
              <div className="logo-lg bg-primary rounded-lg flex items-center justify-center mx-auto mb-md">
                <svg className="icon-lg text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-sm">Modern UI/UX</h3>
              <p className="text-gray-600">
                Professional design with responsive layouts, smooth animations, and intuitive user experience.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-lg">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
            <div className="card">
              <div className="card-body text-center">
                <h4 className="font-semibold mb-sm">MongoDB</h4>
                <p className="text-sm text-gray-600">NoSQL Database</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body text-center">
                <h4 className="font-semibold mb-sm">Next.js 15</h4>
                <p className="text-sm text-gray-600">Full-Stack Framework</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body text-center">
                <h4 className="font-semibold mb-sm">React</h4>
                <p className="text-sm text-gray-600">UI Library</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body text-center">
                <h4 className="font-semibold mb-sm">TypeScript</h4>
                <p className="text-sm text-gray-600">Type Safety</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 