"use client";

import EmptyState from "@/components/explore/EmptyState";
import ExploreHeader from "@/components/explore/ExploreHeader";
import FilterBar from "@/components/explore/FilterBar";
import NoteCardSkeleton from "@/components/explore/NoteCardSkeleton";
import NotesGrid from "@/components/explore/NotesGrid";
import Pagination from "@/components/explore/Pagination";
import SearchBar from "@/components/explore/SearchBar";
import SortDropdown from "@/components/explore/SortDropdown";
import React, { useState, useEffect } from "react";


// নতুন তৈরি করা ৩টি প্রফেশনাল কম্পোনেন্ট
// import NoteCardSkeleton from "@/components/ui/NoteCardSkeleton";
// import EmptyState from "@/components/ui/EmptyState";
// import Pagination from "@/components/ui/Pagination";

export default function ExplorePage() {
  // --- ১. গ্লোবাল স্টেট ম্যানেজমেন্ট ---
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  // const [dateRange, setDateRange] = useState("all-time");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1;

  const [notes, setNotes] = useState([]);



  useEffect(() => {

    const fetchNotes = async () => {

      try {

        setIsLoading(true);

        const params = new URLSearchParams();
        if (searchQuery) {
          params.append("search", searchQuery);
        }

        if (category !== "All") {
          params.append("category", category);
        }

        // if (dateRange !== "all-time") {
        //   params.append("date", dateRange);
        // }

        if (sortBy) {
          params.append("sort", sortBy);
        }

        const res = await fetch(
          `http://localhost:5000/notes?${params}`
        );

        const data = await res.json();
        setNotes(data);


      } catch (error) {

        console.log(error);

      }
      finally {
        setIsLoading(false);
      }

    };

    fetchNotes();

  }, [
    searchQuery,
    category,
    sortBy
  ]);




  // --- ৬. অল ক্লিয়ার হ্যান্ডলার (রিসেট) ---
  const handleResetFilters = () => {
    setCategory("All");
    setDateRange("all-time");
    setSortBy("newest");
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <main className="w-full bg-white text-slate-900 min-h-screen py-20 lg:py-10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl space-y-12">

        {/* কন্টেন্ট লেয়ার ১: হেডার সেকশন */}
        <ExploreHeader />

        {/* কন্টেন্ট লেয়ার ২: কন্ট্রোল প্যানেল (সার্চ, ফিল্টার এবং সর্ট) */}
        <div className="w-full p-6 bg-slate-50 border-2 border-slate-200 rounded-3xl space-y-5">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <div className="flex-1 w-full">
              <SearchBar
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // সার্চ করলে পেজ আবার ১ এ ফেরত যাবে
                }}
                onClear={() => setSearchQuery("")}
                placeholder="Search notes, tags, architectural patterns..."
              />
            </div>
            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>

          <FilterBar
            selectedCategory={category}
            onCategoryChange={(cat) => {
              setCategory(cat);
              setCurrentPage(1);
            }}
            // selectedDateRange={dateRange}
            // onDateRangeChange={setDateRange}
            onReset={handleResetFilters}
          />
        </div>

        {/* কন্টেন্ট লেয়ার ৩: ডায়নামিক রেসপন্স এরিয়া (নোটস গ্রিড / স্কেলেটন / এম্পটি স্টেট) */}
        <div className="space-y-8">

          {/* রেজাল্ট কাউন্টার */}
          {!isLoading && notes.length > 0 && (
            <div className="px-2">
              <h2 className="text-lg font-extrabold text-slate-900">
                All Notes ({notes.length})
              </h2>
            </div>
          )}

          {/* কন্ডিশনাল রেন্ডারিং ব্লক */}
          {isLoading ? (
            // ১. ডাটা ফেচিং এর সময় ৪টি কাস্টম কঙ্কাল কার্ড পাশাপাশি রেন্ডার হবে
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-fr items-stretch w-full">
              {Array.from({ length: 4 }).map((_, index) => (
                <NoteCardSkeleton key={index} />
              ))}
            </div>
          ) : notes.length > 0 ? (
            // ২. ডাটা সফলভাবে পাওয়া গেলে মেইন অপ্টিমাইজড গ্রিড দেখাবে
            <NotesGrid notes={notes} />
          ) : (
            // ৩. সার্চ বা ফিল্টারে ডাটা না মিললে প্রিমিয়াম এম্পটি স্টেট দেখাবে
            <EmptyState
              title="No notes found"
              description="We couldn't find any smart contract architectures or documentation matching your active tags. Try resetting filters."
              actionLabel="Reset Active Filters"
              onAction={handleResetFilters}
            />
          )}

          {/* কন্টেন্ট লেয়ার ৪: প্রিমিয়াম পেজ নম্বর নেভিগেশন */}
          {!isLoading && notes.length > 0 && (
            <div className="pt-6">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}

        </div>

      </div>
    </main>
  );
}
