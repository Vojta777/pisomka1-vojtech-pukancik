import React from 'react';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to My Project!</h1>
        <p className="text-lg mb-6">
          This is a simple homepage built with Next.js, TypeScript, and Tailwind CSS.
        </p>
        <div className="space-x-4">
          <a
            href="/auth/prihlasenie"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Login
          </a>
          <a
            href="/auth/registracia"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Register
          </a>
        </div>
      </div>
    </main>
  );
}
