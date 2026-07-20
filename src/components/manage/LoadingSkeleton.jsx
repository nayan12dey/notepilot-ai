"use client";

export default function LoadingSkeleton() {
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[...Array(6)].map((_, index) => (
                <div
                    key={index}
                    className="bg-white rounded-3xl border border-slate-200 p-6 animate-pulse"
                >
                    <div className="w-full h-44 rounded-2xl bg-slate-200"></div>

                    <div className="mt-5 space-y-3">
                        <div className="h-6 w-3/4 rounded bg-slate-200"></div>

                        <div className="h-4 w-full rounded bg-slate-200"></div>

                        <div className="h-4 w-5/6 rounded bg-slate-200"></div>

                        <div className="flex justify-between mt-6">
                            <div className="h-10 w-24 rounded-xl bg-slate-200"></div>

                            <div className="h-10 w-24 rounded-xl bg-slate-200"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
