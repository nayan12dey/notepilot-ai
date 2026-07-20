"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import LoadingSkeleton from "./LoadingSkeleton";
import EmptyState from "./EmptyState";
import NoteCard from "./NoteCard";
import { authClient, useSession } from "@/lib/auth-client";



export default function ManageNotes() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    

    const fetchNotes = async () => {
        try {

             const session = await authClient.getSession();
             const email = session?.data?.user?.email;
             console.log(email)


            setLoading(true);

            const res = await fetch(`http://localhost:5000/my-notes?email=${email}`);

            const data = await res.json();

            setNotes(data);
        } catch (error) {
            console.log(error);
            toast.error("Failed to load notes");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    if (loading) {
        return <LoadingSkeleton />;
    }

    if (notes.length === 0) {
        return <EmptyState />;
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {notes.map((note) => (
                <NoteCard
                    key={note._id}
                    note={note}
                    fetchNotes={fetchNotes}
                />
            ))}
        </div>
    );
}