"use client";

import React from "react";
import {
  Shield,
  Cpu,
  Zap,
  Globe,
  ArrowRight,
  Sparkles,
  Layers,
  Database,
  Terminal
} from "lucide-react";

export default function AboutPage() {

  // 'Why Choose Us' সেকশনের প্রিমিয়াম ফিচার ডেটা
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Decentralized Security",
      desc: "Your notes are cryptographically secured and distributed across decentralized networks, removing single points of failure."
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-600" />,
      title: "AI-Powered Synthesis",
      desc: "Context-aware AI models automatically index, tag, and connect your architectural patterns and technical insights."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "Instant Edge Hydration",
      desc: "Built on Next.js distributed networks for sub-millisecond loading times, global availability, and robust offline sync."
    }
  ];

  // 'Tech Stack' ইন্টিগ্রেশন ডেটা
  const coreTech = [
    { name: "Next.js & React", role: "UI Framework & SSR", icon: <Layers className="w-5 h-5 text-slate-700" /> },
    { name: "Tailwind CSS", role: "Atomic Styling Layer", icon: <Sparkles className="w-5 h-5 text-sky-500" /> },
    { name: "Solidity / EVM", role: "Smart Contract Logic", icon: <Terminal className="w-5 h-5 text-violet-600" /> },
    { name: "IPFS Network", role: "Decentralized Storage", icon: <Database className="w-5 h-5 text-teal-600" /> }
  ];

  return (
    <main className="w-full bg-white text-slate-900 min-h-screen overflow-x-hidden pt-20 lg:pt-10 pb-16">

      {/* ─── HERO SECTION ─── */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl text-center space-y-6 mb-20 md:mb-32">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 mx-auto">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span className="text-[11px] font-extrabold tracking-wider uppercase">Behind the Protocol</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-none">
          Redefining Knowledge Management for the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Decentralized Web</span>
        </h1>

        <p className="text-base md:text-xl font-medium text-slate-500 max-w-2xl mx-auto leading-relaxed">
          NotePilot AI bridges the gap between advanced cryptographic ownership and highly intuitive, AI-driven technical documentation.
        </p>
      </section>

      {/* ─── MISSION & VISION SECTION ─── */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl mb-24 md:mb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Mission Card */}
          <div className="p-8 md:p-12 bg-slate-50 border-2 border-slate-100 rounded-[32px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">Our Mission</h2>
              <p className="text-sm md:text-base font-medium text-slate-500 leading-relaxed">
                To empower developers, Web3 engineers, and tech innovators with a seamless ecosystem where knowledge isn't just stored on traditional silos, but truly owned. We aim to convert raw markdown data and blockchain schemas into actionable, permanent intelligence layers.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 md:p-12 bg-slate-900 text-white rounded-[32px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-transparent to-transparent pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white text-slate-900 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white">Our Vision</h2>
              <p className="text-sm md:text-base font-medium text-slate-400 leading-relaxed">
                We envision a future where documentation dynamically evolves alongside smart contract lifecycles. A web where developers can seamlessly deploy zero-knowledge codebases while instantly generating human-readable, immutable architectural mappings accessible across the edge networks.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ─── WHY CHOOSE US SECTION ─── */}
      <section className="bg-slate-50/60 border-y border-slate-100 py-24 md:py-32 mb-24 md:mb-36">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Engineered for the Modern Technical Mind
            </h2>
            <p className="text-sm md:text-base font-medium text-slate-500">
              Traditional note systems lock your data away. NotePilot AI introduces architectural sovereignty at every layer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat, index) => (
              <div key={index} className="bg-white p-8 border border-slate-200/60 rounded-[28px] shadow-sm hover:shadow-md transition-shadow duration-300 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">{feat.title}</h3>
                <p className="text-sm font-medium text-slate-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK SECTION ─── */}
      <section className="container mx-auto px-6 md:px-12 max-w-5xl mb-24 md:mb-36 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">The Architecture Stack</h2>
          <p className="text-sm font-medium text-slate-500 max-w-xl mx-auto">
            NotePilot AI is engineered using enterprise-grade paradigms ensuring scalability, performance, and decentralization.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {coreTech.map((tech, index) => (
            <div key={index} className="p-5 border-2 border-slate-100 rounded-2xl flex flex-col items-center text-center bg-white hover:border-blue-200/80 transition-colors duration-300">
              <div className="p-3 bg-slate-50 rounded-xl mb-3 border border-slate-100">
                {tech.icon}
              </div>
              <h3 className="text-base font-extrabold text-slate-900 leading-tight">{tech.name}</h3>
              <p className="text-xs font-semibold text-slate-400 mt-1">{tech.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[40px] p-8 md:p-16 text-white text-center space-y-6 relative overflow-hidden shadow-[0_24px_48px_-12px_rgba(37,99,235,0.25)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent)] pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-2xl mx-auto leading-none">
            Ready to Take Control of Your Technical Knowledge?
          </h2>
          <p className="text-sm md:text-base font-medium text-blue-100 max-w-md mx-auto leading-relaxed">
            Join thousands of developers cataloging smart contracts, software schemas, and cryptographic insights globally.
          </p>
          <div className="pt-4">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-white text-blue-600 hover:bg-slate-50 shadow-xl transition-all duration-300 cursor-pointer active:scale-[0.98] select-none"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}