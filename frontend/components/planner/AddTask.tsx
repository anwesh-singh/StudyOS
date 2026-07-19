"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useTask } from "@/components/context/TaskContext";

export default function AddTask() {
  const { addTask } = useTask();

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("Python");
  const [priority, setPriority] = useState("Medium");
  const [date, setDate] = useState("");

  const handleAddTask = () => {
    if (!title.trim()) {
      alert("Please enter a task title.");
      return;
    }

    addTask({
      title,
      subject,
      priority,
      date,
    });

    alert("Task Added Successfully ✅");

    setTitle("");
    setSubject("Python");
    setPriority("Medium");
    setDate("");
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-[#111] p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Add Task
      </h2>

      <div className="mb-5">
        <label className="mb-2 block text-sm text-gray-400">
          Task Title
        </label>

        <input
          type="text"
          placeholder="Enter task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-cyan-400"
        />
      </div>

      <div className="mb-5">
        <label className="mb-2 block text-sm text-gray-400">
          Subject
        </label>

        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-cyan-400"
        >
          <option>Python</option>
          <option>SQL</option>
          <option>Power BI</option>
          <option>DSA</option>
          <option>Machine Learning</option>
        </select>
      </div>

      <div className="mb-5">
        <label className="mb-2 block text-sm text-gray-400">
          Priority
        </label>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-cyan-400"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm text-gray-400">
          Due Date
        </label>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-cyan-400"
        />
      </div>

      <button
        onClick={handleAddTask}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-black hover:bg-cyan-400"
      >
        <Plus size={20} />
        Add Task
      </button>
    </div>
  );
}