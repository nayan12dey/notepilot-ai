"use client";

import AIFeatures from "@/components/home/AIFeatures";
import FAQ from "@/components/home/FAQ";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import { useAuth } from "@/context/AuthContext";
import { Sparkles, UserCheck, ShieldCheck, Cpu } from "lucide-react";

export default function Home() {
  const { isLoggedIn, user, login, logout } = useAuth();

  return (
    // <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden py-24 px-6">
    //   {/* Background gradients */}
    //   <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
    //   <div className="absolute bottom-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

    //   <div className="max-w-3xl w-full text-center relative z-10">
    //     {/* Badge */}
    //     <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/50 dark:border-indigo-800/30 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-8">
    //       <Sparkles className="w-3.5 h-3.5" />
    //       <span>Next.js App Router + HeroUI v3 Demo</span>
    //     </div>

    //     {/* Heading */}
    //     <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.15] mb-6">
    //       Welcome to{" "}
    //       <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500">
    //         NotePilot AI
    //       </span>
    //     </h1>

    //     {/* Subtitle */}
    //     <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
    //       Experience a beautiful, fully responsive navigation bar styled with glassmorphism, responsive dropdown menus, active route highlighting, and smooth transitions.
    //     </p>

    //     {/* Simulation Dashboard */}
    //     <div className="max-w-md mx-auto p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/60 bg-white/50 dark:bg-zinc-950/40 backdrop-blur-md shadow-xl mb-12">
    //       <h2 className="text-md font-bold text-zinc-800 dark:text-zinc-200 mb-4 flex items-center justify-center gap-2">
    //         <Cpu className="w-4.5 h-4.5 text-indigo-500" />
    //         <span>Interactive Navbar Tester</span>
    //       </h2>
    //       <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
    //         Click the buttons below to switch authentication states and observe the Navbar update in real-time.
    //       </p>

    //       <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
    //         {isLoggedIn ? (
    //           <button
    //             onClick={logout}
    //             className="w-full sm:w-auto px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-red-600 hover:bg-red-500 shadow-md shadow-red-500/10 hover:shadow-red-500/20 transition-all duration-300 cursor-pointer"
    //           >
    //             Simulate Log Out
    //           </button>
    //         ) : (
    //           <button
    //             onClick={login}
    //             className="w-full sm:w-auto px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer"
    //           >
    //             Simulate Log In
    //           </button>
    //         )}
    //       </div>

    //       <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
    //         <span className="text-zinc-400">Current Status:</span>
    //         {isLoggedIn ? (
    //           <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
    //             <UserCheck className="w-3.5 h-3.5" />
    //             <span>Logged In as {user?.name}</span>
    //           </span>
    //         ) : (
    //           <span className="inline-flex items-center gap-1 font-bold text-zinc-500">
    //             <ShieldCheck className="w-3.5 h-3.5" />
    //             <span>Logged Out</span>
    //           </span>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      <Hero></Hero>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <AIFeatures></AIFeatures>
      <Statistics></Statistics>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
    </div>
  );
}
