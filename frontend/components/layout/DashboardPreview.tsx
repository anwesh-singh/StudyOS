export default function DashboardPreview() {
  return (
    <div className="relative mt-16 w-full max-w-6xl">

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">

        {/* Top Bar */}

        <div className="mb-8 flex items-center gap-2">

          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>

        </div>

        {/* Dashboard */}

        <div className="grid gap-6 md:grid-cols-4">

          {/* Sidebar */}

          <div className="rounded-2xl bg-black/40 p-6">

            <h2 className="mb-6 text-xl font-bold text-cyan-400">
              StudyOS
            </h2>

            <div className="space-y-4 text-gray-300">

              <p>🏠 Dashboard</p>
              <p>📝 Notes</p>
              <p>🤖 AI Tutor</p>
              <p>📅 Calendar</p>
              <p>📊 Analytics</p>
              <p>🎯 Quiz</p>

            </div>

          </div>

          {/* Main */}

          <div className="col-span-3 grid gap-5">

            <div className="rounded-2xl bg-cyan-500/20 p-6">

              <h2 className="text-2xl font-bold">
                Welcome Back 👋
              </h2>

              <p className="mt-2 text-gray-300">
                Your learning progress is growing.
              </p>

            </div>

            <div className="grid gap-5 md:grid-cols-3">

              <div className="rounded-2xl bg-white/10 p-6">

                <h3 className="text-lg font-semibold">
                  Notes
                </h3>

                <p className="mt-3 text-4xl font-bold text-cyan-400">
                  152
                </p>

              </div>

              <div className="rounded-2xl bg-white/10 p-6">

                <h3 className="text-lg font-semibold">
                  Quizzes
                </h3>

                <p className="mt-3 text-4xl font-bold text-cyan-400">
                  38
                </p>

              </div>

              <div className="rounded-2xl bg-white/10 p-6">

                <h3 className="text-lg font-semibold">
                  AI Chats
                </h3>

                <p className="mt-3 text-4xl font-bold text-cyan-400">
                  89
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}