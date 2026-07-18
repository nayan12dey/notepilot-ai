"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <Link
      href="/explore"
      className="inline-flex items-center gap-2 group text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors select-none"
    >
      <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
      <span>Back to Explore</span>
    </Link>
  );
}