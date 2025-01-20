"use client";

import { Calendar } from "@/registry/default/ui/calendar";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useEffect, useId, useState } from "react";

export default function Component() {
  const id = useId();
  const today = new Date();
  const [month, setMonth] = useState(today);
  const [date, setDate] = useState<Date | undefined>(today);
  const [inputValue, setInputValue] = useState("");

  const handleDayPickerSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue("");
      setDate(undefined);
    } else {
      setDate(date);
      setMonth(date);
      setInputValue(format(date, "yyyy-MM-dd"));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      const parsedDate = new Date(value);
      setDate(parsedDate);
      setMonth(parsedDate);
    } else {
      setDate(undefined);
    }
  };

  useEffect(() => {
    setInputValue(format(today, "yyyy-MM-dd"));
  }, []);

  return (
    <div>
      <div className="rounded-lg border border-border">
        <Calendar
          mode="single"
          className="p-2"
          selected={date}
          onSelect={handleDayPickerSelect}
          month={month}
          onMonthChange={setMonth}
        />
        <div className="border-t border-border p-3">
          <div className="flex items-center gap-3">
            <Label htmlFor={id} className="text-xs">
              Enter date
            </Label>
            <div className="relative grow">
              <Input
                id={id}
                type="date"
                value={inputValue}
                onChange={handleInputChange}
                className="peer ps-9 [&::-webkit-calendar-picker-indicator]:hidden"
                aria-label="Select date"
              />
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                <CalendarIcon size={16} strokeWidth={2} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p
        className="mt-4 text-center text-xs text-muted-foreground"
        role="region"
        aria-live="polite"
      >
        Calendar -{" "}
        <a
          className="underline hover:text-foreground"
          href="https://daypicker.dev/"
          target="_blank"
          rel="noopener nofollow"
        >
          React DayPicker
        </a>
      </p>
    </div>
  );
}
