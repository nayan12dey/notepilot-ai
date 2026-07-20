"use client";

import Link from "next/link";
import Image from "next/image";
import { Eye, Trash2, Calendar } from "lucide-react";
import { useState } from "react";
import DeleteNoteModal from "./DeleteNoteModal";

export default function NoteCard({ note, fetchNotes }) {

    const [openDelete, setOpenDelete] = useState(false);

    return (
        <>
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition">

                <div className="relative w-full h-52">

                    <Image
                        src={
                            note?.coverImage ||
                            "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200"
                        }
                        alt={note?.title}
                        fill
                        className="object-cover"
                    />

                </div>

                <div className="p-6">

                    <h2 className="text-xl font-black text-slate-900 line-clamp-2">
                        {note?.title}
                    </h2>

                    <p className="mt-3 text-sm text-slate-500 line-clamp-3">
                        {note?.shortDescription}
                    </p>

                    <div className="flex items-center gap-2 mt-5 text-xs text-slate-400">

                        <Calendar className="w-4 h-4" />

                        {new Date(note?.createdAt).toLocaleDateString()}

                    </div>

                    <div className="flex gap-3 mt-6">

                        <Link
                            href={`/note/${note?._id}`}
                            className="flex-1 flex justify-center items-center gap-2 bg-slate-900 text-white py-3 rounded-xl hover:bg-blue-600 transition"
                        >
                            <Eye className="w-4 h-4" />
                            View
                        </Link>

                        <button
                            onClick={() => setOpenDelete(true)}
                            className="flex-1 flex justify-center items-center gap-2 border border-red-200 text-red-600 py-3 rounded-xl hover:bg-red-50 transition cursor-pointer"
                        >
                            <Trash2 className="w-4 h-4" />
                            Delete
                        </button>

                    </div>

                </div>

            </div>

            <DeleteNoteModal
                open={openDelete}
                setOpen={setOpenDelete}
                noteId={note._id}
                fetchNotes={fetchNotes}
            />

        </>
    );
}

