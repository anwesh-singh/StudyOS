"use client";

import { Download, Upload, Trash2 } from "lucide-react";

export default function DataSettings() {
  // Export All Data
  const handleExport = () => {
    const backup = {
      tasks: JSON.parse(
        localStorage.getItem("studyos_tasks") || "[]"
      ),

      notes: JSON.parse(
        localStorage.getItem("studyos_notes") || "[]"
      ),

      profile: JSON.parse(
        localStorage.getItem("studyos_profile") || "{}"
      ),

      notifications: JSON.parse(
        localStorage.getItem("studyos_notifications") || "{}"
      ),
    };

    const blob = new Blob(
      [JSON.stringify(backup, null, 2)],
      {
        type: "application/json",
      }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "studyos-backup.json";

    a.click();

    URL.revokeObjectURL(url);
  };

  // Import Data
  const handleImport = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = JSON.parse(
          e.target?.result as string
        );

        if (data.tasks) {
          localStorage.setItem(
            "studyos_tasks",
            JSON.stringify(data.tasks)
          );
        }

        if (data.notes) {
          localStorage.setItem(
            "studyos_notes",
            JSON.stringify(data.notes)
          );
        }

        if (data.profile) {
          localStorage.setItem(
            "studyos_profile",
            JSON.stringify(data.profile)
          );
        }

        if (data.notifications) {
          localStorage.setItem(
            "studyos_notifications",
            JSON.stringify(
              data.notifications
            )
          );
        }

        alert(
          "Backup restored successfully.\nPlease refresh the page."
        );
      } catch {
        alert("Invalid backup file.");
      }
    };

    reader.readAsText(file);
  };

  // Reset
  const handleReset = () => {
    const ok = confirm(
      "Delete ALL StudyOS data?\nThis action cannot be undone."
    );

    if (!ok) return;

    localStorage.removeItem("studyos_tasks");
    localStorage.removeItem("studyos_notes");
    localStorage.removeItem("studyos_profile");
    localStorage.removeItem(
      "studyos_notifications"
    );

    alert("All data deleted.");

    window.location.reload();
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <h2 className="mb-8 text-3xl font-bold">
        Data Management
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        {/* Export */}
        <button
          onClick={handleExport}
          className="flex flex-col items-center rounded-2xl border border-white/10 bg-black/30 p-8 transition hover:border-cyan-400"
        >
          <Download
            size={36}
            className="mb-4 text-cyan-400"
          />

          <h3 className="text-xl font-semibold">
            Export Data
          </h3>

          <p className="mt-2 text-center text-sm text-gray-400">
            Download all StudyOS data.
          </p>
        </button>

        {/* Import */}

        <label className="flex cursor-pointer flex-col items-center rounded-2xl border border-white/10 bg-black/30 p-8 transition hover:border-cyan-400">

          <Upload
            size={36}
            className="mb-4 text-green-400"
          />

          <h3 className="text-xl font-semibold">
            Import Data
          </h3>

          <p className="mt-2 text-center text-sm text-gray-400">
            Restore a StudyOS backup.
          </p>

          <input
            type="file"
            accept=".json"
            onChange={handleImport}
            hidden
          />

        </label>

        {/* Reset */}

        <button
          onClick={handleReset}
          className="flex flex-col items-center rounded-2xl border border-red-500/20 bg-red-500/5 p-8 transition hover:border-red-500"
        >

          <Trash2
            size={36}
            className="mb-4 text-red-400"
          />

          <h3 className="text-xl font-semibold text-red-400">
            Reset Data
          </h3>

          <p className="mt-2 text-center text-sm text-gray-400">
            Delete every saved StudyOS data.
          </p>

        </button>

      </div>

    </div>
  );
}