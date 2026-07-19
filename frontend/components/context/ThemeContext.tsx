"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type Theme = "dark" | "light" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<
  ThemeContextType | undefined
>(undefined);

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setThemeState] =
    useState<Theme>("dark");

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem(
      "studyos_theme"
    ) as Theme | null;

    if (saved) {
      setThemeState(saved);
    }
  }, []);

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("dark", "light");

    if (theme === "system") {
      const systemDark =
        window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;

      root.classList.add(
        systemDark ? "dark" : "light"
      );
    } else {
      root.classList.add(theme);
    }

    localStorage.setItem(
      "studyos_theme",
      theme
    );
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}