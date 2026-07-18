"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function AISummary({ summary }) {
    return (
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-[28px] p-6 md:p-8 space-y-3 shadow-md relative overflow-hidden">
            {/* Subtle background glow mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent)] pointer-events-none" />

            <div className="flex items-center gap-2 text-indigo-400 relative z-10">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="text-xs font-extrabold tracking-widest uppercase">NotePilot AI Synthesis</span>
            </div>

            <p className="text-sm md:text-base font-medium text-slate-300 leading-relaxed relative z-10">
                {summary}
            </p>
        </div>
    );
}