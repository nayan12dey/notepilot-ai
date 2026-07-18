"use client";

import React from "react";
import { PlusCircle, Cpu, Lightbulb, Activity } from "lucide-react";

export default function HowItWorks() {
    // ৪টি স্টেপের ডেটা স্ট্রাকচার
    const steps = [
        {
            icon: <PlusCircle className="w-6 h-6 text-blue-600" />,
            title: "Create Note",
            description: "Start by typing, pasting, or importing your raw thoughts, meeting transcripts, or documents into the clean editor.",
        },
        {
            icon: <Cpu className="w-6 h-6 text-purple-600" />,
            title: "AI Analyzes",
            description: "The powerful NotePilot engine processes your text instantly, extracting core themes, action items, and structural outlines.",
        },
        {
            icon: <Lightbulb className="w-6 h-6 text-amber-600" />,
            title: "Get Smart Recommendations",
            description: "Watch the system discover hidden connections across your workspace, suggesting related notes and linking similar concepts.",
        },
        {
            icon: <Activity className="w-6 h-6 text-emerald-600" />,
            title: "Manage & Improve",
            description: "Organize your new knowledge graph, track insights, and let AI seamlessly update your smart dashboard.",
        },
    ];

    return (
        // পিওর হোয়াইট ব্যাকগ্রাউন্ড থিম
        <section className="w-full bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-200 overflow-hidden">
            <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 tracking-wide uppercase">
                        Workflow
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-950">
                        How Does <span className="text-blue-600">NotePilot AI</span> Work?
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto">
                        From scattered text to structured intelligence in four incredibly simple steps.
                    </p>
                </div>

                {/* Workflow Container */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Desktop Connecting Line (Hidden on Mobile/Tablet) */}
                    <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-[2px] bg-slate-200 z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="group relative flex flex-col items-center lg:items-start text-center lg:text-left z-10">

                            {/* Step Icon and Number Badge */}
                            <div className="relative mb-6">
                                {/* Step Number Indicator */}
                                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-[10px] font-black text-white border-2 border-white shadow-sm">
                                    0{index + 1}
                                </span>

                                {/* Icon Wrapper */}
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 border-2 border-slate-200 flex items-center justify-center shadow-md group-hover:border-blue-600 group-hover:bg-white group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                                    {step.icon}
                                </div>
                            </div>

                            {/* Step Content */}
                            <div className="space-y-3 px-4 lg:px-0">
                                <h3 className="text-xl font-extrabold text-slate-950 group-hover:text-blue-600 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Mobile/Tablet Connecting Line (Shows below each item except the last one) */}
                            {index < steps.length - 1 && (
                                <div className="lg:hidden w-[2px] h-10 bg-slate-200 my-4 md:hidden" />
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}