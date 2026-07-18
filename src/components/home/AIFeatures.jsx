"use client";

import React from "react";
import { MessageSquareCode, BrainCircuit, Wand2, ArrowUpRight } from "lucide-react";

export default function AIFeatures() {
    const aiCapabilities = [
        {
            icon: <MessageSquareCode className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
            title: "AI Chat Assistant",
            tagline: "Context-Aware Brainstorming",
            description: "Talk to your knowledge base directly. Ask complex questions, surface buried insights, and draft fresh content instantly using data aggregated safely across all your historic notes.",
            gradient: "from-blue-500 to-cyan-500",
            accentBg: "bg-blue-50"
        },
        {
            icon: <BrainCircuit className="w-7 h-7 text-purple-600 dark:text-purple-400" />,
            title: "Smart Recommendations",
            tagline: "Automated Vector Linking",
            description: "NotePilot automatically maps out your thinking hierarchy in real-time. As you type, the engine surfaces semantic relations and recommends relevant past research.",
            gradient: "from-indigo-500 to-purple-500",
            accentBg: "bg-purple-50"
        },
        {
            icon: <Wand2 className="w-7 h-7 text-pink-600 dark:text-pink-400" />,
            title: "AI Note Summarizer",
            tagline: "Dense Concept Distillation",
            description: "Condense chaotic meeting notes, long academic papers, or cluttered journals into highly structured summaries. Instantly extract action items, metrics, and core takeaways.",
            gradient: "from-pink-500 to-rose-500",
            accentBg: "bg-pink-50"
        }
    ];

    return (
        // ক্লিন হোয়াইট ব্যাকগ্রাউন্ড থিম
        <section className="w-full bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-200 relative overflow-hidden">

            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-slate-100/50 rounded-full blur-3xl pointer-events-none z-0" />

            <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10 w-full">

                {/* Section Header */}
                <div className="max-w-3xl space-y-4 mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-xs font-bold text-white tracking-wider uppercase">
                        Next-Gen AI Capabilities
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-slate-950">
                        Intelligent features that <br />
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            think along with you.
                        </span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 max-w-xl">
                        Go beyond standard text saving. Leverage context-aware language models engineered directly into your daily workspace.
                    </p>
                </div>

                {/* Premium 3-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {aiCapabilities.map((capability, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-[2rem] border border-slate-200 p-8 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
                        >
                            {/* Top border gradient accent that reveals on hover */}
                            <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${capability.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="space-y-6">
                                {/* Icon Box with soft custom accentbg */}
                                <div className={`w-14 h-14 rounded-2xl ${capability.accentBg} flex items-center justify-center border border-slate-100 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-500`}>
                                    {capability.icon}
                                </div>

                                {/* Card Header & Tagline */}
                                <div className="space-y-1">
                                    <span className={`text-[11px] font-bold tracking-wider uppercase bg-gradient-to-r ${capability.gradient} bg-clip-text text-transparent`}>
                                        {capability.tagline}
                                    </span>
                                    <h3 className="text-2xl font-black text-slate-950 tracking-tight">
                                        {capability.title}
                                    </h3>
                                </div>

                                {/* Long/Short Description */}
                                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                                    {capability.description}
                                </p>
                            </div>

                            {/* Action Trigger Link / Premium Footer Button */}
                            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                <span>Launch Core Component</span>
                                <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                                    <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}