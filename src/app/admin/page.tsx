import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";

type SessionUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string | null;
};

type Session = {
  user?: SessionUser;
};

export default async function AdminPage() {
  const session = await getServerSession(authOptions) as Session;
  if (session?.user?.role !== "admin") {
    return redirect("/dashboard");
  }

  const client = await clientPromise;
  const db = client.db();
  const users = await db.collection("users").find().project({ password: 0 }).toArray();

 return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3 text-left text-sm font-semibold">Name</th>
              <th className="border p-3 text-left text-sm font-semibold">Email</th>
              <th className="border p-3 text-left text-sm font-semibold">Role</th>
              <th className="border p-3 text-left text-sm font-semibold">Created</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="border p-3 text-sm">{user.name}</td>
                <td className="border p-3 text-sm">{user.email}</td>
                <td className="border p-3 text-sm capitalize">{user.role}</td>
                <td className="border p-3 text-sm">{new Date(user.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
