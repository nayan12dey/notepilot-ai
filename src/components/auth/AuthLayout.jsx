"use client";

import React from "react";

export default function AuthLayout({ children }) {
    return (
        <main className="w-full min-h-screen bg-white text-slate-900 flex items-center justify-center px-6 relative overflow-hidden pt-12 pb-12">
            {/* Background Grid Pattern consistent with the brand theme */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

            {/* Glassmorphism Outer Container */}
            <div className="relative z-10 w-full max-w-[460px] bg-white border-2 border-slate-100/80 rounded-[32px] p-8 md:p-10 shadow-sm transition-all duration-300">
                {children}
            </div>
        </main>
    );
}