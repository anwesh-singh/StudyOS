"use client";

import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-3xl font-bold"
        >
          <Sparkles
            size={26}
            className="text-cyan-400 transition-transform duration-300 group-hover:rotate-12"
          />

          <span className="text-white">
            Study
          </span>

          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            OS
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">

          <Link
            href="/dashboard"
            className="text-gray-300 transition hover:text-cyan-400"
          >
            Dashboard
          </Link>

          <Link
            href="/planner"
            className="text-gray-300 transition hover:text-cyan-400"
          >
            Planner
          </Link>

          <Link
            href="/notes"
            className="text-gray-300 transition hover:text-cyan-400"
          >
            Notes
          </Link>

          <Link
            href="/analytics"
            className="text-gray-300 transition hover:text-cyan-400"
          >
            Analytics
          </Link>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <Link
            href="/dashboard"
            className="hidden rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-300 md:block"
          >
            Get Started
          </Link>

          <button className="rounded-lg p-2 transition hover:bg-white/10 md:hidden">
            <Menu size={28} />
          </button>

        </div>

      </div>
    </header>
  );
}