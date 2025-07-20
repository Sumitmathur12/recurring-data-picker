import RecurrenceOptions from "./RecurrenceOptions";
import DateRangePicker from "./DateRangePicker";
import CustomPattern from "./CustomPattern";
import CalendarPreview from "./CalendarPreview";

export default function RecurringPicker() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-indigo-100 to-blue-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-10 space-y-10 border border-indigo-200">
        <h2 className="text-4xl font-extrabold text-center text-indigo-800 tracking-tight">
          🎯 Vibrant Recurring Date Picker
        </h2>

        {/* Frequency */}
        <section className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl border shadow-sm">
          <h3 className="text-2xl font-semibold text-purple-700 mb-3">
            1️⃣ Frequency & Days
          </h3>
          <RecurrenceOptions />
        </section>

        {/* Custom Pattern */}
        <section className="bg-gradient-to-r from-yellow-100 to-red-100 p-6 rounded-2xl border shadow-sm">
          <h3 className="text-2xl font-semibold text-red-600 mb-3">
            2️⃣ Custom Monthly Pattern
          </h3>
          <CustomPattern />
        </section>

        {/* Date Range */}
        <section className="bg-gradient-to-r from-teal-100 to-green-100 p-6 rounded-2xl border shadow-sm">
          <h3 className="text-2xl font-semibold text-teal-700 mb-3">
            3️⃣ Date Range
          </h3>
          <DateRangePicker />
        </section>

        {/* Preview */}
        <section className="bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-2xl border shadow-sm">
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">
            📅 Preview Calendar
          </h3>
          <CalendarPreview />
        </section>

        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:from-pink-600 hover:to-indigo-600 hover:scale-105 transition-all duration-300">
            ✅ Confirm Recurrence
          </button>
        </div>
      </div>
    </div>
  );
}
