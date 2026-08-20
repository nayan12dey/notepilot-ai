"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";

export default function NoteCard({
    id,
    title,
    description,
    imageUrl,
    category,
    createdAt,
}) {

    // fallback image
    const image =
        imageUrl && imageUrl.startsWith("http")
            ? imageUrl
            : "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop";

    // format date
    const formattedDate = createdAt
        ? new Date(createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        })
        : "Recently";

    // estimate reading time
    const readTime = `${Math.max(
        1,
        Math.ceil((description?.split(" ").length || 50) / 200)
    )} min read`;

    return (
        <article className="group relative flex flex-col h-full w-full bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-[32px] overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_16px_40px_-12px_rgba(6,182,212,0.15)] transition-all duration-500 shadow-2xl shadow-slate-950/30">

            {/* Image Section */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-cyan-300 text-xs font-bold shadow-sm backdrop-blur-md">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 p-6">

                {/* Metadata */}
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 pb-4 border-b border-slate-800/80">
                    <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-500/80" />
                        {formattedDate}
                    </span>

                    <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-cyan-500/80" />
                        {readTime}
                    </span>
                </div>

                {/* Text Content */}
                <div className="flex-1 space-y-2.5">
                    <h3 className="text-xl font-bold text-slate-50 line-clamp-2 tracking-tight group-hover:text-cyan-400 transition-colors">
                        {title}
                    </h3>

                    <p className="text-slate-400 text-sm md:text-base leading-relaxed line-clamp-3 font-medium">
                        {description}
                    </p>
                </div>

                {/* Action Button */}
                <Link
                    href={`/note/${id}`}
                    className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 text-slate-100 hover:text-white font-bold transition-all duration-300 shadow-inner group-hover:shadow-lg shadow-slate-950/20 hover:shadow-cyan-500/20"
                >
                    View Details
                    <ArrowUpRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

            </div>
        </article>
    );
}