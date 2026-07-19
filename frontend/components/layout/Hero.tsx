import Link from "next/link";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">

        {/* Badge */}
        <div className="mb-8 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
          🚀 AI Powered Learning Platform
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight sm:text-6xl lg:text-8xl">
          Learn Smarter
          <br />
          with{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            StudyOS
          </span>
        </h1>

        {/* Paragraph */}
        <p className="mt-8 max-w-3xl text-lg text-gray-400 sm:text-xl">
          One AI platform for Notes, Planner, Quiz, Analytics,
          Calendar, Resume Builder and Placement Preparation.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <Link
            href="/dashboard"
            className="rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-400"
          >
            Get Started
          </Link>

          <Link
            href="#features"
            className="rounded-xl border border-white/20 px-8 py-4 text-lg transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            Explore Features
          </Link>

        </div>

        {/* Rating */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="tracking-wider text-2xl text-yellow-400">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-sm text-gray-400 sm:text-base">
            Trusted by{" "}
            <span className="font-semibold text-cyan-400">
              10,000+
            </span>{" "}
            students across India
          </p>
        </div>

        {/* Dashboard Preview */}
        <DashboardPreview />

      </div>
    </section>
  );
}