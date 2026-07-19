export default function Calendar() {
  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="rounded-3xl border border-white/10 bg-[#111] p-6">

      <h2 className="mb-6 text-2xl font-bold">
        July 2026
      </h2>

      {/* Week Days */}
      <div className="grid grid-cols-7 gap-3 mb-4">
        {days.map((day) => (
          <div
            key={day}
            className="text-center text-gray-400 font-semibold"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-3">
        {dates.map((date) => (
          <button
            key={date}
            className="aspect-square rounded-xl border border-white/10 bg-black hover:bg-cyan-500 hover:text-black transition"
          >
            {date}
          </button>
        ))}
      </div>

    </div>
  );
}