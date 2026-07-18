"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
    // সক্রিয় অ্যাকোর্ডিয়ান ইনডেক্স ট্র্যাক করার জন্য স্টেট
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // ৬টি অর্থপূর্ণ নোট-পাইলিট এআই সম্পর্কিত এফএকিউ ডেটা
    const faqData = [
        {
            question: "How does the AI Chat Assistant understand the context of my notes?",
            answer: "NotePilot AI uses localized semantic parsing and vector embeddings. Instead of reading just one active document, our engine analyzing links and overlapping concepts safely across your entire history to answer queries with comprehensive personal context."
        },
        {
            question: "Are my personal thoughts and data secure and private?",
            answer: "Absolutely. Security is our top priority. All your notes are protected with enterprise-grade AES-256 end-to-end encryption. Your data is strictly yours—we never use your personal notes to train public LLM models."
        },
        {
            question: "How do Smart Recommendations connect different notes automatically?",
            answer: "As you write, NotePilot runs real-time background processing to identify core entities and themes. It instantly suggests related past research or ideas from your repository, eliminating the need for manual nested folder structures."
        },
        {
            question: "Can I use NotePilot AI offline without an internet connection?",
            answer: "Yes! NotePilot Workspace v2.0 comes with full offline functionality. You can draft, edit, and organize notes seamlessly. Once your device goes back online, it safely syncs everything to the encrypted cloud vault automatically."
        },
        {
            question: "What format can I export my workspace data into?",
            answer: "We support absolute platform flexibility. You can export individual documents or your entire knowledge base instantly into clean Markdown (.md), PDF, JSON, or standard HTML structures at any time."
        },
        {
            question: "Is there a limit to how many notes I can summarize using the AI tool?",
            answer: "Free tier accounts receive 50 AI generation credits per month. Pro and Enterprise tiers offer unlimited AI processing, instant vector token indexing, and deeper long-form document summarization capabilities."
        }
    ];

    return (
        // পিওর হোয়াইট ব্যাকগ্রাউন্ড এবং স্ট্যান্ডার্ড হরিজন্টাল বর্ডার
        <section className="w-full bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-200">
            <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 tracking-wide uppercase">
                        Support Center
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-950">
                        Frequently Asked <span className="text-blue-600">Questions</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto">
                        Got questions about NotePilot AI features, data security, or operations? We have answers.
                    </p>
                </div>

                {/* Accordion List Container */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqData.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`bg-slate-50 border-2 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "border-blue-600 bg-white shadow-md" : "border-slate-200 hover:border-slate-300"
                                    }`}
                            >
                                {/* Accordion Header / Trigger Button */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 md:p-7 text-left gap-4 cursor-pointer focus:outline-none select-none"
                                    aria-expanded={isOpen}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isOpen ? "bg-blue-100 text-blue-600" : "bg-white text-slate-400 border border-slate-200"
                                            }`}>
                                            <HelpCircle className="w-4 h-4" />
                                        </div>
                                        <span className="text-base md:text-lg font-extrabold text-slate-950 tracking-tight">
                                            {faq.question}
                                        </span>
                                    </div>

                                    {/* Smooth Rotating Arrow Icon */}
                                    <ChevronDown
                                        className={`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-blue-600" : ""
                                            }`}
                                    />
                                </button>

                                {/* Smooth Expandable Content Panel */}
                                <div
                                    className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px] opacity-100 border-t-2 border-slate-100" : "max-h-0 opacity-0 pointer-events-none"
                                        }`}
                                >
                                    <div className="p-6 md:p-7 bg-white text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}