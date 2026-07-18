"use client";

import React from "react";
import { FolderOpen, RotateCcw } from "lucide-react";

/**
 * Premium Reusable EmptyState Component for NotePilot AI
 * @param {string} title - মূল এরর বা নোটিফিকেশন মেসেজ
 * @param {string} description - ইউজারকে পরবর্তী অ্যাকশন নেওয়ার জন্য সহায়তামূলক সাব-টেক্সট
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
        <div className="w-full py-16 px-6 md:py-24 flex flex-col items-center justify-center border-2 border-dashed border-slate-200/80 rounded-[32px] bg-slate-50/50 backdrop-blur-sm text-center max-w-2xl mx-auto transition-all duration-300">

            {/* ১. মডার্ন ও লাক্সারি ইলাস্ট্রেশন প্লেসহোল্ডার */}
            <div className="relative flex items-center justify-center w-24 h-24 mb-6 rounded-[24px] bg-white border border-slate-100 shadow-[0_16px_36px_-12px_rgba(148,163,184,0.18)] group">

                {/* ফ্লোটিং ব্যাকগ্রাউন্ড ডেকোরেশন গ্লো */}
                <div className="absolute inset-0 bg-blue-50 rounded-[24px] scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out" />

                {/* সেন্ট্রাল মডার্ন আইকন গ্রাফিক্স */}
                <FolderOpen className="relative w-10 h-10 text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-500 ease-out" />

                {/* ছোট ফ্লোটিং অরবিট ডট */}
                <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-blue-500 animate-ping opacity-75" />
                <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-blue-500" />
            </div>

            {/* ২. মেসেজ টেক্সট আর্কিটেকচার */}
            <div className="space-y-2 max-w-md mb-8">
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
                    {title}
                </h3>
                <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* ৩. প্রিমিয়াম রিসেট অ্যাকশন বাটন */}
            {onAction && (
                <button
                    type="button"
                    onClick={onAction}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold bg-slate-900 text-white hover:bg-blue-600 shadow-[0_12px_24px_-8px_rgba(15,23,42,0.3)] hover:shadow-[0_12px_24px_-8px_rgba(59,130,246,0.4)] transition-all duration-300 ease-out cursor-pointer active:scale-[0.98] select-none"
                >
                    <RotateCcw className="w-4 h-4 opacity-90 animate-none group-hover:rotate-180 transition-transform duration-500" />
                    <span>{actionLabel}</span>
                </button>
            )}

        </div>
    );
}