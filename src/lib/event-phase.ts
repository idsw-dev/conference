export const eventPhases = ["before", "live", "between", "after"] as const;
export type EventPhase = (typeof eventPhases)[number];

/** Start and end of each event day, in epoch milliseconds. */
export type DayWindow = [start: number, end: number];

/**
 * Where `now` falls relative to the event days. `day` is the index of the day
 * that is live, or of the next day to start. The hero has an inline copy of this
 * logic so it can pick the phase before first paint. Keep the two in sync.
 */
export function getEventPhase(
  now: number,
  windows: DayWindow[],
): { phase: EventPhase; day: number } {
  for (const [day, [start, end]] of windows.entries()) {
    if (now < start) return { phase: day === 0 ? "before" : "between", day };
    if (now < end) return { phase: "live", day };
  }
  return { phase: "after", day: windows.length };
}
