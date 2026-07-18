"use client";

import React, { useState } from "react";
import ExploreHeader from "@/components/explore/ExploreHeader";
import SearchBar from "@/components/explore/SearchBar";
import FilterBar from "@/components/ui/FilterBar";
import SortDropdown from "@/components/ui/SortDropdown";
import NotesGrid from "@/components/ui/NotesGrid";
import Pagination from "@/components/ui/Pagination"; // নতুন ইম্পোর্ট

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [dateRange, setDateRange] = useState("all-time");
  const [sortBy, setSortBy] = useState("newest");

  // --- পেজিনেশন স্টেট ---
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // আপনার রিকোয়ারমেন্ট অনুযায়ী ডামি পেজ সংখ্যা

  return (
    <main className="w-full bg-white text-slate-900 min-h-screen py-20 lg:py-28">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl space-y-12">

        <ExploreHeader />

        {/* কন্ট্রোল প্যানেল */}
        <div className="w-full p-6 bg-slate-50 border-2 border-slate-200 rounded-3xl space-y-5">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <div className="flex-1 w-full">
              <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onClear={() => setSearchQuery("")} />
            </div>
            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>
          <FilterBar selectedCategory={category} onCategoryChange={setCategory} selectedDateRange={dateRange} onDateRangeChange={setDateRange} />
        </div>

        {/* নোটস গ্রিড */}
        <NotesGrid />

        {/* 🚀 রেসপন্সিভ পেজিনেশন কম্পোনেন্ট প্লেসমেন্ট */}
        <div className="pt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>

      </div>
    </main>
  );
}