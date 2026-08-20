"use client";

import React from "react";
import { ArrowUpDown } from "lucide-react";

/**
 * Premium Reusable Dark-Theme SortDropdown Component for NotePilot AI
 * @param {string} value - বর্তমান সিলেক্টেড সর্ট অপশন স্টেট
 * @param {function} onChange - সর্ট অপশন চেঞ্জ হ্যান্ডলার ফাংশন
 */
export default function SortDropdown({ value = "newest", onChange }) {

    // সর্টিং অপশনসমূহ
    const sortOptions = [
        { value: "newest", label: "Newest First" },
        { value: "oldest", label: "Oldest First" },
        // { value: "alphabetical", label: "Title: A - Z" },
        // { value: "popular", label: "Most Popular" }
    ];

    return (
        <div className="relative w-full sm:w-64 group flex items-center">
            {/* Left Prefix Icon */}
            <div className="absolute left-4 pointer-events-none flex items-center">
                <ArrowUpDown className="w-4 h-4 text-slate-500 group-focus-within:text-cyan-400 transition-colors duration-200" />
            </div>

            {/* Premium Dark Glass Select Field */}
            <select
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                className="w-full pl-10 pr-10 py-3 bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl text-xs md:text-sm font-bold text-slate-200 appearance-none cursor-pointer focus:outline-none focus:border-cyan-500/80 focus:shadow-[0_0_20px_-3px_rgba(6,182,212,0.25)] hover:border-slate-700 transition-all duration-300"
            >
                {sortOptions.map((option) => (
                    <option key={option.value} value={option.value} className="font-semibold text-slate-200 bg-slate-900">
                        {option.label}
                    </option>
                ))}
            </select>

            {/* Right Custom Arrow Indicator */}
            <div className="absolute right-4 pointer-events-none border-l border-slate-800/80 pl-2.5 text-[9px] text-slate-500 group-focus-within:text-cyan-400 transition-colors duration-200 select-none">
                ▼
            </div>
        </div>
    );
}