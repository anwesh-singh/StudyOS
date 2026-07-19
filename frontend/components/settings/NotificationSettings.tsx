"use client";

import { useEffect, useState } from "react";
import { Bell, Save } from "lucide-react";

export default function NotificationSettings() {
  const [emailNotification, setEmailNotification] = useState(true);
  const [studyReminder, setStudyReminder] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(false);

  // Load Settings
  useEffect(() => {
    const saved = localStorage.getItem(
      "studyos_notifications"
    );

    if (saved) {
      const data = JSON.parse(saved);

      setEmailNotification(data.emailNotification);
      setStudyReminder(data.studyReminder);
      setWeeklyReport(data.weeklyReport);
    }
  }, []);

  // Save Settings
  const handleSave = () => {
    localStorage.setItem(
      "studyos_notifications",
      JSON.stringify({
        emailNotification,
        studyReminder,
        weeklyReport,
      })
    );

    alert("Notification preferences saved!");
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <div className="mb-6 flex items-center gap-3">
        <Bell className="text-cyan-400" />
        <h2 className="text-2xl font-bold text-white">
          Notifications
        </h2>
      </div>

      <div className="space-y-6">

        {/* Email */}
        <label className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-4">
          <div>
            <h3 className="font-semibold text-white">
              Email Notifications
            </h3>

            <p className="text-sm text-gray-400">
              Receive important updates by email.
            </p>
          </div>

          <input
            type="checkbox"
            checked={emailNotification}
            onChange={(e) =>
              setEmailNotification(e.target.checked)
            }
            className="h-5 w-5 accent-cyan-500"
          />
        </label>

        {/* Reminder */}
        <label className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-4">
          <div>
            <h3 className="font-semibold text-white">
              Study Reminder
            </h3>

            <p className="text-sm text-gray-400">
              Daily reminder for your study schedule.
            </p>
          </div>

          <input
            type="checkbox"
            checked={studyReminder}
            onChange={(e) =>
              setStudyReminder(e.target.checked)
            }
            className="h-5 w-5 accent-cyan-500"
          />
        </label>

        {/* Weekly */}
        <label className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-4">
          <div>
            <h3 className="font-semibold text-white">
              Weekly Progress Report
            </h3>

            <p className="text-sm text-gray-400">
              Receive a weekly summary of your learning.
            </p>
          </div>

          <input
            type="checkbox"
            checked={weeklyReport}
            onChange={(e) =>
              setWeeklyReport(e.target.checked)
            }
            className="h-5 w-5 accent-cyan-500"
          />
        </label>

      </div>

      <button
        onClick={handleSave}
        className="mt-8 flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
      >
        <Save size={18} />
        Save Preferences
      </button>

    </div>
  );
}