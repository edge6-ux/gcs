export type TimeSlot = {
  id: string;
  fullLabel: string;
};

export type TimeSlotDayGroup = {
  dayLabel: string;
  slots: TimeSlot[];
};

const BUSINESS_HOURS = [9, 10, 11, 12, 13, 14, 15, 16];

function isWeekday(date: Date): boolean {
  const day = date.getDay();
  return day !== 0 && day !== 6;
}

export function getNextBusinessDays(count: number, from = new Date()): Date[] {
  const days: Date[] = [];
  const cursor = new Date(from);
  cursor.setHours(0, 0, 0, 0);

  while (days.length < count) {
    if (isWeekday(cursor)) {
      days.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
}

function formatHour(hour: number): string {
  if (hour === 12) return "12:00 PM";
  if (hour > 12) return `${hour - 12}:00 PM`;
  return `${hour}:00 AM`;
}

function formatDayLabel(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export function generateTimeSlotGroups(
  businessDayCount = 5,
  from = new Date(),
): TimeSlotDayGroup[] {
  return getNextBusinessDays(businessDayCount, from).map((date) => {
    const dayLabel = formatDayLabel(date);
    const dateKey = date.toISOString().slice(0, 10);

    return {
      dayLabel,
      slots: BUSINESS_HOURS.map((hour) => {
        const id = `${dateKey}-${hour}`;
        return {
          id,
          fullLabel: `${dayLabel} at ${formatHour(hour)}`,
        };
      }),
    };
  });
}

export function resolveTimeSlotLabels(
  slotIds: string[],
  groups = generateTimeSlotGroups(),
): string[] {
  const lookup = new Map<string, string>();
  for (const group of groups) {
    for (const slot of group.slots) {
      lookup.set(slot.id, slot.fullLabel);
    }
  }

  return slotIds.map((id) => lookup.get(id) ?? id);
}
