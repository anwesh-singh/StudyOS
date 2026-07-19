import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { TaskProvider } from "@/components/context/TaskContext";
import { NotesProvider } from "@/components/context/NotesContext";
import { SettingsProvider } from "@/components/context/SettingsContext";
import { ThemeProvider } from "@/components/context/ThemeContext";
import { AuthProvider } from "@/components/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StudyOS",
  description: "AI Powered Learning Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white transition-colors duration-300">
        <ThemeProvider>
          <TaskProvider>
            <NotesProvider>
              <SettingsProvider>
                <AuthProvider>
                  {children}
                </AuthProvider>
              </SettingsProvider>
            </NotesProvider>
          </TaskProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}