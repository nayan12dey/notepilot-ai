"use client";

import React from "react";
import { Tag } from "lucide-react";

export default function NoteTags({ tags }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="pt-8 border-t border-slate-100 space-y-4">
      <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
        <Tag className="w-3.5 h-3.5" />
        <span>INDEXED TAGS</span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span 
            key={idx} 
            className="text-xs font-bold bg-slate-50 text-slate-600 border border-slate-200 px-3 py-1.5 rounded-xl hover:border-slate-300 transition-colors cursor-default"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}