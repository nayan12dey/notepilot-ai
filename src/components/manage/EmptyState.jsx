"use client";

import Link from "next/link";
import { FileText, Plus } from "lucide-react";

export default function EmptyState() {
    return (
        <div className="bg-white border border-slate-200 rounded-3xl py-20 px-8 text-center">

            <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto">
                <FileText className="w-9 h-9 text-slate-400" />
            </div>

            <h2 className="mt-6 text-2xl font-black text-slate-900">
                No Notes Found
            </h2>

            <p className="mt-3 text-slate-500 max-w-md mx-auto">
                You haven't created any notes yet.
                Start by adding your first note.
            </p>

            <Link
                href="/note/add"
                className="inline-flex items-center gap-2 mt-8 bg-slate-900 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl transition"
            >
                <Plus className="w-4 h-4" />
                Add Note
            </Link>
        </div>
    );
}