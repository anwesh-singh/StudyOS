"use client";

import { BookOpen } from "lucide-react";
import { useNotes } from "@/components/context/NotesContext";

export default function RecentNotes() {
  const { notes } = useNotes();

  const recentNotes = [...notes].slice(0, 5);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="mb-6 flex items-center gap-2">
        <BookOpen className="text-cyan-400" size={24} />

        <h2 className="text-2xl font-bold text-white">
          Recent Notes
        </h2>
      </div>

      {recentNotes.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center text-gray-400">
          No notes available.
        </div>
      ) : (
        <div className="space-y-4">
          {recentNotes.map((note) => (
            <div
              key={note.id}
              className="rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:border-cyan-400"
            >
              <div className="flex items-center justify-between">

                <h3 className="font-semibold text-white">
                  {note.title}
                </h3>

                {note.favorite && (
                  <span className="text-yellow-400">
                    ⭐
                  </span>
                )}

              </div>

              <p className="mt-2 line-clamp-2 text-sm text-gray-400">
                {note.content || "Empty Note"}
              </p>

              <p className="mt-3 text-xs text-cyan-400">
                {note.createdAt}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}