"use client";

import React from "react";
import { Search, X } from "lucide-react";

/**
 * Premium Reusable Dark-Theme SearchBar Component for NotePilot AI
 * @param {string} value - দ্য কারেন্ট সার্চ কোয়েরি স্টেট
 * @param {function} onChange - ইনপুট চেঞ্জ হ্যান্ডলার ফাংশন
 * @param {string} placeholder - কাস্টম প্লেসহোল্ডার টেক্সট (অপশনাল)
 * @param {function} onClear - সার্চ টেক্সট ওয়ান-ক্লিকে ক্লিয়ার করার ফাংশন (অপশনাল)
 */
export default function SearchBar({
    value = "",
    onChange,
    placeholder = "Search notes...",
    onClear
}) {
    return (
        <div className="relative w-full group">
            {/* Left side Search Icon */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors duration-200" />
            </div>

            {/* Premium Dark Glass Input Field */}
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full pl-12 pr-12 py-3.5 bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl text-slate-100 font-medium placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 focus:shadow-[0_0_20px_-3px_rgba(6,182,212,0.25)] hover:border-slate-700 transition-all duration-300 text-sm md:text-base"
            />

            {/* Right side Clear Button (Only shows when input has text) */}
            {value && onClear && (
                <button
                    type="button"
                    onClick={onClear}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg bg-slate-800/80 border border-slate-700/50 text-slate-400 hover:bg-slate-700 hover:text-white transition-all cursor-pointer select-none"
                    title="Clear search"
                >
                    <X className="w-4 h-4" />
                </button>
            )}
        </div>
    );
}