import { useRecurrenceStore } from "../../store/recurrenceStore";

export default function CustomPattern() {
  const frequency = useRecurrenceStore((s) => s.frequency);
  const daysOfWeek = useRecurrenceStore((s) => s.daysOfWeek);
  const setDaysOfWeek = useRecurrenceStore((s) => s.setDaysOfWeek);
  const monthlyPattern = useRecurrenceStore((s) => s.monthlyPattern);
  const setMonthlyPattern = useRecurrenceStore((s) => s.setMonthlyPattern);
  const interval = useRecurrenceStore((s) => s.interval);
  const setInterval = useRecurrenceStore((s) => s.setInterval);

  const weekOptions = [1, 2, 3, 4, -1];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="space-y-4">
      <div>
        <label className="font-semibold text-gray-700">Interval</label>
        <input
          type="number"
          min={1}
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
          className="w-full border px-3 py-2 rounded mt-1"
        />
      </div>

      {frequency === "weekly" && (
        <div>
          <label className="font-semibold text-gray-700">Days of Week</label>
          <div className="flex flex-wrap gap-2 mt-1">
            {weekdays.map((day) => (
              <button
                key={day}
                onClick={() =>
                  setDaysOfWeek(
                    daysOfWeek.includes(day)
                      ? daysOfWeek.filter((d) => d !== day)
                      : [...daysOfWeek, day]
                  )
                }
                className={`px-3 py-1 rounded-full border text-sm
                  ${
                    daysOfWeek.includes(day)
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white border-gray-300 text-gray-700"
                  }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}

      {frequency === "monthly" && (
        <div className="space-y-2">
          <label className="font-semibold text-gray-700">Monthly Pattern</label>
          <div className="flex gap-4">
            <select
              className="border px-2 py-1 rounded"
              value={monthlyPattern?.week ?? 1}
              onChange={(e) =>
                setMonthlyPattern({
                  ...monthlyPattern,
                  week: Number(e.target.value),
                })
              }
            >
              {weekOptions.map((w) => (
                <option key={w} value={w}>
                  {w === -1
                    ? "Last"
                    : `${w}${
                        w === 1 ? "st" : w === 2 ? "nd" : w === 3 ? "rd" : "th"
                      }`}{" "}
                  week
                </option>
              ))}
            </select>
            <select
              className="border px-2 py-1 rounded"
              value={monthlyPattern?.day ?? "Monday"}
              onChange={(e) =>
                setMonthlyPattern({
                  ...monthlyPattern,
                  day: e.target.value,
                })
              }
            >
              {weekdays.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
