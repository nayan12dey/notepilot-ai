"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
    const reviews = [
        {
            name: "Sarah Jenkins",
            role: "Product Manager at TechFlow",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
            rating: 5,
            comment: "NotePilot AI has completely transformed how I run my weekly syncs. The AI doesn't just summarize; it actually understands product context effortlessly.",
        },
        {
            name: "David Chen",
            role: "Full-Stack Developer",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
            rating: 5,
            comment: "The semantic search is a lifesaver. I can type a vague sentence about a bug I fixed six months ago, and NotePilot surfaces the exact code snippet instantly.",
        },
        {
            name: "Elena Rostova",
            role: "Content Strategist & Writer",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
            rating: 5,
            comment: "As a writer, I used to struggle with scattered ideas. Now, smart recommendations link my old thoughts to new drafts automatically. It feels like a second brain.",
        },
        {
            name: "Marcus Vance",
            role: "Lead AI Researcher",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
            rating: 5,
            comment: "The knowledge graph feature alone saves me hours every week when cross-referencing complex technical papers. Absolutely indispensable tool.",
        }
    ];

   
    const duplicatedReviews = [...reviews, ...reviews];

    return (
        <section className="relative w-full bg-slate-950 text-slate-100 py-20 lg:py-28 border-b border-slate-800/80 overflow-hidden">

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full relative z-10 mb-16">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-bold text-cyan-300 tracking-wide uppercase shadow-sm shadow-cyan-500/10">
                        Wall of Love
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
                        What Thinkers Say About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">NotePilot AI</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto">
                        Discover how professionals, developers, and writers are expanding their cognitive workflow.
                    </p>
                </div>
            </div>

            {/* Infinite Scroll Marquee Wrapper */}
            <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                <div className="flex gap-6 py-4 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
                    {duplicatedReviews.map((review, index) => (
                        <div
                            key={index}
                            className="group relative w-[350px] sm:w-[420px] flex-shrink-0 bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 transition-all duration-300 hover:bg-slate-900/90 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between whitespace-normal"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-8 text-slate-800 group-hover:text-cyan-500/20 transition-colors duration-300 pointer-events-none">
                                <Quote className="w-10 h-10 fill-current" />
                            </div>

                            <div className="space-y-6">
                                {/* Rating Stars */}
                                <div className="flex items-center gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                {/* Review Body */}
                                <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium italic">
                                    "{review.comment}"
                                </p>
                            </div>

                            {/* User Profile Footer */}
                            <div className="mt-8 pt-6 border-t border-slate-800/60 flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-800 shadow-sm ring-2 ring-slate-800 group-hover:ring-cyan-500/50 transition-all duration-300">
                                    <Image
                                        src={review.avatar}
                                        alt={`${review.name}'s profile picture`}
                                        fill
                                        sizes="48px"
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-base font-black text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors">
                                        {review.name}
                                    </h4>
                                    <p className="text-xs font-bold text-slate-400">
                                        {review.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}