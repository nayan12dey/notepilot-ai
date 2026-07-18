"use client";

import React from "react";
import {
    MessageSquare,
    Sparkles,
    FileText,
    ShieldCheck,
    Search,
    LayoutDashboard
} from "lucide-react";

export default function Features() {
    // ৬টি প্রিমিয়াম এআই ফিচারের ডেটা অ্যারে
    const featuresData = [
        {
            icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
            title: "AI Chat Assistant",
            description: "Chat directly with your notes. Ask questions, extract key concepts, and brainstorm ideas instantly with our built-in AI context awareness.",
            badge: "Popular"
        },
        {
            icon: <Sparkles className="w-6 h-6 text-purple-600" />,
            title: "Smart Recommendations",
            description: "Discover hidden connections. Discover hidden connections between old and new notes as the system automatically links relevant topics.",
            badge: "New"
        },
        {
            icon: <FileText className="w-6 h-6 text-emerald-600" />,
            title: "AI Summarization",
            description: "Turn hours of reading into seconds. Condense long articles, meeting transcripts, or scattered thoughts into structured, beautiful summaries.",
            badge: null
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
            title: "Secure Storage",
            description: "Enterprise-grade privacy. Your thoughts are protected with top-tier end-to-end encryption. Safe, secure, and entirely yours.",
            badge: null
        },
        {
            icon: <Search className="w-6 h-6 text-amber-600" />,
            title: "Fast Search",
            description: "Instant semantic search. Find exactly what you mean, even if you don't remember the precise keywords, thanks to AI vector indexing.",
            badge: null
        },
        {
            icon: <LayoutDashboard className="w-6 h-6 text-indigo-600" />,
            title: "Responsive Dashboard",
            description: "A gorgeous, distraction-free writing environment that syncs perfectly across desktop, tablet, and mobile browsers in real-time.",
            badge: null
        }
    ];

    return (
        // পিওর হোয়াইট ব্যাকগ্রাউন্ড এবং হিরো সেকশনের সাথে মেলানো প্যাডিং
        <section className="w-full bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-200">
            <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 tracking-wide uppercase">
                        Core Features
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-950">
                        Supercharge Your Workflow with <span className="text-blue-600">NotePilot AI</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                        Everything you need to organize your thoughts, automate your tasks, and scale your personal knowledge base effortlessly.
                    </p>
                </div>

                {/* Responsive Grid Layout */}
                {/* Mobile: 1 Column | Tablet: 2 Columns | Desktop: 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {featuresData.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-slate-50 rounded-2xl border-2 border-slate-200 p-6 md:p-8 transition-all duration-300 hover:bg-white hover:border-blue-600 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                {/* Icon Wrapper Control */}
                                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>

                                {/* Title & Optional Badge */}
                                <div className="flex items-center justify-between gap-2 pt-2">
                                    <h3 className="text-xl font-extrabold text-slate-950 group-hover:text-blue-600 transition-colors">
                                        {feature.title}
                                    </h3>
                                    {feature.badge && (
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase ${feature.badge === "Popular"
                                                ? "bg-blue-100 text-blue-800 border border-blue-200"
                                                : "bg-purple-100 text-purple-800 border border-purple-200"
                                            }`}>
                                            {feature.badge}
                                        </span>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-1">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Bottom Subtle Interaction Link */}
                            <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                                Learn more &rarr;
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}