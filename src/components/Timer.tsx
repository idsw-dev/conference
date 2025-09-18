import { useState, useEffect } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const TimeUnit = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
      {value}
    </span>
    <span className="mt-1 text-xs sm:text-sm font-medium tracking-wider text-white">
      {label}
    </span>
  </div>
);

export default function Timer() {
  const cfpClosingDate = "2025-11-22T00:00:00Z";

  const calculateTimeLeft = (): TimeLeft | null => {
    const difference = +new Date(cfpClosingDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateTimeLeft(),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  if (timeLeft) {
    return (
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 font-mono bg-white/25 px-12 py-8 rounded-3xl border border-white">
        <TimeUnit value={formatNumber(timeLeft.days)} label="DAYS" />
        <span className="text-sm sm:text-md md:text-xl font-light text-white">
          :
        </span>
        <TimeUnit value={formatNumber(timeLeft.hours)} label="HOURS" />
        <span className="text-sm sm:text-md md:text-xl font-light text-white">
          :
        </span>
        <TimeUnit value={formatNumber(timeLeft.minutes)} label="MINUTES" />
        <span className="text-sm sm:text-md md:text-xl font-light text-white">
          :
        </span>
        <TimeUnit value={formatNumber(timeLeft.seconds)} label="SECONDS" />
      </div>
    );
  }

  return (
    <div className="text-lg font-bold text-slate-800">
      The call for proposals is now closed.
    </div>
  );
}
