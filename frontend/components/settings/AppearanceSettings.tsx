"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { Theme, useTheme } from "@/components/context/ThemeContext";

const themes: {
  id: Theme;
  title: string;
  description: string;
  icon: React.ElementType;
}[] = [
  {
    id: "dark",
    title: "Dark",
    description: "Dark appearance for StudyOS",
    icon: Moon,
  },
  {
    id: "light",
    title: "Light",
    description: "Light appearance for StudyOS",
    icon: Sun,
  },
  {
    id: "system",
    title: "System",
    description: "Use your device theme",
    icon: Monitor,
  },
];

export default function AppearanceSettings() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Appearance
      </h2>

      <div className="space-y-4">

        {themes.map((item) => {
          const Icon = item.icon;

          const active = theme === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setTheme(item.id)}
              className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left transition ${
                active
                  ? "border-cyan-400 bg-cyan-500/10"
                  : "border-white/10 bg-black/20 hover:border-cyan-400"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-cyan-500/10 p-3">
                  <Icon
                    size={22}
                    className="text-cyan-400"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>

              {active && (
                <span className="rounded-lg bg-cyan-500 px-3 py-1 text-sm font-semibold text-black">
                  Active
                </span>
              )}
            </button>
          );
        })}

      </div>
    </div>
  );
}