"use client";

import React from "react";
import { ArrowUpDown } from "lucide-react";

/**
 * Premium Reusable SortDropdown Component
 * @param {string} value - বর্তমান সিলেক্টেড সর্ট অপশন স্টেট
 * @param {function} onChange - সর্ট অপশন চেঞ্জ হ্যান্ডলার ফাংশন
 */
export default function SortDropdown({ value = "newest", onChange }) {

    // রিকোয়ারমেন্ট অনুযায়ী ডামি সর্টিং অপশনসমূহ
    const sortOptions = [
        { value: "newest", label: "Newest First" },
        { value: "oldest", label: "Oldest First" },
        { value: "alphabetical", label: "Title: A - Z" },
        { value: "popular", label: "Most Popular" }
    ];

    return (
        <div className="relative w-full sm:w-64 group flex items-center">
            {/* Left Prefix Icon */}
            <div className="absolute left-4 pointer-events-none flex items-center">
                <ArrowUpDown className="w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors duration-200" />
            </div>

            {/* Premium Native Select Wrapper */}
            <select
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                className="w-full pl-10 pr-10 py-3 bg-white border-2 border-slate-200 rounded-2xl text-xs md:text-sm font-bold text-slate-800 appearance-none cursor-pointer focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] hover:border-slate-300 transition-all duration-200"
            >
                {sortOptions.map((option) => (
                    <option key={option.value} value={option.value} className="font-semibold text-slate-900 bg-white">
                        {option.label}
                    </option>
                ))}
            </select>

            {/* Right Custom Arrow Indicator */}
            <div className="absolute right-4 pointer-events-none border-l-2 border-slate-100 pl-2.5 text-[9px] text-slate-400 group-focus-within:text-blue-600 transition-colors duration-200 select-none">
                ▼
            </div>
        </div>
    );
}