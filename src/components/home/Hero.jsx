"use client";

import { Button } from "@heroui/react";
import { ArrowRight, ChevronDown, Sparkles, FileText, CheckCircle2 } from "lucide-react";
import React from "react";

export default function Hero() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    // টপ প্যাডিং বাড়িয়ে নিচে নামানো হয়েছে (pt-28 lg:pt-36) এবং নেগেটিভ মার্জিন সরানো হয়েছে
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-white text-slate-900 border-b border-slate-200 ">

      {/* কন্টেইনারের দুপাশে প্যাডিং বাড়িয়ে দেওয়া হয়েছে (px-8 md:px-16 lg:px-24) */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">

          {/* Left Content Column */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8 max-w-2xl lg:max-w-none">
            <div className="space-y-4 md:space-y-5">

              {/* Solid High-Contrast Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 tracking-wide">
                <span className="flex h-2 w-2 rounded-full bg-emerald-600" />
                Introducing NotePilot Workspace v2.0
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-950">
                Unlock Your Thoughts with{" "}
                <span className="block sm:inline text-blue-600">
                  NotePilot AI
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-slate-700">
                The smart workspace for modern thinkers.
              </h2>

              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Elevate your note-taking experience with intelligent organization, seamless collaboration, and AI-driven insights. Turn scattered ideas into actionable knowledge.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <Button
                size="lg"
                className="w-full sm:w-auto font-bold px-8 h-12 text-sm md:text-base bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-colors rounded-xl flex items-center justify-center gap-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                className="w-full sm:w-auto font-bold h-12 text-sm md:text-base bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-300 transition-colors rounded-xl flex items-center justify-center gap-2"
              >
                <span>Explore Notes</span>
                <Sparkles className="w-4 h-4 text-purple-700" />
              </Button>
            </div>
          </div>

          {/* Right Column: High-Contrast Solid Mock UI Dashboard */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none hidden lg:block">
            <div className="relative w-full aspect-[4/3] bg-slate-100 rounded-[2.5rem] border-2 border-slate-300 shadow-lg overflow-hidden">

              {/* Main App Container Box */}
              <div className="absolute inset-5 bg-white rounded-2xl border-2 border-slate-300 shadow-md p-5 flex flex-col gap-4">

                {/* Mock Application Header */}
                <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900">Weekly Project Strategy</h4>
                      <p className="text-[10px] font-medium text-slate-500">Updated 2 mins ago</p>
                    </div>
                  </div>
                  {/* Window Controls */}
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                </div>

                {/* Simulated Editor Content */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-300">AI Summary</span>
                    <div className="h-3 w-1/3 bg-slate-200 rounded-full" />
                  </div>

                  {/* Content Placeholder Lines */}
                  <div className="space-y-2.5 pt-1">
                    <div className="h-3 w-full bg-slate-200 rounded-full" />
                    <div className="h-3 w-11/12 bg-slate-200 rounded-full" />
                    <div className="h-3 w-4/5 bg-slate-200 rounded-full" />
                  </div>

                  {/* Solid Alert/Insight Box */}
                  <div className="mt-4 p-3 rounded-xl bg-purple-50 border-2 border-purple-200 flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-purple-800">
                      <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                      NotePilot Assistant Insights
                    </div>
                    <div className="h-2 w-full bg-purple-200 rounded-full" />
                    <div className="h-2 w-2/3 bg-purple-200 rounded-full" />
                  </div>
                </div>

                {/* Mock Application Footer Bar */}
                <div className="mt-auto flex justify-between items-center pt-3 border-t-2 border-slate-200">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Saved to Cloud
                  </div>
                  <div className="h-8 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg flex items-center justify-center shadow-sm text-[10px] tracking-wider uppercase cursor-pointer transition-colors">
                    AI Optimize
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Solid Bottom Scroll Button */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce cursor-pointer text-slate-500 hover:text-blue-600 transition-colors z-20"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Scroll</span>
        <ChevronDown className="w-4 h-4 text-slate-600" />
      </button>
    </section>
  );
}