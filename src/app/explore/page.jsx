"use client";

import React, { useState } from "react";
// পাথ আপনার ফোল্ডার স্ট্রাকচার অনুযায়ী চেঞ্জ করুন
import ExploreHeader from "@/components/explore/ExploreHeader";
import SearchBar from "@/components/explore/SearchBar";

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="max-w-xl mx-auto p-6">
      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onClear={() => setSearchQuery("")}
        placeholder="Search notes, tags, architectural patterns..."
      />
      <ExploreHeader></ExploreHeader>
    </div>
  );
}