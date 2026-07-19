"use client";

import { FileText, Star, Trash2, Tag } from "lucide-react";

export default function NotesSidebar() {
  return (
    <div className="w-64 rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-8 text-2xl font-bold text-white">
        Notes
      </h2>

      <div className="space-y-4">

        <button className="flex w-full items-center gap-3 rounded-xl p-3 transition hover:bg-cyan-500/10 hover:text-cyan-400">
          <FileText size={20} />
          <span>All Notes</span>
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl p-3 transition hover:bg-cyan-500/10 hover:text-cyan-400">
          <Star size={20} />
          <span>Favorites</span>
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl p-3 transition hover:bg-cyan-500/10 hover:text-cyan-400">
          <Tag size={20} />
          <span>Tags</span>
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl p-3 transition hover:bg-red-500/10 hover:text-red-400">
          <Trash2 size={20} />
          <span>Trash</span>
        </button>

      </div>
    </div>
  );
}