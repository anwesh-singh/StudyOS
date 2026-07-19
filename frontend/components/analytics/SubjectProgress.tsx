"use client";

import { useTask } from "@/components/context/TaskContext";

export default function SubjectProgress() {
  const { tasks } = useTask();

  const subjects = [
    "Python",
    "SQL",
    "Power BI",
    "DSA",
    "Machine Learning",
  ];

  const maxTasks = Math.max(
    ...subjects.map(
      (subject) =>
        tasks.filter((task) => task.subject === subject).length
    ),
    1
  );

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Subject Progress
      </h2>

      <div className="space-y-6">
        {subjects.map((subject) => {
          const total = tasks.filter(
            (task) => task.subject === subject
          ).length;

          const completed = tasks.filter(
            (task) =>
              task.subject === subject &&
              task.completed
          ).length;

          const percentage =
            total === 0
              ? 0
              : Math.round((completed / total) * 100);

          return (
            <div key={subject}>
              <div className="mb-2 flex justify-between">
                <span className="font-medium">
                  {subject}
                </span>

                <span className="text-cyan-400">
                  {completed}/{total}
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-cyan-400 transition-all duration-500"
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>

              <p className="mt-1 text-right text-xs text-gray-400">
                {percentage}%
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}