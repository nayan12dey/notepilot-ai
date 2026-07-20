"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { FileText, Folder, Image, Tag, Flag } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AddNoteForm({ user }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const categories = [
        "Tech",
        "Dev",
        "Design",
        "Business",
        "AI"
    ];

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            // Safe split mapping tags even if the input is empty or undefined
            const cleanTags = data.tags
                ? data.tags.split(",").map(tag => tag.trim()).filter(Boolean)
                : [];

            const noteData = {
                title: data.title,
                category: data.category,
                shortDescription: data.shortDescription,
                content: data.content,
                coverImage: data.coverImage,
                tags: cleanTags,
                priority: data.priority,
                author: {
                    id: user?.id,
                    name: user?.name,
                    email: user?.email
                }
            };

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/notes`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(noteData)
                }
            );

            const result = await res.json();

            if (!res.ok) {
                throw new Error(
                    result.message || "Failed to create note"
                );
            }

            toast.success("Note created successfully");
            reset();
            router.push("/");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white border border-slate-200 rounded-[32px] p-8 space-y-6 shadow-sm"
        >
            {/* Title */}
            <div>
                <label className="text-sm font-bold text-slate-700">
                    Title
                </label>
                <div className="relative mt-2">
                    <FileText
                        className="absolute left-3 top-3.5 text-slate-400 w-5 animate-pulse"
                    />
                    <input
                        {...register("title", { required: true })}
                        placeholder="Enter note title"
                        className="w-full pl-11 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                </div>
            </div>

            {/* Category */}
            <div>
                <label className="text-sm font-bold text-slate-700">
                    Category
                </label>

                <div className="relative mt-2">
                    <Folder className="absolute left-3 top-3.5 text-slate-400 w-5 pointer-events-none" />

                    <select
                        {...register("category", { required: true })}
                        defaultValue=""
                        className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors bg-white appearance-none cursor-pointer"
                    >
                        <option value="" disabled>
                            Select Category
                        </option>

                        {categories.map((category) => (
                            <option
                                key={category}
                                value={category}
                            >
                                {category}
                            </option>
                        ))}
                    </select>

                    <svg
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>

            
            {/* Short Description */}
            <div>
                <label className="text-sm font-bold text-slate-700">
                    Short Description
                </label>
                <textarea
                    {...register("shortDescription", { required: true })}
                    rows="3"
                    placeholder="Short summary about your note"
                    className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
            </div>

            {/* Full Content */}
            <div>
                <label className="text-sm font-bold text-slate-700">
                    Content
                </label>
                <textarea
                    {...register("content", { required: true })}
                    rows="10"
                    placeholder="Write your complete note..."
                    className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                />
            </div>

            {/* Image */}
            <div>
                <label className="text-sm font-bold text-slate-700">
                    Cover Image URL
                </label>
                <div className="relative mt-2">
                    <Image
                        className="absolute left-3 top-3.5 text-slate-400 w-5"
                    />
                    <input
                        {...register("coverImage")}
                        placeholder="https://image-url.com"
                        className="w-full pl-11 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                </div>
            </div>

            {/* Tags */}
            <div>
                <label className="text-sm font-bold text-slate-700">
                    Tags
                </label>
                <div className="relative mt-2">
                    <Tag
                        className="absolute left-3 top-3.5 text-slate-400 w-5"
                    />
                    <input
                        {...register("tags")}
                        placeholder="Next.js, React, AI"
                        className="w-full pl-11 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                </div>
            </div>

            {/* Priority */}
            <div>
                <label className="text-sm font-bold text-slate-700">
                    Priority
                </label>
                <div className="relative mt-2">
                    <Flag
                        className="absolute left-3 top-3.5 text-slate-400 w-5"
                    />
                    <select
                        {...register("priority")}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors bg-white appearance-none"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>

            <button
                disabled={loading}
                type="submit"
                className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold hover:bg-blue-600 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all duration-200"
            >
                {loading ? "Creating Note..." : "Create Note"}
            </button>
        </form>
    );
}