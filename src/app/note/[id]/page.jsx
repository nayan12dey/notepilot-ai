"use client";

import React, { useEffect, useState } from "react";
import BackButton from "@/components/note/BackButton";
import NoteHero from "@/components/note/NoteHero";
import NoteMeta from "@/components/note/NoteMeta";
import AISummary from "@/components/note/AISummary";
import NoteContent from "@/components/note/NoteContent";
import NoteTags from "@/components/note/NoteTags";
import { useParams } from "next/navigation";

export default function NoteDetailsPage() {

    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    console.log(id,"noteid")

    useEffect(() => {

        async function getNote() {

            console.log("NOTE ID:", id);

            const res = await fetch(`http://localhost:5000/notes/${id}`);

            const data = await res.json();

            console.log("API DATA:", data);


            setNote(data);

            setLoading(false);
        }

        if (id) {
            getNote();
        }

    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }

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
                    title={note?.title}
                    category={note?.category}
                    coverImage={note?.coverImage}
                />

                {/* Metadata Row Component */}
                <NoteMeta
                    author={note?.author?.name}
                    role={"Author"}
                    createdDate={new Date(note?.createdAt).toLocaleDateString()}
                    readingTime={note?.readingTime}
                />

                {/* AI Summary Layer Component */}
                <AISummary summary={"AI Summary is not available yet."} />

                {/* Main Note Narrative / Content Component */}
                <NoteContent content={note?.content} />

                {/* Tags Cluster Component */}
                <NoteTags tags={note?.tags} />

            </div>
        </main>
    );
}