"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function DashboardPage() {
  const { isLoggedIn, user } = useAuth();

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
      {isLoggedIn ? (
        <div className="max-w-md w-full bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
            Dashboard
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
            Welcome back to your workspace, <span className="font-semibold text-indigo-600 dark:text-indigo-400">{user?.name}</span>.
          </p>
          <div className="h-32 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-dashed border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-400 text-sm">
            Your pilot workspace is ready.
          </div>
        </div>
      ) : (
        <div className="max-w-md w-full bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-red-600 dark:text-red-400 mb-3">
            Access Denied
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
            You must be logged in to access the dashboard.
          </p>
          <Link 
            href="/" 
            className="inline-block px-5 py-2.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 font-semibold text-sm transition-all duration-300"
          >
            Go Home to Log In
          </Link>
        </div>
      )}
    </div>
  );
}
