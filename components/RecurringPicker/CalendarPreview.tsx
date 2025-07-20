import { useRecurrenceStore } from "../../store/recurrenceStore";
import { generateRecurringDates } from "../../utils/generateRecurringDates";
import { format } from "date-fns";

export default function CalendarPreview() {
  const {
    frequency,
    interval,
    startDate,
    endDate,
    daysOfWeek,
    monthlyPattern,
  } = useRecurrenceStore((s) => s);

  const dates = generateRecurringDates({
    frequency,
    interval,
    startDate,
    endDate,
    daysOfWeek,
    monthlyPattern: monthlyPattern ?? undefined,
    maxCount: 10,
  });

  return (
    <div className="mt-4">
      <h3 className="text-md font-semibold text-gray-800 mb-2">
        Preview (Next {dates.length}):
      </h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {dates.map((date, idx) => (
          <li key={idx}>{format(date, "eeee, MMM d, yyyy")}</li>
        ))}
      </ul>
    </div>
  );
}
