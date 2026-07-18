"use client";

import React, { useState, useEffect } from "react";
import {
    Search,
    SlidersHorizontal,
    ArrowUpDown,
    Sparkles,
    FileText,
    Folder,
    Calendar,
    ChevronLeft,
    ChevronRight,
    Inbox
} from "lucide-react";

// --- DUMMY DATA ---
const DUMMY_NOTES = [
    { id: "1", title: "Blockchain Architecture & IPFS Nodes", category: "Tech", snippet: "Exploring decentralized image scaling layers using ERC-721 tokens paired with cryptographic pinning on IPFS protocol structures for immutable storage networks.", date: "2026-07-15", aiSummarized: true },
    { id: "2", title: "Next.js 16 App Router Performance Optimization", category: "Dev", snippet: "Deep dive into PPR (Partial Prerendering) metrics, streaming boundary definitions, and maximizing static layout cache hits across nested segment route definitions.", date: "2026-07-12", aiSummarized: true },
    { id: "3", title: "Tailwind CSS Fluid Typography System", category: "Design", snippet: "Implementing mathematical clamp functions integrated with design tokens to generate perfectly responsive scaling ratios without layout shifts.", date: "2026-07-10", aiSummarized: false },
    { id: "4", title: "Corporate Smart Contract Audits", category: "Tech", snippet: "Security vector checks regarding reentrancy vulnerabilities, gas optimization patterns, and decentralized state machine integrity tracking models.", date: "2026-07-08", aiSummarized: true },
    { id: "5", title: "Product Growth & SaaS Conversion Funnel", category: "Business", snippet: "Analyzing behavioral dropped activation frames during user onboarding flows and replacing traditional inputs with context-aware micro-wizards.", date: "2026-07-05", aiSummarized: false },
    { id: "6", title: "Solidity Event Tracing Frameworks", category: "Dev", snippet: "Architecting off-chain indexing triggers to listen to specific smart contract state mutations and broadcasting clean webhooks to dashboard clients.", date: "2026-07-01", aiSummarized: true },
    { id: "7", title: "Vector Embeddings & Contextual RAG Systems", category: "AI", snippet: "Parsing semantic weights inside document parsing boundaries to build custom enterprise knowledge graphs that don't trigger hallucination vectors.", date: "2026-06-28", aiSummarized: true },
];

const CATEGORIES = ["All", "Tech", "Dev", "Design", "Business", "AI"];
const ITEMS_PER_PAGE = 4;

export default function ExploreHeader() {
    // --- STATES ---
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState("newest");
    const [currentPage, setCurrentPage] = useState(1);

    // Simulate premium skeleton loader mount delay
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 900);
        return () => clearTimeout(timer);
    }, []);

    // --- FILTER & SORT LOGIC ---
    const filteredNotes = DUMMY_NOTES.filter((note) => {
        const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.snippet.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || note.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const sortedNotes = [...filteredNotes].sort((a, b) => {
        if (sortBy === "newest") return new Date(b.date) - new Date(a.date);
        if (sortBy === "oldest") return new Date(a.date) - new Date(b.date);
        if (sortBy === "alphabetical") return a.title.localeCompare(b.title);
        return 0;
    });

    // --- PAGINATION LOGIC ---
    const totalPages = Math.ceil(sortedNotes.length / ITEMS_PER_PAGE);
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = sortedNotes.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Reset page to 1 when search or category shifts
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    return (
        <main className="w-full bg-white text-slate-900 min-h-screen py-20 lg:py-28 border-b border-slate-200">
            <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full">

                {/* ================= PAGE HEADER ================= */}
                <div className="max-w-3xl space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 text-xs font-bold text-white tracking-wider uppercase">
                        Knowledge Base
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-slate-950">
                        Explore Your <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Digital Brain.</span>
                    </h1>
                    <p className="text-base md:text-lg text-slate-600 max-w-xl">
                        Search, filter, and surface semantic connections instantly. Access raw thoughts or AI-distilled architecture frameworks seamlessly.
                    </p>
                </div>

                {/* ================= CONTROLS BAR (SEARCH / FILTER / SORT) ================= */}
                <div className="w-full space-y-6 mb-12 p-6 bg-slate-50 border-2 border-slate-200 rounded-3xl">
                    <div className="flex flex-col lg:flex-row items-center gap-4 w-full">

                        {/* Search Input Box */}
                        <div className="relative w-full lg:flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search notes, tags, architectural patterns..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-slate-200 rounded-2xl text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-colors"
                            />
                        </div>

                        {/* Sort Dropdown Selector */}
                        <div className="relative w-full lg:w-64 flex items-center gap-2">
                            <div className="absolute left-4 pointer-events-none flex items-center">
                                <ArrowUpDown className="w-4 h-4 text-slate-400" />
                            </div>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full pl-10 pr-10 py-3.5 bg-white border-2 border-slate-200 rounded-2xl text-slate-900 font-bold appearance-none cursor-pointer focus:outline-none focus:border-blue-600 transition-colors"
                            >
                                <option value="newest">Sort by: Newest First</option>
                                <option value="oldest">Sort by: Oldest First</option>
                                <option value="alphabetical">Sort by: A - Z</option>
                            </select>
                            <div className="absolute right-4 pointer-events-none border-l-2 border-slate-200 pl-2 text-slate-400">
                                ▼
                            </div>
                        </div>

                    </div>

                    {/* Horizontal Category Pill Filter Bar */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/60">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
                            <SlidersHorizontal className="w-3.5 h-3.5" />
                            <span>Filter:</span>
                        </div>
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategorySelect(category)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all select-none cursor-pointer ${selectedCategory === category
                                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/10"
                                        : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ================= CONTENT MAIN SECTION ================= */}
                {isLoading ? (
                    <SkeletonGrid />
                ) : currentItems.length === 0 ? (
                    <EmptyState onReset={() => {
                        setSearchQuery("");
                        setSelectedCategory("All");
                    }} />
                ) : (
                    <>
                        {/* Premium Interactive Notes Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {currentItems.map((note) => (
                                <NoteCard key={note.id} note={note} />
                            ))}
                        </div>

                        {/* Pagination Controls Wrapper */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-2 mt-16 pt-6 border-t border-slate-100">
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent transition-colors cursor-pointer select-none"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>

                                {[...Array(totalPages)].map((_, i) => {
                                    const pageNum = i + 1;
                                    return (
                                        <button
                                            key={pageNum}
                                            onClick={() => handlePageChange(pageNum)}
                                            className={`w-10 h-10 rounded-xl text-sm font-black transition-all cursor-pointer select-none ${currentPage === pageNum
                                                    ? "bg-slate-950 text-white"
                                                    : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                                                }`}
                                        >
                                            {pageNum}
                                        </button>
                                    );
                                })}

                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent transition-colors cursor-pointer select-none"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        )}
                    </>
                )}

            </div>
        </main>
    );
}