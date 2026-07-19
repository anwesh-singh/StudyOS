"use client";

import { Search, Plus, Sparkles } from "lucide-react";
import { useNotes } from "@/components/context/NotesContext";

export default function NotesHeader() {
  const {
    addNote,
    searchQuery,
    setSearchQuery,
  } = useNotes();

  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:justify-between">

      {/* Search */}
      <div className="relative w-full max-w-md">

        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) =>
            setSearchQuery(e.target.value)
          }
          className="w-full rounded-2xl border border-white/10 bg-black/30 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-400"
        />

      </div>

      {/* Buttons */}
      <div className="flex gap-4">

        <button
          onClick={addNote}
          className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
        >
          <Plus size={20} />
          New Note
        </button>

        <button
          className="flex items-center gap-2 rounded-xl border border-cyan-500 px-5 py-3 text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
        >
          <Sparkles size={20} />
          AI Generate
        </button>

      </div>

    </div>
  );
}