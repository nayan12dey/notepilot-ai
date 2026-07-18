"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function ProfilePage() {
  const { isLoggedIn, user } = useAuth();

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
      {isLoggedIn ? (
        <div className="max-w-md w-full bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl flex flex-col items-center">
          <img
            className="w-20 h-20 rounded-full border-4 border-indigo-500/25 mb-4 object-cover"
            src={user?.avatar}
            alt="Profile Avatar"
          />
          <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-1">
            {user?.name}
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
            {user?.email}
          </p>
          <div className="w-full text-left bg-zinc-50 dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800/80 rounded-xl p-4 text-xs text-zinc-600 dark:text-zinc-400 space-y-2">
            <div><span className="font-bold">Subscription:</span> Pro Plan</div>
            <div><span className="font-bold">API Key Status:</span> Active</div>
            <div><span className="font-bold">Member Since:</span> July 2026</div>
          </div>
        </div>
      ) : (
        <div className="max-w-md w-full bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-red-600 dark:text-red-400 mb-3">
            Access Denied
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
            Please log in to view your profile settings.
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
