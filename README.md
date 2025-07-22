# MERN Full-Stack Application

A comprehensive, production-grade full-stack web application built with the MERN stack (MongoDB, Next.js 15, React, Node.js) featuring modern authentication, role-based access control, and enterprise-grade security features.

## 🚀 Features

### Core Functionality
- **Secure Authentication**: NextAuth.js integration with bcrypt password hashing
- **Role-Based Access Control**: Admin and user roles with protected routes
- **User Management**: Admin interface for managing users and roles
- **Audit Logging**: Comprehensive tracking of administrative actions
- **Modern UI/UX**: Responsive design with Tailwind CSS

### Technical Stack
- **Frontend**: Next.js 15, React 18, TypeScript
- **Backend**: Next.js API Routes, Node.js
- **Database**: MongoDB with native driver
- **Authentication**: NextAuth.js with JWT sessions
- **Styling**: Tailwind CSS
- **Security**: bcrypt password hashing, middleware protection

## 📋 Prerequisites

Before running this application, ensure you have:

- Node.js 18+ installed
- MongoDB Atlas account (or local MongoDB instance)
- Git for version control

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mern-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=http://localhost:3000
   ```

   Generate a secure secret:
   ```bash
   openssl rand-base64 32
   ```

4. **Database Setup**
   
   Ensure your MongoDB database has the following collections:
   - `users` - User accounts and authentication data
   - `audit_logs` - Administrative action logs

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   ├── auth/          # NextAuth configuration
│   │   ├── register/      # User registration
│   │   └── admin/         # Admin API endpoints
│   ├── admin/             # Admin pages
│   │   ├── users/         # User management
│   │   └── audit/         # Audit logs
│   ├── dashboard/         # User dashboard
│   ├── login/             # Login page
│   ├── register/          # Registration page
│   └── about/             # About page
├── components/            # Reusable React components
├── lib/                  # Utility functions
│   ├── mongodb.ts        # Database connection
│   └── audit.ts          # Audit logging utility
├── types/                # TypeScript type definitions
└── middleware.ts         # Next.js middleware
```

## 🔐 Authentication & Authorization

### User Roles
- **User**: Basic access to dashboard and personal features
- **Admin**: Full access including user management and audit logs

### Protected Routes
- `/dashboard` - Requires authentication
- `/admin/*` - Requires admin role

### Security Features
- Password hashing with bcrypt
- JWT session management
- Middleware-based route protection
- Audit logging for administrative actions

## 👥 User Management

### Registration
1. Navigate to `/register`
2. Fill in name, email, and password
3. Password must be at least 6 characters
4. Email must be unique

### Login
1. Navigate to `/login`
2. Enter email and password
3. Successful login redirects to dashboard

### Admin Features
- View all users in the system
- Promote/demote users between roles
- View audit logs of administrative actions
- Prevent self-demotion and last admin removal

## 🔍 Audit Logging

The application maintains comprehensive audit trails for:
- User role changes
- Administrative actions
- System access patterns

Audit logs include:
- Timestamp of action
- Actor (admin performing action)
- Target (user affected)
- Action type and details
- Contextual metadata

## 🎨 UI/UX Features

### Design System
- **Color Scheme**: Blue primary with semantic colors
- **Typography**: Inter font family
- **Components**: Consistent card-based layout
- **Responsive**: Mobile-first design approach

### User Experience
- Loading states and error handling
- Form validation with real-time feedback
- Intuitive navigation with role-based menus
- Professional dashboard with statistics

## 🚀 Deployment

### Environment Variables
Ensure all required environment variables are set in production:

```env
MONGODB_URI=your-production-mongodb-uri
NEXTAUTH_SECRET=your-production-secret
NEXTAUTH_URL=https://your-domain.com
```

### Build Commands
```bash
npm run build    # Build for production
npm start        # Start production server
```

### Recommended Platforms
- **Vercel**: Optimized for Next.js deployment
- **Netlify**: Alternative hosting platform
- **Railway**: Full-stack deployment platform

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Tailwind CSS for consistent styling

## 📚 Learning Resources

This project demonstrates:
- Modern React patterns with hooks
- Next.js 15 App Router features
- MongoDB integration with Node.js
- Authentication best practices
- Role-based access control
- Audit logging implementation
- Professional UI/UX design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- NextAuth.js for authentication
- Tailwind CSS for styling
- MongoDB for database
- Next.js team for the framework

---

**Built with ❤️ using the MERN stack**
"# full-stack" 
