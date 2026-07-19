import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

import AnalyticsCards from "@/components/analytics/AnalyticsCards";
import StudyChart from "@/components/analytics/StudyChart";
import SubjectProgress from "@/components/analytics/SubjectProgress";
import StudyStreak from "@/components/analytics/StudyStreak";

export default function AnalyticsPage() {
  return (
    <main className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <Topbar />

        <div className="space-y-8 p-8">

          {/* Heading */}
          <div>
            <h1 className="text-4xl font-bold">
              Analytics 📊
            </h1>

            <p className="mt-2 text-gray-400">
              Track your study performance and productivity.
            </p>
          </div>

          {/* Cards */}
          <AnalyticsCards />

          {/* Chart + Subject Progress */}
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
            <StudyChart />
            <SubjectProgress />
          </div>

          {/* Study Streak */}
          <StudyStreak />

        </div>
      </div>
    </main>
  );
}