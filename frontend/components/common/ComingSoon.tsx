"use client";

import Link from "next/link";
import { ArrowLeft, Rocket } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({
  title,
  description,
}: ComingSoonProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10">
          <Rocket
            size={40}
            className="text-cyan-400"
          />
        </div>

        <h1 className="text-4xl font-bold">
          {title}
        </h1>

        <p className="mt-5 text-lg text-gray-400">
          {description}
        </p>

        <p className="mt-3 text-sm text-gray-500">
          This module is currently under development and
          will be available in an upcoming StudyOS update.
        </p>

        <Link
          href="/dashboard"
          className="mt-10 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

      </div>
    </main>
  );
}