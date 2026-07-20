"use client";

import ManageNotes from "@/components/manage/ManageNotes";

// import ManageNotes from "@/components/note/ManageNotes";

export default function ManageNotesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="mb-10">
          <h1 className="text-4xl font-black text-slate-900">
            Manage Notes
          </h1>

          <p className="mt-2 text-slate-500">
            View and manage all the notes you've created.
          </p>
        </div>

        <ManageNotes />
      </div>
    </main>
  );
}