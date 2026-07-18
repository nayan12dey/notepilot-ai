"use client";

import React from "react";
import Image from "next/image"; // Next.js Image tag import করা হলো
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
    const reviews = [
        {
            name: "Sarah Jenkins",
            role: "Product Manager at TechFlow",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
            rating: 5,
            comment: "NotePilot AI has completely transformed how I run my weekly syncs. The AI doesn't just summarize; it actually understands the product context and suggests next steps perfectly.",
        },
        {
            name: "David Chen",
            role: "Full-Stack Developer",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
            rating: 5,
            comment: "The semantic search is a lifesaver. I can type a vague sentence about a bug I fixed six months ago, and NotePilot surfaces the exact code snippet and context instantly. 10/10.",
        },
        {
            name: "Elena Rostova",
            role: "Content Strategist & Writer",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
            rating: 5,
            comment: "As a writer, I used to struggle with scattered ideas across apps. Now, the smart recommendations link my old thoughts to new drafts automatically. It feels like a second brain.",
        },
    ];

    return (
        <section className="w-full bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-200">
            <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 tracking-wide uppercase">
                        Wall of Love
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-950">
                        What Thinkers Say About <span className="text-blue-600">NotePilot AI</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto">
                        Discover how professionals, developers, and writers are expanding their cognitive workflow.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="group relative bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 transition-all duration-300 hover:bg-white hover:border-blue-600 hover:shadow-xl flex flex-col justify-between h-full"
                        >
                            <div className="absolute top-6 right-8 text-slate-200 group-hover:text-blue-100 transition-colors duration-300 pointer-events-none">
                                <Quote className="w-10 h-10 fill-current" />
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium italic">
                                    "{review.comment}"
                                </p>
                            </div>

                            {/* User Profile Footer Area with Next.js Image Component */}
                            <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm ring-2 ring-slate-200 group-hover:ring-blue-600 transition-all duration-300">
                                    <Image
                                        src={review.avatar}
                                        alt={`${review.name}'s profile picture`}
                                        fill
                                        sizes="48px"
                                        className="object-cover"
                                        priority={index === 0} // First image loads faster for better LCP
                                    />
                                </div>
                                <div>
                                    <h4 className="text-base font-black text-slate-950 tracking-tight">
                                        {review.name}
                                    </h4>
                                    <p className="text-xs font-bold text-slate-500">
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