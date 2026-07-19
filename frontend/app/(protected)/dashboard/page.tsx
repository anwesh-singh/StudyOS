import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import DashboardCards from "@/components/dashboard/DashboardCards";
import ProgressChart from "@/components/dashboard/ProgressChart";
import RecentNotes from "@/components/dashboard/RecentNotes";
import Tasks from "@/components/dashboard/Tasks";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <Topbar />

        <div className="space-y-8 p-8">
          {/* Welcome */}
          <div>
            <h1 className="text-4xl font-bold">
              Welcome Back 👋
            </h1>

            <p className="mt-2 text-gray-400">
              Here's your learning dashboard.
            </p>
          </div>

          {/* Dashboard Cards */}
          <DashboardCards />

          {/* Progress + Recent Notes */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ProgressChart />
            <RecentNotes />
          </div>

          {/* Tasks */}
          <Tasks />
        </div>
      </div>
    </main>
  );
}