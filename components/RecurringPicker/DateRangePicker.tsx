import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRecurrenceStore } from "../../store/recurrenceStore";

export default function DateRangePicker() {
  const startDate = useRecurrenceStore((s) => s.startDate);
  const endDate = useRecurrenceStore((s) => s.endDate);
  const setStartDate = useRecurrenceStore((s) => s.setStartDate);
  const setEndDate = useRecurrenceStore((s) => s.setEndDate);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="font-semibold text-gray-700 block mb-1">
          Start Date
        </label>
        <DatePicker
          selected={startDate ? new Date(startDate) : null}
          onChange={(date) => date && setStartDate(date.toISOString())}
          className="px-3 py-2 rounded border border-gray-300 w-full"
        />
      </div>
      <div>
        <label className="font-semibold text-gray-700 block mb-1">
          End Date (optional)
        </label>
        <DatePicker
          selected={endDate ? new Date(endDate) : null}
          onChange={(date) => date && setEndDate(date.toISOString())}
          className="px-3 py-2 rounded border border-gray-300 w-full"
          isClearable
        />
      </div>
    </div>
  );
}
