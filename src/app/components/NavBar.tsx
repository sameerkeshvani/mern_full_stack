import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function NavBar() {
  const { data: session, status } = useSession();

  return (
    <header className="backdrop-blur bg-white/80 shadow-lg rounded-b-2xl px-4 py-3 sticky top-0 z-30">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex gap-6 items-center">
          <Link href="/" className="font-bold text-primary text-lg tracking-tight hover:underline underline-offset-4 transition">MERN</Link>
          <Link href="/about" className="text-gray-700 hover:text-primary transition font-medium">About</Link>
          {session && <Link href="/dashboard" className="text-gray-700 hover:text-primary transition font-medium">Dashboard</Link>}
        </div>
        <div className="flex items-center gap-4">
          {status === "loading" ? (
            <span className="text-gray-500">Loading...</span>
          ) : session ? (
            <>
              <span className="text-sm text-gray-700 bg-gray-100 rounded px-3 py-1 mr-2">{session.user?.email}</span>
              <button className="px-4 py-1 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-all duration-150" onClick={() => signOut()}>Logout</button>
            </>
          ) : (
            <Link href="/login" className="px-4 py-1 rounded-lg border border-primary text-primary font-semibold shadow hover:bg-primary hover:text-white transition-all duration-150">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
}