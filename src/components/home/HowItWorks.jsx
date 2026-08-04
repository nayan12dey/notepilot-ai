"use client";

import React from "react";
import { PlusCircle, Cpu, Lightbulb, Activity } from "lucide-react";

export default function HowItWorks() {
    // ৪টি স্টেপের ডেটা স্ট্রাকচার
    const steps = [
        {
            icon: <PlusCircle className="w-6 h-6 text-cyan-400" />,
            title: "Create Note",
            description: "Start by typing, pasting, or importing your raw thoughts, meeting transcripts, or documents into the clean editor.",
        },
        {
            icon: <Cpu className="w-6 h-6 text-purple-400" />,
            title: "AI Analyzes",
            description: "The powerful NotePilot engine processes your text instantly, extracting core themes, action items, and structural outlines.",
        },
        {
            icon: <Lightbulb className="w-6 h-6 text-amber-400" />,
            title: "Get Smart Recommendations",
            description: "Watch the system discover hidden connections across your workspace, suggesting related notes and linking similar concepts.",
        },
        {
            icon: <Activity className="w-6 h-6 text-emerald-400" />,
            title: "Manage & Improve",
            description: "Organize your new knowledge graph, track insights, and let AI seamlessly update your smart dashboard.",
        },
    ];

    return (
        // Dark Theme Section Background
        <section className="relative w-full bg-slate-950 text-slate-100 py-20 lg:py-28 border-b border-slate-800/80 overflow-hidden">

            {/* Dark Mode Ambient Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 blur-[130px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-bold text-cyan-300 tracking-wide uppercase shadow-sm shadow-cyan-500/10">
                        Workflow
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
                        How Does <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">NotePilot AI</span> Work?
                    </h2>
                    <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto">
                        From scattered text to structured intelligence in four incredibly simple steps.
                    </p>
                </div>

                {/* Workflow Container */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Desktop Connecting Line (Hidden on Mobile/Tablet) */}
                    <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-cyan-500/20 via-indigo-500/40 to-purple-500/20 z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="group relative flex flex-col items-center lg:items-start text-center lg:text-left z-10">

                            {/* Step Icon and Number Badge */}
                            <div className="relative mb-6">
                                {/* Step Number Indicator */}
                                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-[10px] font-black text-slate-950 border-2 border-slate-950 shadow-md z-20">
                                    0{index + 1}
                                </span>

                                {/* Icon Wrapper */}
                                <div className="w-16 h-16 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-center shadow-lg backdrop-blur-md group-hover:border-cyan-500/50 group-hover:bg-slate-900 group-hover:scale-110 group-hover:shadow-cyan-500/10 transition-all duration-300">
                                    {step.icon}
                                </div>
                            </div>

                            {/* Step Content */}
                            <div className="space-y-3 px-4 lg:px-0">
                                <h3 className="text-xl font-extrabold text-slate-100 group-hover:text-cyan-400 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Mobile/Tablet Connecting Line */}
                            {index < steps.length - 1 && (
                                <div className="lg:hidden w-[2px] h-10 bg-slate-800 my-4 md:hidden" />
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}