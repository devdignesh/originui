"use client";

import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";
import { addDays } from "date-fns";
import { useState } from "react";

export default function Component() {
  const today = new Date();
  const selectedDay = addDays(today, -28);
  const [month, setMonth] = useState(selectedDay);
  const [date, setDate] = useState<Date | undefined>(selectedDay);

  return (
    <div>
      <div className="rounded-lg border border-border p-2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={month}
          onMonthChange={setMonth}
        />
        <Button
          variant="outline"
          size="sm"
          className="my-1"
          onClick={() => {
            setDate(today);
            setMonth(today);
          }}
        >
          Set Today
        </Button>
      </div>
      <p
        className="mt-4 text-center text-xs text-muted-foreground"
        role="region"
        aria-live="polite"
      >
        Set today button -{" "}
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
