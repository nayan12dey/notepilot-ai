"use client";

import React from "react";
import { Calendar, Clock, Bookmark, Share2 } from "lucide-react";

export default function NoteMeta({ author, role, createdDate, readingTime }) {
    // নামের সংক্ষিপ্ত রূপ (Initial) বের করার জন্য
    const getInitials = (name) => {
        return name ? name.split(" ").map(n => n[0]).join("").toUpperCase() : "AI";
    };

    return (
        <div className="flex flex-wrap items-center justify-between gap-y-4 pt-2 border-y border-slate-100 py-4 text-slate-500 text-xs font-medium">
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6">
                {/* Author Details */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-[10px] shadow-sm">
                        {getInitials(author)}
                    </div>
                    <div>
                        <span className="font-extrabold text-slate-900 block leading-none mb-0.5">{author}</span>
                        <span className="text-[10px] text-slate-400 font-medium block leading-none">{role}</span>
                    </div>
                </div>

                {/* Created Date */}
                <div className="flex items-center gap-1.5 border-l border-slate-200 pl-4 invisible sm:visible">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{createdDate}</span>
                </div>

                {/* Reading Time */}
                <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{readingTime}</span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
                <button type="button" className="p-2 rounded-xl border border-slate-200 text-slate-400 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer">
                    <Bookmark className="w-3.5 h-3.5" />
                </button>
                <button type="button" className="p-2 rounded-xl border border-slate-200 text-slate-400 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer">
                    <Share2 className="w-3.5 h-3.5" />
                </button>
            </div>
        </div>
    );
}