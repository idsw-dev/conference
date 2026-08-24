import { useState, useEffect } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const TimeUnit = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
      {value}
    </span>
    <span className="mt-1 text-xs font-medium tracking-wider text-white sm:text-sm">
      {label}
    </span>
  </div>
);

type TimerProps = {
  targetDate?: string;
  concludedTitle?: string;
  concludedSubtitle?: string;
};

export default function Timer({
  targetDate = "2026-11-21T00:00:00Z",
  concludedTitle = "EVENT CONCLUDED",
  concludedSubtitle = "THANK YOU FOR JOINING IDSW",
}: TimerProps) {
  const calculateTimeLeft = (): TimeLeft | null => {
    const difference = +new Date(targetDate) - +new Date();
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
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  if (timeLeft) {
    return (
      <div className="flex items-center gap-2 rounded-3xl border border-white/40 bg-white/25 px-12 py-6 backdrop-blur-sm sm:gap-4 sm:px-20 sm:py-8 md:gap-8">
        <TimeUnit value={formatNumber(timeLeft.days)} label="DAYS" />
        <span className="sm:text-md text-sm font-light text-white md:text-xl">
          :
        </span>
        <TimeUnit value={formatNumber(timeLeft.hours)} label="HOURS" />
        <span className="sm:text-md text-sm font-light text-white md:text-xl">
          :
        </span>
        <TimeUnit value={formatNumber(timeLeft.minutes)} label="MINUTES" />
        <span className="sm:text-md text-sm font-light text-white md:text-xl">
          :
        </span>
        <TimeUnit value={formatNumber(timeLeft.seconds)} label="SECONDS" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-1 rounded-3xl border border-white/40 bg-white/25 px-8 py-6 backdrop-blur-sm sm:px-16 sm:py-8">
      <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
        {concludedTitle}
      </span>
      {concludedSubtitle && (
        <span className="mt-1 text-xs font-medium tracking-wider text-white uppercase sm:text-sm">
          {concludedSubtitle}
        </span>
      )}
    </div>
  );
}
