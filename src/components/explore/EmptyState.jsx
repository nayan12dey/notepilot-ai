"use client";

import React from "react";
import { FolderOpen, RotateCcw } from "lucide-react";

/**
 * Premium Reusable Dark-Theme EmptyState Component for NotePilot AI
 * @param {string} title - মূল এরর বা নোটিফিকেশন মেসেজ
 * @param {string} description - ইউজারকে পরবর্তী অ্যাকশন নেওয়ার জন্য সহায়তামূলক সাব-টেক্সট
 * @param {string} actionLabel - বাটনের ভেতরের টেক্সট
 * @param {function} onAction - বাটনে ক্লিক করলে যে ফাংশনটি ট্রিগার হবে
 */
export default function EmptyState({
    title = "No notes found",
    description = "We couldn't find any documents matching your current search queries or advanced filter combinations.",
    actionLabel = "Reset Filters",
    onAction
}) {
    return (
        <div className="w-full py-16 px-6 md:py-24 flex flex-col items-center justify-center border-2 border-dashed border-slate-800/80 rounded-[32px] bg-slate-900/40 backdrop-blur-xl text-center max-w-2xl mx-auto transition-all duration-300">

            {/* ১. মডার্ন ও লাক্সারি ইলাস্ট্রেশন প্লেসহোল্ডার */}
            <div className="relative flex items-center justify-center w-24 h-24 mb-6 rounded-[24px] bg-slate-950 border border-slate-800 shadow-xl group">

                {/* ফ্লোটিং ব্যাকগ্রাউন্ড ডেকোরেশন গ্লো */}
                <div className="absolute inset-0 bg-cyan-950/60 rounded-[24px] scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out" />

                {/* সেন্ট্রাল মডার্ন আইকন গ্রাফিক্স */}
                <FolderOpen className="relative w-10 h-10 text-slate-500 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-500 ease-out" />

                {/* ছোট ফ্লোটিং অরবিট ডট */}
                <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
                <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-cyan-400" />
            </div>

            {/* ২. মেসেজ টেক্সট আর্কিটেকচার */}
            <div className="space-y-2 max-w-md mb-8">
                <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight leading-none">
                    {title}
                </h3>
                <p className="text-sm font-medium text-slate-400 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* ৩. প্রিমিয়াম রিসেট অ্যাকশন বাটন */}
            {onAction && (
                <button
                    type="button"
                    onClick={onAction}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:opacity-90 shadow-lg shadow-cyan-500/20 transition-all duration-300 ease-out cursor-pointer active:scale-[0.98] select-none"
                >
                    <RotateCcw className="w-4 h-4 opacity-90 transition-transform duration-500 hover:rotate-180" />
                    <span>{actionLabel}</span>
                </button>
            )}

        </div>
    );
}