"use client";

import React from "react";
import { Clock, Calendar, ArrowUpRight, Eye } from "lucide-react";

/**
 * Premium Reusable NoteCard Component for NotePilot AI
 * @param {string} title - নোটের টাইটেল
 * @param {string} description - নোটের শর্ট ডেসক্রিপশন (সর্বোচ্চ ৩ লাইন লকড)
 * @param {string} imageUrl - কাভার ইমেজের সোর্স URL
 * @param {string} category - ক্যাটাগরি টেক্সট (যেমন: AI, Blockchain, Web Dev)
 * @param {string} date - পাবলিশিং বা এডিট করার তারিখ
 * @param {string} readTime - পড়ার আনুমানিক সময় (যেমন: 5 min read)
 * @param {function} onViewDetails - ভিউ ডিটেইলস বাটনের ক্লিক হ্যান্ডলার ফাংশন
 */
export default function NoteCard({
    title,
    description,
    imageUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", // প্রিমিয়াম ডামি কাভার ইমেজ
    category = "Development",
    date = "Jul 18, 2026",
    readTime = "4 min read",
    onViewDetails
}) {
    return (
        <article className="group relative flex flex-col h-full w-full bg-white border-2 border-slate-100 rounded-[32px] overflow-hidden hover:border-blue-600 hover:shadow-[0_24px_50px_-12px_rgba(59,130,246,0.12)] transition-all duration-500 ease-out">

            {/* ১. ইমেজ কন্টেইনার উইথ প্রিমিয়াম হোভার জুম */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 shrink-0">
                <img
                    src={imageUrl}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* ক্যাটাগরি ব্যাজ (ফ্লোটিং) */}
                <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3.5 py-1.5 rounded-xl text-xs font-extrabold tracking-wide uppercase bg-white/95 backdrop-blur-md text-slate-800 border border-slate-200/50 shadow-sm select-none">
                        {category}
                    </span>
                </div>
            </div>

            {/* ২. কার্ড বডি কন্টেন্ট (flex-1 এবং flex-col নিশ্চিত করে সব কার্ডের হাইট সেম রাখবে) */}
            <div className="flex flex-col flex-1 p-6 md:p-7">

                {/* মেটা ইনফো (ডেট ও রিড টাইম) */}
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-3 select-none">
                    <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-300" />
                        {date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-200" />
                    <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-300" />
                        {readTime}
                    </span>
                </div>

                {/* টাইটেল এবং ডেসক্রিপশন */}
                <div className="space-y-2 mb-6 flex-1">
                    <h3 className="text-lg md:text-xl font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {title}
                    </h3>
                    <p className="text-sm font-medium text-slate-500 leading-relaxed line-clamp-3">
                        {description}
                    </p>
                </div>

                {/* ৩. অ্যাকশন বাটন সেকশন */}
                <div className="pt-4 border-t border-slate-50 mt-auto">
                    <button
                        type="button"
                        onClick={onViewDetails}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-bold bg-slate-50 group-hover:bg-blue-600 text-slate-700 group-hover:text-white transition-all duration-300 ease-out cursor-pointer select-none"
                    >
                        <span>View Details</span>
                        <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </button>
                </div>

            </div>
        </article>
    );
}