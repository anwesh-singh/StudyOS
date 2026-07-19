"use client";

import { Star, Trash2 } from "lucide-react";
import { useNotes } from "@/components/context/NotesContext";

export default function NotesList() {
  const {
    notes,
    selectedNote,
    selectNote,
    deleteNote,
    toggleFavorite,
    searchQuery,
  } = useNotes();

  // Live Search
  const filteredNotes = notes.filter((note) => {
    const query = searchQuery.toLowerCase();

    return (
      note.title.toLowerCase().includes(query) ||
      note.content.toLowerCase().includes(query)
    );
  });

  if (notes.length === 0) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Recent Notes
        </h2>

        <div className="rounded-2xl border border-dashed border-white/10 p-10 text-center text-gray-400">
          No notes yet.
          <br />
          Click{" "}
          <span className="text-cyan-400">
            New Note
          </span>{" "}
          to create one.
        </div>
      </div>
    );
  }

  if (filteredNotes.length === 0) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Recent Notes
        </h2>

        <div className="rounded-2xl border border-dashed border-white/10 p-10 text-center text-gray-400">
          No matching notes found.
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Recent Notes
      </h2>

      <div className="space-y-4">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            className={`rounded-2xl border p-5 transition ${
              selectedNote?.id === note.id
                ? "border-cyan-400 bg-cyan-500/10"
                : "border-white/10 bg-black/30"
            }`}
          >
            <button
              onClick={() => selectNote(note.id)}
              className="w-full text-left"
            >
              <h3 className="text-lg font-semibold text-white">
                {note.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-sm text-gray-400">
                {note.content || "Empty Note"}
              </p>

              <p className="mt-3 text-xs text-cyan-400">
                {note.createdAt}
              </p>
            </button>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => toggleFavorite(note.id)}
                className="rounded-lg bg-yellow-500/10 p-2 text-yellow-400 hover:bg-yellow-500/20"
              >
                <Star
                  size={18}
                  fill={note.favorite ? "currentColor" : "none"}
                />
              </button>

              <button
                onClick={() => deleteNote(note.id)}
                className="rounded-lg bg-red-500/10 p-2 text-red-400 hover:bg-red-500/20"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}