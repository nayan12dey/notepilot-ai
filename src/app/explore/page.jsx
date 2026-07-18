"use client";

import React, { useState } from "react";
import ExploreHeader from "@/components/explore/ExploreHeader";
import SearchBar from "@/components/explore/SearchBar";
import FilterBar from "@/components/explore/FilterBar";

export default function ExplorePage() {

  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [dateRange, setDateRange] = useState("all-time");


  const handleResetFilters = () => {
    setCategory("All");
    setDateRange("all-time");
  };

  return (
    <main className="w-full bg-white text-slate-900 min-h-screen py-20 lg:py-28">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-5xl space-y-10">

        <ExploreHeader />

        <div className="w-full p-6 bg-slate-50 border-2 border-slate-200 rounded-3xl space-y-5">

          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClear={() => setSearchQuery("")}
            placeholder="Search notes, tags, architectural patterns..."
          />

          <FilterBar
            selectedCategory={category}
            onCategoryChange={setCategory}
            selectedDateRange={dateRange}
            onDateRangeChange={setDateRange}
            onReset={handleResetFilters}
          />
        </div>



      </div>
    </main>
  );
}