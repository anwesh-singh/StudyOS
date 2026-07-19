"use client";

import {
  Flame,
  Trophy,
  Target,
  CalendarDays,
} from "lucide-react";

import { useTask } from "@/components/context/TaskContext";
import { useNotes } from "@/components/context/NotesContext";

export default function StudyStreak() {
  const { tasks } = useTask();
  const { notes } = useNotes();

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const total = tasks.length;

  const productivity =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  const streak =
    completed === 0
      ? 0
      : Math.min(completed, 30);

  const badge =
    productivity >= 90
      ? "🏆 Master"
      : productivity >= 70
      ? "🥇 Excellent"
      : productivity >= 50
      ? "🥈 Good"
      : productivity >= 30
      ? "🥉 Beginner"
      : "📚 Keep Learning";

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <div className="rounded-3xl border border-orange-500/20 bg-orange-500/10 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-300">
            Study Streak
          </h3>

          <Flame
            className="text-orange-400"
            size={28}
          />
        </div>

        <h2 className="mt-5 text-4xl font-bold">
          {streak} 🔥
        </h2>
      </div>

      <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-300">
            Completed
          </h3>

          <Target
            className="text-green-400"
            size={28}
          />
        </div>

        <h2 className="mt-5 text-4xl font-bold">
          {completed}
        </h2>
      </div>

      <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-300">
            Notes
          </h3>

          <CalendarDays
            className="text-cyan-400"
            size={28}
          />
        </div>

        <h2 className="mt-5 text-4xl font-bold">
          {notes.length}
        </h2>
      </div>

      <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-300">
            Badge
          </h3>

          <Trophy
            className="text-yellow-400"
            size={28}
          />
        </div>

        <h2 className="mt-5 text-lg font-bold">
          {badge}
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Productivity {productivity}%
        </p>
      </div>

    </div>
  );
}