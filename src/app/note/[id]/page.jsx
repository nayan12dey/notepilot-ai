"use client";

import React from "react";
import BackButton from "@/components/note/BackButton";
import NoteHero from "@/components/note/NoteHero";
import NoteMeta from "@/components/note/NoteMeta";
import AISummary from "@/components/note/AISummary";
import NoteContent from "@/components/note/NoteContent";
import NoteTags from "@/components/note/NoteTags";

export default function NoteDetailsPage() {

    // NotePilot থিম ম্যাচিং ডামি ডেটা অবজেক্ট
    const dummyNote = {
        title: "Optimizing Next.js Hydration Patterns via IPFS & Smart Contract States",
        category: "Web3 Architecture",
        coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
        author: "Alex Wright",
        role: "Core Protocol Lead",
        createdDate: "Oct 24, 2026",
        readingTime: "4 min read",
        aiSummary: "This architectural framework solves Next.js client-side hydration delays when loading data directly from block clusters. By leveraging decentralized metadata snapshots via IPFS gateways, applications can safely decouple web hydration loops from synchronous block generation timelines, improving overall user performance.",
        content: `Modern decentralized web architectures demand ultra-fast delivery loops without introducing state inconsistency. When fetching initial data records directly from EVM smart contracts, clients frequently experience hydration mismatches due to block delays and network timestamps diverging from server-side rendering configurations.

    To bypass this latency bottleneck, NotePilot utilizes a hybrid caching layer. By pinning critical UI metadata structures into IPFS directories and resolving them via distributed edge gateways, the front-end guarantees immediate client hydration. 

    The following integration blueprint maps out the execution context:
    1. The Next.js edge runtime triggers a state snapshot request to the consensus layer.
    2. Concurrent metadata matrices are fetched from the closest active IPFS peer nodes.
    3. The application hydrates the DOM atomically before the main thread binds cryptographic transaction pipelines.

    By separating computational logic from the data availability network layer, total blocking time drops significantly while reinforcing zero-trust security constraints. This approach minimizes gas expenses while offering end-users an instantaneous, native-app experience across distributed network components.`,
        tags: ["Next.js", "IPFS", "Solidity", "Hydration", "Web3"]
    };

    return (
        <main className="w-full bg-white text-slate-900 min-h-screen overflow-x-hidden pt-20 lg:pt-6 pb-20">

            {/* Centered Main Container */}
            <div className="container mx-auto px-6 md:px-12 max-w-4xl space-y-8">

                {/* Back Button Wrapper */}
                <div className="flex items-center justify-between w-full border-b border-slate-100 pb-5">
                    <BackButton />
                </div>

                {/* Hero Section Component */}
                <NoteHero
                    title={dummyNote.title}
                    category={dummyNote.category}
                    coverImage={dummyNote.coverImage}
                />

                {/* Metadata Row Component */}
                <NoteMeta
                    author={dummyNote.author}
                    role={dummyNote.role}
                    createdDate={dummyNote.createdDate}
                    readingTime={dummyNote.readingTime}
                />

                {/* AI Summary Layer Component */}
                <AISummary summary={dummyNote.aiSummary} />

                {/* Main Note Narrative / Content Component */}
                <NoteContent content={dummyNote.content} />

                {/* Tags Cluster Component */}
                <NoteTags tags={dummyNote.tags} />

            </div>
        </main>
    );
}