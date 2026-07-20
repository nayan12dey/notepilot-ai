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

    console.log("note card id:", id)
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
        <article className="group relative flex flex-col h-full w-full bg-white border-2 border-slate-100 rounded-[32px] overflow-hidden hover:border-blue-600 hover:shadow-[0_24px_50px_-12px_rgba(59,130,246,0.12)] transition-all duration-500">

            {/* Image */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-xl bg-white text-xs font-bold border">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">

                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formattedDate}
                    </span>

                    <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {readTime}
                    </span>
                </div>

                <div className="flex-1">
                    <h3 className="text-xl font-bold line-clamp-2">
                        {title}
                    </h3>

                    <p className="mt-2 text-slate-500 line-clamp-3">
                        {description}
                    </p>
                </div>

                <Link
                    href={`/note/${id}`}
                    className="mt-6 inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-50 hover:bg-blue-600 hover:text-white font-semibold transition"
                >
                    View Details
                    <ArrowUpRight className="w-4 h-4" />
                </Link>

            </div>
        </article>
    );
}