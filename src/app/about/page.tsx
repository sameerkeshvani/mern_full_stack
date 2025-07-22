export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex flex-col items-center">
      <div className="w-full max-w-5xl px-4 py-12">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">About This Project</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            A comprehensive full-stack web application demonstrating modern development practices<br />
            with the MERN stack and enterprise-grade features.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {/* Feature Card 1 */}
          <div className="bg-white/80 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-200 group backdrop-blur">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-blue-500/90 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Authentication</h3>
              <p className="text-gray-600 text-sm text-center">
                NextAuth.js integration with bcrypt password hashing, JWT sessions, and Google OAuth.
              </p>
            </div>
          </div>
          {/* Feature Card 2 */}
          <div className="bg-white/80 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-200 group backdrop-blur">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-green-500/90 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Role-Based Access Control</h3>
              <p className="text-gray-600 text-sm text-center">
                Advanced RBAC system with admin controls, user management, and protected routes.
              </p>
            </div>
          </div>
          {/* Feature Card 3 */}
          <div className="bg-white/80 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-200 group backdrop-blur">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-purple-500/90 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Audit Logging</h3>
              <p className="text-gray-600 text-sm text-center">
                Comprehensive audit trails for admin actions with real-time logging and tracking.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold ml-3">Modern UI/UX</h3>
            </div>
            <p className="text-gray-600">
              Responsive design with Tailwind CSS, loading states, 
              and intuitive user interfaces following modern design principles.
            </p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technology Stack</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">M</span>
              </div>
              <h4 className="font-semibold text-gray-900">MongoDB</h4>
              <p className="text-sm text-gray-600 mt-1">NoSQL Database</p>
              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                <li>• Document-oriented storage</li>
                <li>• Flexible schema design</li>
                <li>• Scalable architecture</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">N</span>
              </div>
              <h4 className="font-semibold text-gray-900">Next.js 15</h4>
              <p className="text-sm text-gray-600 mt-1">Full-Stack Framework</p>
              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                <li>• App Router & Server Components</li>
                <li>• API Routes & Middleware</li>
                <li>• Built-in optimizations</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold text-xl">R</span>
              </div>
              <h4 className="font-semibold text-gray-900">React</h4>
              <p className="text-sm text-gray-600 mt-1">UI Library</p>
              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                <li>• Component-based architecture</li>
                <li>• Virtual DOM rendering</li>
                <li>• Hooks & modern patterns</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">N</span>
              </div>
              <h4 className="font-semibold text-gray-900">Node.js</h4>
              <p className="text-sm text-gray-600 mt-1">Runtime Environment</p>
              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                <li>• Server-side JavaScript</li>
                <li>• Event-driven architecture</li>
                <li>• NPM ecosystem</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Technologies */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Technologies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">TypeScript</h4>
              <p className="text-sm text-gray-600">Static type checking and enhanced developer experience</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Tailwind CSS</h4>
              <p className="text-sm text-gray-600">Utility-first CSS framework for rapid UI development</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">NextAuth.js</h4>
              <p className="text-sm text-gray-600">Complete authentication solution for Next.js applications</p>
            </div>
          </div>
        </div>

        {/* Project Goals */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Project Goals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Educational Value</h3>
              <p className="text-gray-600 text-sm">
                This project serves as a comprehensive tutorial for developers learning 
                full-stack development with modern JavaScript technologies. It demonstrates 
                real-world patterns and best practices used in production applications.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Production Ready</h3>
              <p className="text-gray-600 text-sm">
                The application includes enterprise-grade features like audit logging, 
                role-based access control, and secure authentication patterns that are 
                commonly required in professional software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 