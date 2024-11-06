"use client";

import { signOut } from "next-auth/react";

export default function SignOutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold mb-4 text-red-600">Sign Out</h1>
        <p className="text-lg mb-6">Are you sure you want to sign out?</p>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Sign Out
        </button>
      </div>
    </main>
  );
}
