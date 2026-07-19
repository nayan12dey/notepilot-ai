"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AddNoteForm from "@/components/add/AddNoteForm";

export default function AddNotePage() {

  const router = useRouter();

  const { data: session, isPending } = useSession();


  useEffect(() => {

    if (!isPending && !session?.user) {
      router.push("/login");
    }

  }, [session, isPending, router]);


  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">
          Loading...
        </p>
      </div>
    )
  }


  if (!session?.user) return null;


  return (
    <main className="min-h-screen bg-white pt-20 pb-20">

      <div className="max-w-4xl mx-auto px-6">

        <div className="mb-8">

          <h1 className="text-4xl font-black text-slate-900">
            Create New Note
          </h1>

          <p className="text-slate-500 mt-2">
            Add your knowledge and let NotePilot organize it.
          </p>

        </div>


        <AddNoteForm user={session.user} />

      </div>

    </main>
  );
}