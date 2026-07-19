"use client";

import {
  BookOpen,
  CalendarDays,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

import { useTask } from "@/components/context/TaskContext";
import { useNotes } from "@/components/context/NotesContext";

export default function AnalyticsCards() {
  const { tasks } = useTask();
  const { notes } = useNotes();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const totalNotes = notes.length;

  const productivity =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) * 100
        );

  const cards = [
    {
      title: "Total Notes",
      value: totalNotes,
      icon: BookOpen,
      color: "text-cyan-400",
    },
    {
      title: "Total Tasks",
      value: totalTasks,
      icon: CalendarDays,
      color: "text-green-400",
    },
    {
      title: "Completed Tasks",
      value: completedTasks,
      icon: CheckCircle,
      color: "text-yellow-400",
    },
    {
      title: "Productivity",
      value: `${productivity}%`,
      icon: TrendingUp,
      color: "text-pink-400",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-white/10 bg-[#111111] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400">
                {card.title}
              </h3>

              <Icon
                size={28}
                className={card.color}
              />
            </div>

            <h2 className="mt-6 text-4xl font-bold">
              {card.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
}