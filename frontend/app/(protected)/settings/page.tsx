import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

import ProfileCard from "@/components/settings/ProfileCard";
import AppearanceSettings from "@/components/settings/AppearanceSettings";
import NotificationSettings from "@/components/settings/NotificationSettings";
import DataSettings from "@/components/settings/DataSettings";

export default function SettingsPage() {
  return (
    <main className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex flex-1 flex-col">
        <Topbar />

        <div className="space-y-8 p-8">

          {/* Heading */}
          <div>
            <h1 className="text-4xl font-bold">
              Settings ⚙️
            </h1>

            <p className="mt-2 text-gray-400">
              Manage your profile and StudyOS preferences.
            </p>
          </div>

          {/* Profile */}
          <ProfileCard />

          {/* Appearance + Notifications */}
          <div className="grid gap-8 xl:grid-cols-2">
            <AppearanceSettings />
            <NotificationSettings />
          </div>

          {/* Data */}
          <DataSettings />

        </div>
      </div>
    </main>
  );
}
