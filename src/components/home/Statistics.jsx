"use client";

import React from "react";
import { Users, FileText, Sparkles, TrendingUp } from "lucide-react";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

export default function Statistics() {
    // ৪টি স্ট্যাটিস্টিকস কার্ডের ডেটা
    const statsData = [
        {
            icon: <Users className="w-6 h-6 text-blue-600" />,
            value: "850K+",
            label: "Active Users",
            change: "+12.4% this month",
            isPositive: true,
        },
        {
            icon: <FileText className="w-6 h-6 text-purple-600" />,
            value: "42M+",
            label: "Notes Created",
            change: "+2.1M new notes",
            isPositive: true,
        },
        {
            icon: <Sparkles className="w-6 h-6 text-amber-600" />,
            value: "150M+",
            label: "AI Suggestions",
            change: "98.4% accuracy rate",
            isPositive: true,
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
            value: "4.8x",
            label: "Productivity Boost",
            change: "Based on user surveys",
            isPositive: true,
        },
    ];

    // Recharts-এর জন্য ডাইনামিক গ্রোথ ট্রেন্ড ডেটা
    const chartData = [
        { name: "Jan", notes: 1200, suggestions: 2400 },
        { name: "Feb", notes: 1900, suggestions: 3600 },
        { name: "Mar", notes: 3200, suggestions: 5800 },
        { name: "Apr", notes: 4500, suggestions: 8900 },
        { name: "May", notes: 6100, suggestions: 12000 },
        { name: "Jun", notes: 8200, suggestions: 17500 },
    ];

    return (
        // পিওর হোয়াইট ব্যাকগ্রাউন্ড থিম
        <section className="w-full bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-200">
            <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full">

                {/* Section Header */}
                <div className="max-w-3xl space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 tracking-wide uppercase">
                        Platform Metrics
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-950">
                        Trusted by Creators, <br />
                        Powered by <span className="text-blue-600">Real Data.</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 max-w-xl">
                        See how fast the NotePilot community is growing and how AI is actively changing daily productivity metrics worldwide.
                    </p>
                </div>

                {/* 4-Column Responsive Grid Layout for Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:border-blue-600 hover:shadow-lg flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                                    {stat.icon}
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-slate-950 tracking-tight">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm font-bold text-slate-500 pt-0.5">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-3 border-t border-slate-200/60 text-xs font-semibold text-emerald-600">
                                {stat.change}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recharts Analytics Dashboard Card */}
                <div className="w-full bg-slate-50 border-2 border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <h3 className="text-xl font-extrabold text-slate-950">AI Integration Trend</h3>
                            <p className="text-xs md:text-sm text-slate-500">Comparing total generated notes against AI auto-suggestions.</p>
                        </div>
                        {/* Custom Interactive Legend */}
                        <div className="flex items-center gap-4 text-xs font-bold">
                            <div className="flex items-center gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-blue-500 inline-block" />
                                <span className="text-slate-600">Notes Volume</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-purple-500 inline-block" />
                                <span className="text-slate-600">AI Tokens / Suggestions</span>
                            </div>
                        </div>
                    </div>

                    {/* Responsive Recharts Wrapper Container */}
                    <div className="w-full h-[300px] md:h-[380px] text-xs font-semibold">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorNotes" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorSuggestions" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#a855f7" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="name" tickLine={false} stroke="#94a3b8" />
                                <YAxis tickLine={false} axisLine={false} stroke="#94a3b8" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '1rem',
                                        border: '1px solid #e2e8f0',
                                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)'
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="notes"
                                    stroke="#3b82f6"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorNotes)"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="suggestions"
                                    stroke="#a855f7"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorSuggestions)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </section>
    );
}