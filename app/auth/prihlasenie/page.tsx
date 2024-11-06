"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Sign In</h1>
        <p className="text-lg mb-6">Sign in with Google to continue.</p>
        <button
          onClick={() => signIn("google")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Sign In with Google
        </button>
      </div>
    </main>
  );
}
