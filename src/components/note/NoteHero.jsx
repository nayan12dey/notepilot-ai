"use client";

import React from "react";
import Image from "next/image"; // 🛠️ Next.js Image কম্পোনেন্ট ইম্পোর্ট করা হয়েছে
import { Cpu } from "lucide-react";

export default function NoteHero({ title, category, coverImage }) {
    return (
        <div className="space-y-6">
            {/* Cover Image Container */}
            {/* 🛠️ Next.js-এর fill প্রপস ব্যবহারের জন্য প্যারেন্ট ডিভে 'relative' থাকা বাধ্যতামূলক */}
            <div className="w-full h-[240px] md:h-[400px] rounded-[32px] overflow-hidden border border-slate-200/60 relative group shadow-sm bg-slate-50">
                <Image
                    src={coverImage}
                    alt={title}
                    fill // 🛠️ রেসপন্সিভ হাইট ও উইডথ কভার করার জন্য fill ব্যবহার করা হয়েছে
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px" // পারফরম্যান্স ও ক্যাশিং অপটিমাইজেশনের জন্য
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
                    priority // 🛠️ cover image সাধারণত LCP (Largest Contentful Paint) এলিমেন্ট হওয়ায় loading="eager" এর বদলে priority দেওয়া বেস্ট প্র্যাকটিস
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Category & Title */}
            <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-blue-50 border border-blue-100/60 text-blue-600">
                    <Cpu className="w-3 h-3" />
                    <span className="text-[10px] font-extrabold tracking-wider uppercase">
                        {category}
                    </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                    {title}
                </h1>
            </div>
        </div>
    );
}