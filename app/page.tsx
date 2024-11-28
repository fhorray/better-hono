"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signUp = async () => {
    const { data, error } = await authClient.signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onRequest: (ctx) => {
          //show loading
        },
        onSuccess: (ctx) => {
          //redirect to the dashboard
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Sign Up
        </h1>
        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
            />
          </div>
          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
            />
          </div>
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={signUp}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
