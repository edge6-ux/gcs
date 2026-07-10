"use client";

import { useMemo } from "react";
import { generateTimeSlotGroups } from "@/lib/time-slots";

type Variant = "residential" | "commercial";

type TimeSlotPickerProps = {
  variant: Variant;
  selectedSlots: string[];
  onChange: (slots: string[]) => void;
};

export default function TimeSlotPicker({
  variant,
  selectedSlots,
  onChange,
}: TimeSlotPickerProps) {
  const dayGroups = useMemo(() => generateTimeSlotGroups(), []);

  const toggleSlot = (id: string) => {
    if (selectedSlots.includes(id)) {
      onChange(selectedSlots.filter((slotId) => slotId !== id));
      return;
    }

    if (selectedSlots.length < 3) {
      onChange([...selectedSlots, id]);
    }
  };

  const selectedClass =
    variant === "commercial"
      ? "border-gold bg-slate text-cream"
      : "border-gold bg-gold-tint/20 text-ink";

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-[20px] text-ink">
          Choose 3 times that work for you
        </h2>
        <p className="mt-2 font-body text-[14px] text-body">
          Pick any three — we&apos;ll confirm the one that fits our schedule.
        </p>
        <p className="mt-3 font-body text-[13px] font-medium text-taupe">
          {selectedSlots.length} of 3 selected
        </p>
      </div>

      {dayGroups.map((group) => (
        <div key={group.dayLabel}>
          <h3 className="mb-3 font-body text-[12px] font-semibold uppercase tracking-[0.14em] text-taupe">
            {group.dayLabel}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.slots.map((slot) => {
              const selected = selectedSlots.includes(slot.id);
              const hourLabel = slot.fullLabel.split(" at ")[1] ?? slot.fullLabel;

              return (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => toggleSlot(slot.id)}
                  aria-pressed={selected}
                  className={`rounded-md border px-3 py-2 font-body text-sm transition-colors ${
                    selected
                      ? selectedClass
                      : "border-line bg-cream text-body hover:border-gold/60"
                  }`}
                >
                  {hourLabel}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
