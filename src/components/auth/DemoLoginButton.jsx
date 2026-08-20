"use client";

import React from "react";
import { Terminal } from "lucide-react";

export default function DemoLoginButton({ onFillDemo, isLoading }) {
    return (
        <button
            type="button"
            onClick={onFillDemo}
            disabled={isLoading}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-dashed border-slate-700/80 bg-slate-950/60 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-900/80 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 font-extrabold text-xs tracking-wide cursor-pointer group select-none shadow-inner"
        >
            <Terminal className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors duration-300" />
            <span>Auto-fill Demo Sandbox Credentials</span>
        </button>
    );
}