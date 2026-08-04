"use client";

import React from "react";
import { MessageSquareCode, BrainCircuit, Wand2, ArrowUpRight } from "lucide-react";

export default function AIFeatures() {
    const aiCapabilities = [
        {
            icon: <MessageSquareCode className="w-7 h-7 text-cyan-400" />,
            title: "AI Chat Assistant",
            tagline: "Context-Aware Brainstorming",
            description: "Talk to your knowledge base directly. Ask complex questions, surface buried insights, and draft fresh content instantly using data aggregated safely across all your historic notes.",
            gradient: "from-cyan-500 to-blue-500",
            accentBg: "bg-cyan-950/50 border-cyan-500/30",
            hoverGlow: "hover:border-cyan-500/40 hover:shadow-cyan-500/10"
        },
        {
            icon: <BrainCircuit className="w-7 h-7 text-purple-400" />,
            title: "Smart Recommendations",
            tagline: "Automated Vector Linking",
            description: "NotePilot automatically maps out your thinking hierarchy in real-time. As you type, the engine surfaces semantic relations and recommends relevant past research.",
            gradient: "from-indigo-400 to-purple-500",
            accentBg: "bg-purple-950/50 border-purple-500/30",
            hoverGlow: "hover:border-purple-500/40 hover:shadow-purple-500/10"
        },
        {
            icon: <Wand2 className="w-7 h-7 text-pink-400" />,
            title: "AI Note Summarizer",
            tagline: "Dense Concept Distillation",
            description: "Condense chaotic meeting notes, long academic papers, or cluttered journals into highly structured summaries. Instantly extract action items, metrics, and core takeaways.",
            gradient: "from-pink-500 to-rose-500",
            accentBg: "bg-pink-950/50 border-pink-500/30",
            hoverGlow: "hover:border-pink-500/40 hover:shadow-pink-500/10"
        }
    ];

    return (
        // Dark Theme Section Background
        <section className="w-full bg-slate-950 text-slate-100 py-20 lg:py-28 border-b border-slate-800/80 relative overflow-hidden">

            {/* Ambient Background Glow Effect */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-[35vw] h-[35vw] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

            <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10 w-full">

                {/* Section Header */}
                <div className="max-w-3xl space-y-4 mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-bold text-cyan-300 tracking-wider uppercase shadow-sm shadow-cyan-500/10">
                        Next-Gen AI Capabilities
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-white">
                        Intelligent features that <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                            think along with you.
                        </span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-400 max-w-xl">
                        Go beyond standard text saving. Leverage context-aware language models engineered directly into your daily workspace.
                    </p>
                </div>

                {/* Premium 3-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {aiCapabilities.map((capability, index) => (
                        <div
                            key={index}
                            className={`group relative bg-slate-900/60 backdrop-blur-xl rounded-[2rem] border border-slate-800/80 p-8 transition-all duration-500 hover:bg-slate-900/90 hover:-translate-y-2 flex flex-col justify-between overflow-hidden shadow-2xl ${capability.hoverGlow}`}
                        >
                            {/* Top border gradient accent that reveals on hover */}
                            <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${capability.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="space-y-6">
                                {/* Icon Box with dark custom accent bg */}
                                <div className={`w-14 h-14 rounded-2xl ${capability.accentBg} flex items-center justify-center border shadow-inner group-hover:scale-110 transition-all duration-500`}>
                                    {capability.icon}
                                </div>

                                {/* Card Header & Tagline */}
                                <div className="space-y-1">
                                    <span className={`text-[11px] font-bold tracking-wider uppercase bg-gradient-to-r ${capability.gradient} bg-clip-text text-transparent`}>
                                        {capability.tagline}
                                    </span>
                                    <h3 className="text-2xl font-black text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors">
                                        {capability.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                                    {capability.description}
                                </p>
                            </div>

                            {/* Action Trigger Link / Premium Footer Button */}
                            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-sm font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                                <span>Launch Core Component</span>
                                <div className="w-8 h-8 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-500">
                                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-950 transition-colors" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}