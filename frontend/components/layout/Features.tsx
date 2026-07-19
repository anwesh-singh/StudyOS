"use client";

import Link from "next/link";
import {
  BookOpen,
  Calendar,
  BrainCircuit,
  BarChart3,
  FileText,
  Briefcase,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: BookOpen,
    title: "Smart Notes",
    description: "Generate, organize and revise notes with AI.",
    href: "/notes",
  },
  {
    icon: Calendar,
    title: "Planner",
    description: "Plan your study schedule and never miss tasks.",
    href: "/planner",
  },
  {
    icon: BrainCircuit,
    title: "AI Tutor",
    description: "Ask anything and learn instantly with AI.",
    href: "/ai",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Track your daily learning progress.",
    href: "/analytics",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create ATS-friendly resumes in minutes.",
    href: "/resume",
  },
  {
    icon: Briefcase,
    title: "Placement Prep",
    description: "Practice interviews and aptitude questions.",
    href: "/placement",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-black py-20 text-white md:py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            ✨ Features
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Powerful Features
          </h2>

          <p className="mt-5 text-gray-400">
            Everything you need to study smarter with AI, productivity tools,
            analytics and career preparation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Link
                key={feature.title}
                href={feature.href}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group h-full cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]"
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4 transition-all duration-300 group-hover:bg-cyan-500/20">
                    <Icon
                      size={32}
                      className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}