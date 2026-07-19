"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function AuthHeader({ title, subtitle }) {
    return (
        <div className="text-center space-y-3 mb-8">
            {/* Brand Icon Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 mx-auto">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span className="text-[10px] font-extrabold tracking-wider uppercase">NotePilot Sovereign Node</span>
            </div>

            {/* Title & Subtitle */}
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                {title}
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-500 max-w-sm mx-auto leading-relaxed">
                {subtitle}
            </p>
        </div>
    );
}