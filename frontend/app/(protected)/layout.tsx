"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/context/AuthContext";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const {
    isLoggedIn,
    loading,
  } = useAuth();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.replace("/login");
    }
  }, [loading, isLoggedIn, router]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="mx-auto mb-6 h-14 w-14 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>

          <h2 className="text-2xl font-bold">
            Loading StudyOS...
          </h2>

          <p className="mt-2 text-gray-400">
            Checking your session...
          </p>
        </div>
      </main>
    );
  }

  if (!isLoggedIn) {
    return null;
  }

  return <>{children}</>;
}