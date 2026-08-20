"use client";

import React from "react";
import { Folder, RotateCcw } from "lucide-react";

/**
 * Premium Reusable Dark-Theme FilterBar Component
 * @param {string} selectedCategory - বর্তমান সিলেক্টেড ক্যাটাগরি স্টেট
 * @param {function} onCategoryChange - ক্যাটাগরি চেঞ্জ হ্যান্ডলার
 * @param {string} selectedDateRange - বর্তমান সিলেক্টেড ডেট রেঞ্জ স্টেট
 * @param {function} onDateRangeChange - ডেট রেঞ্জ চেঞ্জ হ্যান্ডলার
 * @param {function} onReset - ফিল্টার রিসেট করার ফাংশন
 */
export default function FilterBar({
    selectedCategory = "All",
    onCategoryChange,
    // selectedDateRange = "all-time",
    // onDateRangeChange,
    onReset
}) {

    // ক্যাটাগরি অপশন ডেটা
    const categories = ["All", "Tech", "Dev", "Design", "Business", "AI"];

    return (
        <div className="w-full bg-slate-900/40 border border-slate-800/80 rounded-2xl p-4 md:p-5 transition-all duration-300">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between w-full">

                {/* Left Side: Dynamic Filters Section */}
                <div className="flex flex-col md:flex-row md:items-center gap-5 flex-1">

                    {/* 1. Category Filter Panel */}
                    <div className="space-y-2 md:space-y-0 md:flex md:items-center md:gap-3 flex-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 select-none">
                            <Folder className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Category</span>
                        </div>

                        {/* Scrollable container for mobile screen category pills */}
                        <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => onCategoryChange?.(category)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer select-none border whitespace-nowrap ${selectedCategory === category
                                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-400/50 text-white shadow-md shadow-cyan-500/20"
                                        : "bg-slate-950/60 text-slate-400 border-slate-800/80 hover:border-slate-700 hover:text-slate-200 hover:bg-slate-800/40"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Divider visible only on medium screens and up */}
                    <div className="hidden md:block w-[1px] h-8 bg-slate-800 self-center" />

                </div>

                {/* Right Side: Reset Action Button */}
                {selectedCategory !== "All" && onReset && (
                    <div className="pt-3 border-t border-slate-800/60 lg:pt-0 lg:border-t-0 lg:pl-4 flex justify-end shrink-0 animate-fadeIn">
                        <button
                            type="button"
                            onClick={onReset}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent hover:border-slate-700 transition-all duration-200 cursor-pointer select-none"
                        >
                            <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Clear Filters</span>
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}