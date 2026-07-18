"use client";

import React from "react";
import { Compass } from "lucide-react";

/**
 * Premium Minimalist ExploreHeader Component for NotePilot AI
 */
export default function ExploreHeader() {
    return (
        <div className="w-full space-y-3 px-2">

            {/* ছোট প্রিমিয়াম ট্যাগলাইন বা ব্যাজ */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600">
                <Compass className="w-3.5 h-3.5 animate-pulse" />
                <span className="text-[11px] font-extrabold tracking-wider uppercase">
                    Discover Knowledge
                </span>
            </div>

            {/* মেইন টাইটেল এবং ডেসক্রিপশন আর্কিটেকচার */}
            <div className="space-y-2 max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                    Explore Notes & Patterns
                </h1>
                <p className="text-sm md:text-base font-medium text-slate-500 leading-relaxed">
                    Browse through decentralized storage solutions, Next.js architectural patterns, smart contracts, and full-stack insights shared by the community.
                </p>
            </div>

        </div>
    );
}