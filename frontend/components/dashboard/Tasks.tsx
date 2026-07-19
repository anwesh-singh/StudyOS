"use client";

import { CalendarCheck2 } from "lucide-react";
import { useTask } from "@/components/context/TaskContext";

export default function Tasks() {
  const { tasks } = useTask();

  // Sirf Pending Tasks
  const pendingTasks = tasks
    .filter((task) => !task.completed)
    .slice(0, 5);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <div className="mb-6 flex items-center gap-2">
        <CalendarCheck2
          className="text-cyan-400"
          size={24}
        />

        <h2 className="text-2xl font-bold text-white">
          Today's Tasks
        </h2>
      </div>

      {pendingTasks.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center text-gray-400">
          🎉 No pending tasks.
        </div>
      ) : (
        <div className="space-y-4">

          {pendingTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:border-cyan-400"
            >
              <div>

                <h3 className="font-semibold text-white">
                  {task.title}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  {task.subject}
                </p>

              </div>

              <div className="text-right">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    task.priority === "High"
                      ? "bg-red-500/20 text-red-400"
                      : task.priority === "Medium"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {task.priority}
                </span>

                <p className="mt-2 text-xs text-cyan-400">
                  {task.date || "No Date"}
                </p>

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}