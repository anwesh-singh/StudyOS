"use client";

import { useEffect, useState } from "react";
import { useNotes } from "@/components/context/NotesContext";

export default function NoteEditor() {
  const { selectedNote, updateNote } = useNotes();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Load selected note
  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [selectedNote]);

  // Auto Save (500ms)
  useEffect(() => {
    if (!selectedNote) return;

    const timer = setTimeout(() => {
      updateNote(selectedNote.id, {
        title,
        content,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [title, content, selectedNote, updateNote]);

  if (!selectedNote) {
    return (
      <div className="flex h-[650px] items-center justify-center rounded-3xl border border-white/10 bg-white/5">
        <p className="text-xl text-gray-400">
          No Note Selected
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title..."
        className="mb-6 w-full rounded-xl border border-white/10 bg-black/30 p-4 text-2xl font-bold text-white outline-none focus:border-cyan-400"
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start writing your notes..."
        className="h-[500px] w-full resize-none rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none focus:border-cyan-400"
      />

      <div className="mt-4 text-right text-sm text-cyan-400">
        Auto Saved ✓
      </div>

    </div>
  );
}