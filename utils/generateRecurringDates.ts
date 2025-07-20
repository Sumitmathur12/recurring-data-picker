import {
  addDays,
  addWeeks,
  addMonths,
  addYears,
  isAfter,
  isBefore,
  setDate,
  startOfMonth,
} from "date-fns";

export type Frequency = "daily" | "weekly" | "monthly" | "yearly";

export interface RecurrenceOptions {
  frequency: Frequency;
  interval: number;
  startDate: string;
  endDate?: string;
  daysOfWeek: string[]; // For weekly
  monthlyPattern?: { week: number; day: string }; // For monthly
  maxCount?: number;
}

const weekDayToIndex = (day: string) => {
  return [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ].indexOf(day);
};

export function generateRecurringDates({
  frequency,
  interval,
  startDate,
  endDate,
  daysOfWeek,
  monthlyPattern,
  maxCount = 10,
}: RecurrenceOptions): Date[] {
  const dates: Date[] = [];
  const start = new Date(startDate);
  const limit = endDate ? new Date(endDate) : addYears(start, 10); // cap at 10 years

  let current = new Date(start);

  while (dates.length < maxCount && isBefore(current, limit)) {
    if (frequency === "daily") {
      dates.push(new Date(current));
      current = addDays(current, interval);
    } else if (frequency === "weekly") {
      for (let i = 0; i < 7; i++) {
        const day = addDays(current, i);
        const dayName = day.toLocaleDateString("en-US", { weekday: "long" });

        if (
          daysOfWeek.includes(dayName) &&
          isAfter(day, start) &&
          isBefore(day, limit)
        ) {
          dates.push(new Date(day));
          if (dates.length >= maxCount) break;
        }
      }
      current = addWeeks(current, interval);
    } else if (frequency === "monthly" && monthlyPattern !== undefined) {
      const { week, day } = monthlyPattern;
      const monthStart = startOfMonth(current);
      const targetDay = weekDayToIndex(day);
      let count = 0;
      let found: Date | undefined;

      for (let d = 1; d <= 31; d++) {
        const date = setDate(monthStart, d);
        if (date.getMonth() !== monthStart.getMonth()) break;

        if (date.getDay() === targetDay) {
          count++;
          if (week > 0 && count === week) {
            found = date;
            break;
          } else if (week === -1) {
            found = date; // keep updating to get the last occurrence
          }
        }
      }

      if (found && isAfter(found, start) && isBefore(found, limit)) {
        dates.push(found);
      }

      current = addMonths(current, interval);
    } else if (frequency === "yearly") {
      dates.push(new Date(current));
      current = addYears(current, interval);
    }
  }

  return dates;
}
