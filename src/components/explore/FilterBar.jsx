"use client";

import React from "react";
import { SlidersHorizontal, Calendar, Folder, RotateCcw } from "lucide-react";

/**
 * Premium Reusable FilterBar Component
 * @param {string} selectedCategory - বর্তমান সিলেক্টেড ক্যাটাগরি স্টেট
 * @param {function} onCategoryChange - ক্যাটাগরি চেঞ্জ হ্যান্ডলার
 * @param {string} selectedDateRange - বর্তমান সিলেক্টেড ডেট রেঞ্জ স্টেট
 * @param {function} onDateRangeChange - ডেট রেঞ্জ চেঞ্জ হ্যান্ডলার
 * @param {function} onReset - ফিল্টার রিসেট করার ফাংশন
 */
export default function FilterBar({
    selectedCategory = "All",
    onCategoryChange,
    selectedDateRange = "all-time",
    onDateRangeChange,
    onReset
}) {

    // ডামি অপশন ডেটা
    const categories = ["All", "Tech", "Dev", "Design", "Business", "AI"];

    const dateOptions = [
        { value: "all-time", label: "All Time" },
        { value: "today", label: "Today" },
        { value: "this-week", label: "This Week" },
        { value: "this-month", label: "This Month" },
        { value: "this-year", label: "This Year" }
    ];

    return (
        <div className="w-full bg-slate-50 border-2 border-slate-200 rounded-3xl p-5 md:p-6 transition-all duration-300">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between w-full">

                {/* Left Side: Dynamic Filters Section */}
                <div className="flex flex-col md:flex-row md:items-center gap-6 flex-1">

                    {/* 1. Category Filter Panel */}
                    <div className="space-y-2 md:space-y-0 md:flex md:items-center md:gap-3 flex-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 select-none">
                            <Folder className="w-3.5 h-3.5 text-blue-600" />
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
                                            ? "bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-600/10"
                                            : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Divider visible only on medium screens and up */}
                    <div className="hidden md:block w-[1px] h-8 bg-slate-200 self-center" />

                    {/* 2. Date Filter Dropdown */}
                    <div className="flex items-center gap-3 shrink-0">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider select-none">
                            <Calendar className="w-3.5 h-3.5 text-blue-600" />
                            <span>Timeframe</span>
                        </div>

                        <div className="relative flex items-center">
                            <select
                                value={selectedDateRange}
                                onChange={(e) => onDateRangeChange?.(e.target.value)}
                                className="pl-4 pr-10 py-2.5 bg-white border-2 border-slate-200 rounded-xl text-xs font-bold text-slate-800 appearance-none cursor-pointer focus:outline-none focus:border-blue-600 hover:border-slate-300 transition-colors"
                            >
                                {dateOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute right-3.5 pointer-events-none text-[9px] text-slate-400 border-l border-slate-200 pl-2">
                                ▼
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Side: Reset Action Button */}
                {(selectedCategory !== "All" || selectedDateRange !== "all-time") && onReset && (
                    <div className="pt-4 border-t border-slate-200/60 lg:pt-0 lg:border-t-0 lg:pl-4 flex justify-end shrink-0 animate-fadeIn">
                        <button
                            type="button"
                            onClick={onReset}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-white border border-transparent hover:border-slate-200 transition-all duration-200 cursor-pointer select-none"
                        >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Clear Filters</span>
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}