"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import { TrendingUp } from "lucide-react";
import { useTask } from "@/components/context/TaskContext";
import { useNotes } from "@/components/context/NotesContext";

export default function ProgressChart() {
  const { tasks } = useTask();
  const { notes } = useNotes();

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks =
    totalTasks - completedTasks;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) *
            100
        );

  const data = [
    {
      name: "Completed",
      value: completedTasks,
    },
    {
      name: "Pending",
      value: pendingTasks,
    },
  ];

  const COLORS = [
    "#22c55e",
    "#f59e0b",
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      {/* Heading */}

      <div className="mb-6 flex items-center gap-2">

        <TrendingUp
          className="text-cyan-400"
          size={24}
        />

        <h2 className="text-2xl font-bold">
          Study Progress
        </h2>

      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

        {/* Left */}

        <div className="space-y-4">

          <div className="rounded-2xl bg-black/30 p-4">
            <p className="text-gray-400">
              Total Tasks
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              {totalTasks}
            </h3>
          </div>

          <div className="rounded-2xl bg-black/30 p-4">
            <p className="text-gray-400">
              Total Notes
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              {notes.length}
            </h3>
          </div>

          <div className="rounded-2xl bg-black/30 p-4">
            <p className="text-gray-400">
              Progress
            </p>

            <h3 className="mt-2 text-3xl font-bold text-cyan-400">
              {progress}%
            </h3>
          </div>

        </div>

        {/* Right */}

        <div className="h-80 w-full">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <PieChart>

              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="42%"
                outerRadius={90}
              >
                {data.map(
                  (_, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[index]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />

              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{
                  paddingTop: 20,
                }}
              />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}