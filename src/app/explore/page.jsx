"use client";

import React, { useState } from "react";
import ExploreHeader from "@/components/explore/ExploreHeader";
import SearchBar from "@/components/explore/SearchBar";
// import SortDropdown from "@/components/ui/SortDropdown";
// import NoteCard from "@/components/ui/NoteCard";
import FilterBar from "@/components/explore/FilterBar";
import SortDropdown from "@/components/explore/SortDropdown";
import NoteCard from "@/components/explore/NoteCard";

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [dateRange, setDateRange] = useState("all-time");
  const [sortBy, setSortBy] = useState("newest");

  
  const dummyNotes = [
    {
      id: 1,
      title: "Decentralized Image Storage Solution using IPFS and Solidity",
      description: "An architectural deep-dive into creating tamper-proof media sharing layers. We will discuss smart contract events, Web3 providers, and optimization techniques for Ethereum gas fees.",
      category: "Blockchain",
      readTime: "7 min read",
      date: "Jul 15, 2026",
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Mastering Next.js Interleaved Component States & Client Components",
      description: "How 'use client' directives impact bundle split sizes and tree-shaking mechanisms. Let's build optimized interactive components with seamless UI animations.",
      category: "Web Dev",
      readTime: "5 min read",
      date: "Jul 12, 2026",
      imageUrl: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Building Micro-frontends with React and Tailwind CSS Utility Layer",
      description: "A comprehensive guide to managing shareable UI states across complex enterprise applications while maintaining crisp typography and uniform responsive spacing scales.",
      category: "Design",
      readTime: "4 min read",
      date: "Jul 10, 2026",
      imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <main className="w-full bg-white text-slate-900 min-h-screen py-20 lg:py-28">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-5xl space-y-12">

        <ExploreHeader />

        {/* ফিল্টার এবং সার্চ কন্ট্রোল প্যানেল */}
        <div className="w-full p-6 bg-slate-50 border-2 border-slate-200 rounded-3xl space-y-5">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <div className="flex-1 w-full">
              <SearchBar
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClear={() => setSearchQuery("")}
                placeholder="Search notes, tags, architectural patterns..."
              />
            </div>
            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>
          <FilterBar
            selectedCategory={category}
            onCategoryChange={setCategory}
            selectedDateRange={dateRange}
            onDateRangeChange={setDateRange}
          />
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr items-stretch">
          {dummyNotes.map((note) => (
            <NoteCard
              key={note.id}
              title={note.title}
              description={note.description}
              category={note.category}
              readTime={note.readTime}
              date={note.date}
              imageUrl={note.imageUrl}
              onViewDetails={() => alert(`Opening note: ${note.title}`)}
            />
          ))}
        </div>

      </div>
    </main>
  );
}

