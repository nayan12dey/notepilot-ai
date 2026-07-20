"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Sparkles, RefreshCw, FileText, Layers, Hash, Sliders, Eye } from "lucide-react";

export default function AIGeneratorPage() {
    const [template, setTemplate] = useState("Blog Article");
    const [topic, setTopic] = useState("");
    const [keywords, setKeywords] = useState("");
    const [length, setLength] = useState("Medium");

    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);

    const generateContent = async () => {
        try {
            setLoading(true);
            const res = await fetch(
                "http://localhost:5000/generate-note",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        topic,
                        keywords,
                        template,
                        length
                    })
                }
            );

            const data = await res.json();
            setContent(data.content);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6 md:p-10 text-slate-900">
            {/* Header section */}
            <div className="max-w-7xl mx-auto mb-8">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-xl text-purple-600">
                        <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                            AI Content Generator
                        </h1>
                        <p className="text-sm text-slate-500 mt-1">
                            Generate high-quality notes and articles powered by advanced AI templates.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main responsive grid layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Left side: Controls (Form) */}
                <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">

                    {/* Content Type Selector */}
                    <div>
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <Layers className="w-4 h-4 text-slate-400" /> Content Type
                        </label>
                        <select
                            className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 bg-white text-slate-800 transition-colors"
                            value={template}
                            onChange={(e) => setTemplate(e.target.value)}
                        >
                            <option className="bg-white text-slate-800">Blog Article</option>
                            <option className="bg-white text-slate-800">Product Description</option>
                            <option className="bg-white text-slate-800">Documentation</option>
                            <option className="bg-white text-slate-800">Social Media Post</option>
                        </select>
                    </div>

                    {/* Topic Input */}
                    <div>
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-slate-400" /> Topic / Concept
                        </label>
                        <input
                            className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 bg-white text-slate-800 transition-colors"
                            placeholder="e.g., Introduction to React Hooks"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                        />
                    </div>

                    {/* Keywords Input */}
                    <div>
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <Hash className="w-4 h-4 text-slate-400" /> Keywords (Comma separated)
                        </label>
                        <input
                            className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 bg-white text-slate-800 transition-colors"
                            placeholder="e.g., webdev, react, frontend"
                            value={keywords}
                            onChange={(e) => setKeywords(e.target.value)}
                        />
                    </div>

                    {/* Length Field */}
                    <div>
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <Sliders className="w-4 h-4 text-slate-400" /> Output Length
                        </label>
                        <select
                            className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 bg-white text-slate-800 transition-colors"
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                        >
                            <option className="bg-white text-slate-800">Short</option>
                            <option className="bg-white text-slate-800">Medium</option>
                            <option className="bg-white text-slate-800">Long</option>
                        </select>
                    </div>

                    {/* Primary Trigger Button */}
                    <button
                        onClick={generateContent}
                        disabled={loading}
                        className="w-full bg-purple-600 text-white py-3.5 rounded-xl font-bold hover:bg-purple-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all duration-200 shadow-sm shadow-purple-200 flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <RefreshCw className="w-4 h-4 animate-spin" />
                                Generating Content...
                            </>
                        ) : (
                            <>
                                <Sparkles className="w-4 h-4" />
                                Generate Note
                            </>
                        )}
                    </button>
                </div>

                {/* Right side: AI Output Showcase */}
                <div className="lg:col-span-7 h-full">
                    {content ? (
                        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col h-full min-h-[500px]">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                                <div className="flex items-center gap-2 text-slate-800 font-bold text-lg">
                                    <Eye className="w-5 h-5 text-purple-500" />
                                    Generated Output
                                </div>
                                <button
                                    onClick={generateContent}
                                    disabled={loading}
                                    className="flex items-center gap-1.5 text-xs font-bold text-purple-600 bg-purple-50 hover:bg-purple-100 px-3 py-2 rounded-xl transition"
                                >
                                    <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                                    Regenerate
                                </button>
                            </div>

                            <div className="prose prose-slate max-w-none text-slate-700 flex-1 overflow-y-auto leading-relaxed selection:bg-purple-100">
                                <ReactMarkdown>{content}</ReactMarkdown>
                            </div>
                        </div>
                    ) : (
                        <div className="border-2 border-dashed border-slate-200 bg-slate-50/50 rounded-3xl p-12 text-center flex flex-col items-center justify-center min-h-[500px] transition-all">
                            <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm mb-4">
                                <Sparkles className="w-8 h-8 text-slate-300" />
                            </div>
                            <h3 className="font-bold text-slate-700 text-lg">Your workspace is ready</h3>
                            <p className="text-slate-400 text-sm max-w-sm mt-1.5 mx-auto">
                                Fill in the fields on the left and hit generate to construct markdown formatted notes.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}