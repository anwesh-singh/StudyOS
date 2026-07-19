import Link from "next/link";
import { Globe, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Logo */}
          <div>
            <Link href="/">
              <h2 className="cursor-pointer text-3xl font-bold">
                Study<span className="text-cyan-400">OS</span>
              </h2>
            </Link>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              AI Powered Learning Platform built for students to learn,
              organize and prepare for placements smarter.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Product
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-cyan-400"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/planner"
                  className="hover:text-cyan-400"
                >
                  Planner
                </Link>
              </li>

              <li>
                <Link
                  href="/notes"
                  className="hover:text-cyan-400"
                >
                  Notes
                </Link>
              </li>

              <li>
                <Link
                  href="/analytics"
                  className="hover:text-cyan-400"
                >
                  Analytics
                </Link>
              </li>

            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Resources
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link
                  href="/"
                  className="hover:text-cyan-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-cyan-400"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/planner"
                  className="hover:text-cyan-400"
                >
                  Planner
                </Link>
              </li>

              <li>
                <Link
                  href="/notes"
                  className="hover:text-cyan-400"
                >
                  Notes
                </Link>
              </li>

            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="https://studyos.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Globe size={22} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="mailto:studyos@gmail.com"
                className="rounded-xl border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Mail size={22} />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 StudyOS. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link
              href="/"
              className="hover:text-cyan-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="hover:text-cyan-400"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}