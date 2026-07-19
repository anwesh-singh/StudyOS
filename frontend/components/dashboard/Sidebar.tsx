"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/components/context/AuthContext";

import {
  LayoutDashboard,
  NotebookPen,
  CalendarDays,
  BrainCircuit,
  BarChart3,
  FileText,
  Briefcase,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Notes",
    icon: NotebookPen,
    href: "/notes",
  },
  {
    title: "Planner",
    icon: CalendarDays,
    href: "/planner",
  },
  {
    title: "AI Tutor",
    icon: BrainCircuit,
    href: "/ai",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    title: "Resume Builder",
    icon: FileText,
    href: "/resume",
  },
  {
    title: "Placement Prep",
    icon: Briefcase,
    href: "/placement",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const { logout } = useAuth();

  async function handleLogout() {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    try {
      await logout();

      router.replace("/login");
    } catch (error) {
      console.error(error);

      alert("Logout failed.");
    }
  }

  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col overflow-hidden border-r border-white/10 bg-[#0B0B0B]">
      {/* Logo */}
      <Link
        href="/"
        className="border-b border-white/10 p-6"
      >
        <h1 className="text-3xl font-bold text-white">
          Study
          <span className="text-cyan-400">
            OS
          </span>
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          AI Powered Learning
        </p>
      </Link>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto p-5">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 ${
                  active
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                }`}
              >
                <Icon size={22} />

                <span className="font-medium">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Bottom */}
      <div className="mt-auto border-t border-white/10 bg-[#0B0B0B] p-5">
        <Link
          href="/settings"
          className={`mb-3 flex items-center gap-4 rounded-xl px-4 py-3 transition ${
            pathname === "/settings"
              ? "bg-cyan-500/20 text-cyan-400"
              : "text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400"
          }`}
        >
          <Settings size={22} />

          <span>Settings</span>
        </Link>

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-red-400 transition hover:bg-red-500/10"
        >
          <LogOut size={22} />

          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}