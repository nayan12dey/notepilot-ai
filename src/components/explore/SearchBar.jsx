"use client";

import React from "react";
import { Search, X } from "lucide-react";

/**
 * Premium Reusable SearchBar Component
 * @param {string} value - দ্য কারেন্ট সার্চ কোয়েরি স্টেট
 * @param {function} onChange - ইনপুট চেঞ্জ হ্যান্ডলার ফাংশন
 * @param {string} placeholder - কাস্টম প্লেসহোল্ডার টেক্সট (অপশনাল)
 * @param {function} onClear - সার্চ টেক্সট ওয়ান-ক্লিকে ক্লিয়ার করার ফাংশন (অপশনাল)
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
                <Search className="w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors duration-200" />
            </div>

            {/* Premium Styled Input Field */}
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full pl-12 pr-12 py-3.5 bg-white border-2 border-slate-200 rounded-2xl text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] hover:border-slate-300 transition-all duration-200 text-sm md:text-base"
            />

            {/* Right side Clear Button (Only shows when input has text) */}
            {value && onClear && (
                <button
                    type="button"
                    onClick={onClear}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors cursor-pointer select-none"
                    title="Clear search"
                >
                    <X className="w-4 h-4" />
                </button>
            )}
        </div>
    );
}