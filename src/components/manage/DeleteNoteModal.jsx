"use client";

import toast from "react-hot-toast";

export default function DeleteNoteModal({
    open,
    setOpen,
    noteId,
    fetchNotes
}) {

    if (!open) return null;

    const handleDelete = async () => {

        try {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/notes/${noteId}`,
                {
                    method: "DELETE"
                }
            );

            const data = await res.json();

            if (data.success) {

                toast.success("Note deleted successfully");

                setOpen(false);

                fetchNotes();

            } else {

                toast.error(data.message);

            }

        } catch (error) {

            console.log(error);

            toast.error("Something went wrong");

        }

    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">

            <div className="bg-white rounded-3xl p-8 w-full max-w-md">

                <h2 className="text-2xl font-black text-slate-900">
                    Delete Note
                </h2>

                <p className="mt-3 text-slate-500 leading-relaxed">
                    Are you sure you want to delete this note?
                    This action cannot be undone.
                </p>

                <div className="flex gap-3 mt-8">

                    <button
                        onClick={() => setOpen(false)}
                        className="flex-1 border border-slate-300 rounded-xl py-3 font-semibold hover:bg-slate-100 transition cursor-pointer"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleDelete}
                        className="flex-1 bg-red-600 text-white rounded-xl py-3 font-semibold hover:bg-red-700 transition cursor-pointer"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
}