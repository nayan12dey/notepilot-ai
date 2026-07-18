"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, HelpCircle, FileX } from "lucide-react";

export default function NotFound() {
    return (
        <main className="w-full min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center px-6 relative overflow-hidden">

            {/* ─── background subtle grid / details ─── */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

            <div className="relative z-10 max-w-2xl text-center space-y-8 flex flex-col items-center">

                {/* ─── ANIMATED ILLUSTRATION ICON LAYER ─── */}
                <div className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-slate-50 border-2 border-slate-100 shadow-sm group">
                    {/* Background pulses */}
                    <div className="absolute inset-0 rounded-3xl bg-blue-500/5 animate-ping opacity-75 pointer-events-none" />

                    {/* Main Icon */}
                    <FileX className="w-12 h-12 text-blue-600 transition-transform duration-500 group-hover:rotate-12" />

                    {/* Floating Micro Decors */}
                    <span className="absolute -top-2 -right-2 p-1.5 bg-purple-500 text-white rounded-xl shadow-md border border-purple-400/20">
                        <HelpCircle className="w-3 h-3 animate-bounce" />
                    </span>
                </div>

                {/* ─── LARGE 404 HEADING ARTIFACT ─── */}
                <div className="space-y-3">
                    <h1 className="text-8xl sm:text-9xl font-black tracking-tighter bg-gradient-to-b from-slate-900 via-slate-800 to-slate-400 bg-clip-text text-transparent select-none leading-none">
                        404
                    </h1>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        Protocol Node Disconnected
                    </h2>
                    <p className="text-sm sm:text-base font-medium text-slate-500 max-w-md mx-auto leading-relaxed">
                        The documentation payload or route layer you are looking for does not exist on this network grid. It may have been re-indexed or dropped entirely.
                    </p>
                </div>

                {/* ─── SUGGESTED LINKS ACCORDION LAYER ─── */}
                <div className="w-full max-w-sm bg-slate-50 border border-slate-200/60 rounded-2xl p-4 text-left space-y-3">
                    <p className="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase px-1">
                        Suggested Core Coordinates
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                        <Link
                            href="/explore"
                            className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 text-xs font-bold text-slate-700 transition-all shadow-sm"
                        >
                            <Compass className="w-3.5 h-3.5 shrink-0 text-blue-500" />
                            <span>Explore Notes</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 hover:border-purple-500 hover:text-purple-600 text-xs font-bold text-slate-700 transition-all shadow-sm"
                        >
                            <HelpCircle className="w-3.5 h-3.5 shrink-0 text-purple-500" />
                            <span>Contact Support</span>
                        </Link>
                    </div>
                </div>

                {/* ─── CALL TO ACTION ACTIONABLE BUTTON ─── */}
                <div className="pt-2">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-slate-900 text-white hover:bg-blue-600 shadow-lg hover:shadow-blue-600/10 transition-all duration-300 cursor-pointer active:scale-[0.98] select-none"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Return to Matrix</span>
                    </Link>
                </div>

            </div>

        </main>
    );
}