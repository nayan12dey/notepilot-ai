"use client";

import React from "react";
import NoteCard from "./NoteCard";


export default function NotesGrid({ notes = [] }) {

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-fr items-stretch">
                {notes.map((note) => (
                    <div key={note._id} className="flex w-full">
                        <NoteCard
                            id={note._id}
                            title={note.title}
                            description={note.shortDescription}
                            category={note.category}
                            readTime="5 min read"
                            date={new Date(note.createdAt).toLocaleDateString()}
                            imageUrl={note.coverImage}

                        />
                    </div>
                ))}
            </div>
        </div>
    );
}