"use client";

import React from "react";
import { Terminal } from "lucide-react";

export default function DemoLoginButton({ onFillDemo, isLoading }) {
    return (
        <button
            type="button"
            onClick={onFillDemo}
            disabled={isLoading}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-dashed border-slate-300 text-slate-500 font-bold text-xs bg-slate-50/50 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-50 transition-all duration-200 cursor-pointer"
        >
            <Terminal className="w-3.5 h-3.5 text-slate-400" />
            <span>Auto-fill Demo Sandbox Credentials</span>
        </button>
    );
}