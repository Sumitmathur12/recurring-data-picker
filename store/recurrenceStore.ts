import { create } from "zustand";

type Frequency = "daily" | "weekly" | "monthly" | "yearly";

interface RecurrenceState {
  frequency: Frequency;
  interval: number;
  daysOfWeek: string[]; // e.g. ['Monday', 'Wednesday']
  monthlyPattern: { week: number; day: string } | null;
  startDate: string;
  endDate?: string;
  setFrequency: (freq: Frequency) => void;
  setInterval: (val: number) => void;
  setDaysOfWeek: (days: string[]) => void;
  setMonthlyPattern: (pattern: any) => void;
  setStartDate: (date: string) => void;
  setEndDate: (date?: string) => void;
}

export const useRecurrenceStore = create<RecurrenceState>((set) => ({
  frequency: "weekly",
  interval: 1,
  daysOfWeek: [],
  monthlyPattern: null,
  startDate: "",
  endDate: undefined,
  setFrequency: (frequency) => set({ frequency }),
  setInterval: (interval) => set({ interval }),
  setDaysOfWeek: (daysOfWeek) => set({ daysOfWeek }),
  setMonthlyPattern: (monthlyPattern) => set({ monthlyPattern }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
}));
