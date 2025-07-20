import { useRecurrenceStore } from "../../store/recurrenceStore";

const options = ["daily", "weekly", "monthly", "yearly"] as const;

export default function RecurrenceOptions() {
  const frequency = useRecurrenceStore((s) => s.frequency);
  const setFrequency = useRecurrenceStore((s) => s.setFrequency);

  return (
    <div className="space-y-2">
      <label className="block font-semibold text-gray-700">Repeat</label>
      <div className="flex gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setFrequency(opt)}
            className={`px-4 py-1 rounded-full border text-sm capitalize transition
              ${
                frequency === opt
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
              }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
