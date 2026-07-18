"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Premium Reusable Pagination Component for NotePilot AI
 * @param {number} currentPage - বর্তমান অ্যাক্টিভ পেজ নম্বর
 * @param {number} totalPages - মোট পেজের সংখ্যা
 * @param {function} onPageChange - পেজ পরিবর্তন হ্যান্ডলার ফাংশন
 */
export default function Pagination({
    currentPage = 1,
    totalPages = 5,
    onPageChange
}) {

    // পেজ নম্বরের অ্যারে তৈরি করার লজিক
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-between border-t border-slate-100 px-4 py-6 sm:px-6 w-full select-none">

            {/* ১. মোবাইল লেআউট (শুধুমাত্র Prev এবং Next বাটন টেক্সট সহ) */}
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    onClick={() => currentPage > 1 && onPageChange?.(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center rounded-xl border-2 border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:border-blue-600 disabled:opacity-50 disabled:hover:border-slate-200 transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed"
                >
                    Previous
                </button>
                <span className="text-xs font-bold text-slate-500 self-center">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => currentPage < totalPages && onPageChange?.(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="relative ml-3 inline-flex items-center rounded-xl border-2 border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:border-blue-600 disabled:opacity-50 disabled:hover:border-slate-200 transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>

            {/* ২. ট্যাবলেট ও ডেক্সটপ লেআউট (ডিটেইলড পেজ নম্বর সহ) */}
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between w-full">
                <div>
                    <p className="text-sm font-medium text-slate-500">
                        Showing page <span className="font-extrabold text-slate-900">{currentPage}</span> of{" "}
                        <span className="font-extrabold text-slate-900">{totalPages}</span>
                    </p>
                </div>

                <div>
                    <nav className="isolate inline-flex -space-x-px gap-1.5" aria-label="Pagination">

                        {/* Previous Arrow Button */}
                        <button
                            onClick={() => currentPage > 1 && onPageChange?.(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center rounded-xl border-2 border-slate-200 bg-white p-2.5 text-slate-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-500 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                        </button>

                        {/* Dynamic Page Numbers */}
                        {pageNumbers.map((page) => {
                            const isActive = page === currentPage;
                            return (
                                <button
                                    key={page}
                                    onClick={() => onPageChange?.(page)}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`relative inline-flex items-center rounded-xl border-2 px-4 py-2 text-sm font-extrabold transition-all duration-200 cursor-pointer min-w-[40px] justify-center
                    ${isActive
                                            ? "bg-blue-600 border-blue-600 text-white shadow-[0_8px_20px_-6px_rgba(59,130,246,0.4)]"
                                            : "bg-white border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600"
                                        }`}
                                >
                                    {page}
                                </button>
                            );
                        })}

                        {/* Next Arrow Button */}
                        <button
                            onClick={() => currentPage < totalPages && onPageChange?.(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="relative inline-flex items-center rounded-xl border-2 border-slate-200 bg-white p-2.5 text-slate-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-500 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                        </button>

                    </nav>
                </div>
            </div>

        </div>
    );
}