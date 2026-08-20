"use client";

import React from "react";

/**
 * Premium Reusable Dark-Theme NoteCardSkeleton Component for NotePilot AI
 * Core Concept: Matches the exact spatial layouts, aspect ratios, and padding of the original NoteCard.
 */
export default function NoteCardSkeleton() {
    return (
        <div className="relative flex flex-col h-full w-full bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-[32px] overflow-hidden select-none pointer-events-none shadow-2xl shadow-slate-950/30">

            {/* ১. ইমেজ কন্টেইনার কঙ্কাল (Shimmering Box) */}
            <div className="relative w-full aspect-[16/10] bg-slate-950 overflow-hidden shrink-0 animate-pulse">
                {/* শিমার গ্লোয়িং এফেক্ট ওভারলে */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />

                {/* ফ্লোটিং ক্যাটাগরি ব্যাজ কঙ্কাল */}
                <div className="absolute top-4 left-4 z-10">
                    <div className="w-20 h-7 bg-slate-800/80 rounded-xl border border-slate-700/50" />
                </div>
            </div>

            {/* ২. কার্ড বডি কন্টেন্ট কঙ্কাল */}
            <div className="flex flex-col flex-1 p-6">

                {/* মেটা ইনফো (ডেট ও রিড টাইম বার) */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-800/80 animate-pulse">
                    <div className="w-16 h-3 bg-slate-800/80 rounded-md" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800/80" />
                    <div className="w-16 h-3 bg-slate-800/80 rounded-md" />
                </div>

                {/* টাইটেল এবং ডেসক্রিপশন স্ট্রাকচারাল লাইনস */}
                <div className="space-y-3 mb-6 flex-1 animate-pulse">
                    {/* ২ লাইনের টাইটেল কঙ্কাল */}
                    <div className="space-y-2">
                        <div className="w-11/12 h-5 bg-slate-800/90 rounded-lg" />
                        <div className="w-3/4 h-5 bg-slate-800/90 rounded-lg" />
                    </div>

                    {/* ৩ লাইনের ডেসক্রিপশন কঙ্কাল */}
                    <div className="space-y-2 pt-2">
                        <div className="w-full h-3.5 bg-slate-800/50 rounded-md" />
                        <div className="w-full h-3.5 bg-slate-800/50 rounded-md" />
                        <div className="w-4/5 h-3.5 bg-slate-800/50 rounded-md" />
                    </div>
                </div>

                {/* ৩. অ্যাকশন বাটন কঙ্কাল */}
                <div className="pt-2 mt-auto animate-pulse">
                    <div className="w-full h-[52px] bg-slate-800/80 rounded-2xl border border-slate-700/50" />
                </div>

            </div>
        </div>
    );
}