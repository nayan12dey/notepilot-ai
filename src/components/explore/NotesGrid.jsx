"use client";

import React from "react";
import NoteCard from "./NoteCard"; // আগের তৈরি করা NoteCard ইম্পোর্ট

/**
 * Premium Reusable NotesGrid Component
 * @param {Array} notes - নোট অবজেক্টের অ্যারে (অপশনাল, না দিলে ডামি ডাটা রেন্ডার হবে)
 */
export default function NotesGrid({ notes }) {

    // প্রোজেক্টের সাথে সামঞ্জস্যপূর্ণ প্রিমিয়াম ডামি ডাটাবেজ
    const defaultDummyNotes = [
        {
            id: 1,
            title: "Decentralized Image Storage Solution using IPFS and Solidity",
            description: "An architectural deep-dive into creating tamper-proof media sharing layers on Ethereum blockchain.",
            category: "Blockchain",
            readTime: "7 min read",
            date: "Jul 15, 2026",
            imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Mastering Next.js Interleaved Component States & Clients",
            description: "How 'use client' directives impact bundle split sizes, tree-shaking, and state hydration.",
            category: "Next.js",
            readTime: "5 min read",
            date: "Jul 12, 2026",
            imageUrl: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=600&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Building Micro-frontends with Tailwind Utility Layers",
            description: "A comprehensive guide to managing shareable UI tokens across distributed sub-systems smoothly.",
            category: "CSS",
            readTime: "4 min read",
            date: "Jul 10, 2026",
            imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Smart Contract Gas Optimization Patterns & Techniques",
            description: "Advanced techniques to minimize transaction execution fees using precise EVM bytecode analytics.",
            category: "Solidity",
            readTime: "9 min read",
            date: "Jul 08, 2026",
            imageUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=600&auto=format&fit=crop"
        }
    ];

    
    const displayNotes = notes || defaultDummyNotes;

    return (
        <div className="w-full">
        
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-fr items-stretch w-full">
                {displayNotes.map((note) => (
                    <div key={note.id} className="flex w-full">
                        <NoteCard
                            title={note.title}
                            description={note.description}
                            category={note.category}
                            readTime={note.readTime}
                            date={note.date}
                            imageUrl={note.imageUrl}
                            onViewDetails={() => console.log(`Navigating to note ID: ${note.id}`)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}