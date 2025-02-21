import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { useId } from "react";

export default function Component() {
  const id = useId();

  const items = [
    { value: "1", label: "Angry", icon: "😠" },
    { value: "2", label: "Sad", icon: "🙁" },
    { value: "3", label: "Neutral", icon: "😐" },
    { value: "4", label: "Happy", icon: "🙂" },
    { value: "5", label: "Laughing", icon: "😀" },
  ];

  return (
    <fieldset className="space-y-4">
      <legend className="text-foreground text-sm leading-none font-medium">How did it go?</legend>
      <RadioGroup className="flex gap-1.5" defaultValue="3">
        {items.map((item) => (
          <label
            key={`${id}-${item.value}`}
            className="border-input has-data-[state=checked]:border-ring has-data-[state=checked]:bg-accent outline-ring/30 dark:outline-ring/40 relative flex size-9 cursor-pointer flex-col items-center justify-center rounded-full border text-center text-xl shadow-xs outline-offset-2 transition-colors outline-none has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"
          >
            <RadioGroupItem
              id={`${id}-${item.value}`}
              value={item.value}
              className="sr-only after:absolute after:inset-0"
            />
            {item.icon}
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
