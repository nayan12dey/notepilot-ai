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
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950 text-slate-100 border-b border-slate-800/80">

      {/* AI Atmosphere Glow Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/10 to-purple-600/20 blur-3xl rounded-full pointer-events-none" />

      {/* Container */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10 w-full py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">

          {/* Left Content Column */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8 max-w-2xl lg:max-w-none">
            <div className="space-y-4 md:space-y-5">

              {/* High-Contrast Dark Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-bold text-cyan-300 tracking-wide shadow-sm shadow-cyan-500/10 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                Introducing NotePilot Workspace v2.0
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Unlock Your Thoughts with{" "}
                <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
                  NotePilot AI
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-slate-300">
                The smart workspace for modern thinkers.
              </h2>

              <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Elevate your note-taking experience with intelligent organization, seamless collaboration, and AI-driven insights. Turn scattered ideas into actionable knowledge.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <Button
                size="lg"
                className="w-full sm:w-auto font-bold px-8 h-12 text-sm md:text-base bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all rounded-xl flex items-center justify-center gap-2 group cursor-pointer border border-white/10"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                className="w-full sm:w-auto font-bold h-12 text-sm md:text-base bg-purple-950/40 hover:bg-purple-900/50 text-purple-300 border border-purple-500/30 transition-all rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-purple-500/10"
              >
                <span>Explore Notes</span>
                <Sparkles className="w-4 h-4 text-purple-400" />
              </Button>
            </div>
          </div>

          {/* Right Column: High-Contrast Dark Mock UI Dashboard */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none hidden lg:block">
            {/* Main Outer Container */}
            <div className="relative w-full aspect-[4/3] bg-slate-900/60 rounded-[2.5rem] border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden">

              {/* App Box */}
              <div className="absolute inset-5 bg-slate-950/90 rounded-2xl border border-slate-800/80 shadow-xl p-5 flex flex-col gap-4">

                {/* Mock Application Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center shadow-md shadow-indigo-500/20">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-100">Weekly Project Strategy</h4>
                      <p className="text-[10px] font-medium text-slate-500">Updated 2 mins ago</p>
                    </div>
                  </div>
                  {/* Window Controls */}
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                </div>

                {/* Simulated Editor Content */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                      AI Summary
                    </span>
                    <div className="h-3 w-1/3 bg-slate-800 rounded-full animate-pulse" />
                  </div>

                  {/* Content Placeholder Lines */}
                  <div className="space-y-2.5 pt-1">
                    <div className="h-3 w-full bg-slate-800/80 rounded-full" />
                    <div className="h-3 w-11/12 bg-slate-800/80 rounded-full" />
                    <div className="h-3 w-4/5 bg-slate-800/80 rounded-full" />
                  </div>

                  {/* Dark AI Insight Box */}
                  <div className="mt-4 p-3 rounded-xl bg-purple-950/30 border border-purple-500/30 flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-purple-300">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                      NotePilot Assistant Insights
                    </div>
                    <div className="h-2 w-full bg-purple-900/40 rounded-full" />
                    <div className="h-2 w-2/3 bg-purple-900/40 rounded-full" />
                  </div>
                </div>

                {/* Mock Application Footer Bar */}
                <div className="mt-auto flex justify-between items-center pt-3 border-t border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Saved to Cloud
                  </div>
                  <div className="h-8 px-4 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-bold rounded-lg flex items-center justify-center shadow-md text-[10px] tracking-wider uppercase cursor-pointer transition-all border border-white/10">
                    AI Optimize
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Dark Scroll Button */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce cursor-pointer text-slate-500 hover:text-cyan-400 transition-colors z-20"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Scroll</span>
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>
    </section>
  );
}