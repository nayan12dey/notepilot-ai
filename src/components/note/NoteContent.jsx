"use client";

import React from "react";

export default function NoteContent({ content }) {
  return (
    <article className="prose prose-slate max-w-none">
      {content.split('\n\n').map((paragraph, index) => (
        <p key={index} className="text-base md:text-lg font-medium text-slate-600 leading-relaxed mb-6 whitespace-pre-line">
          {paragraph.trim()}
        </p>
      ))}
    </article>
  );
}