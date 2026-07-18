"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    router.push("/dashboard");
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-2 text-center">
          Welcome Back
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 text-center">
          Sign in to your NotePilot AI account
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Email Address</label>
            <input 
              type="email" 
              required 
              defaultValue="jane.doe@notepilot.ai" 
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50" 
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Password</label>
            <input 
              type="password" 
              required 
              defaultValue="password" 
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-550 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/25 transition-all duration-300 cursor-pointer"
          >
            Sign In (Simulated)
          </button>
        </form>
      </div>
    </div>
  );
}
