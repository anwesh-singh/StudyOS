"use client";

import { Check, Trash2 } from "lucide-react";
import { useTask } from "@/components/context/TaskContext";

export default function TaskList() {
  const { tasks, deleteTask, toggleTask } = useTask();

  if (tasks.length === 0) {
    return (
      <div className="rounded-3xl border border-white/10 bg-[#111] p-6">
        <h2 className="mb-4 text-2xl font-bold">Today's Tasks</h2>

        <div className="rounded-xl border border-dashed border-white/10 p-8 text-center text-gray-400">
          No tasks yet.
          <br />
          Add your first task from the form above.
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#111] p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Today's Tasks
      </h2>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="rounded-2xl border border-white/10 p-4"
          >
            <div className="flex items-start justify-between">

              <div>
                <h3
                  className={`text-lg font-semibold ${
                    task.completed
                      ? "line-through text-gray-500"
                      : "text-white"
                  }`}
                >
                  {task.title}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Subject: {task.subject}
                </p>

                <p className="text-sm text-gray-400">
                  Priority: {task.priority}
                </p>

                <p className="text-sm text-gray-400">
                  Due: {task.date || "Not Selected"}
                </p>
              </div>

              <div className="flex gap-2">

                <button
                  onClick={() => toggleTask(task.id)}
                  className="rounded-lg bg-green-500/20 p-2 text-green-400 hover:bg-green-500/30"
                >
                  <Check size={18} />
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="rounded-lg bg-red-500/20 p-2 text-red-400 hover:bg-red-500/30"
                >
                  <Trash2 size={18} />
                </button>

              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}