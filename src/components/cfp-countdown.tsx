import { useEffect, useState } from "react";
import { siteConfig } from "../config/site";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(deadline: string): TimeLeft {
  const diff = new Date(deadline).getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Unit({
  value,
  label,
  pad = true,
}: {
  value: number;
  label: string;
  pad?: boolean;
}) {
  const display = pad ? String(value).padStart(2, "0") : String(value);

  return (
    <div className="flex min-w-12 flex-col items-center sm:min-w-14">
      <span
        suppressHydrationWarning
        className="font-display text-3xl leading-none font-semibold tracking-tight tabular-nums sm:text-4xl md:text-5xl"
      >
        {display}
      </span>
      <span className="mt-2 text-xs text-white/70 sm:text-sm">{label}</span>
    </div>
  );
}

export default function CfpCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(siteConfig.cfp.deadlineIso),
  );

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(siteConfig.cfp.deadlineIso));
    tick();

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const id = window.setInterval(tick, reduced ? 60_000 : 1_000);
    return () => window.clearInterval(id);
  }, []);

  const closed = Object.values(timeLeft).every((v) => v === 0);

  if (closed) {
    return (
      <p className="mt-10 text-sm text-white/70 sm:text-base">
        Call for proposals is closed.
      </p>
    );
  }

  return (
    <div className="mt-10">
      <p className="sr-only">
        Call for proposals closes {siteConfig.cfp.deadline} at{" "}
        {siteConfig.cfp.deadlineTime}.
      </p>
      <p className="text-sm text-white/70 sm:text-base" aria-hidden="true">
        CFP Closes in
      </p>
      <div
        className="mt-4 flex items-end justify-center gap-5 sm:gap-8 md:gap-10"
        aria-hidden="true"
      >
        <Unit value={timeLeft.days} label="days" pad={false} />
        <Unit value={timeLeft.hours} label="hours" />
        <Unit value={timeLeft.minutes} label="min" />
        <Unit value={timeLeft.seconds} label="sec" />
      </div>
    </div>
  );
}
