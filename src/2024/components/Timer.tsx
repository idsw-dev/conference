import { useEffect, useState } from "react";
import { useInterval } from "../../shared/hooks/useInterval";

type TimerProps = {
  date: Date;
} & React.HTMLProps<HTMLDivElement>;

function formatNumber(number: number) {
  const str = number.toString();
  return str.length < 2 ? "0" + str : str;
}

export default function Timer({ date, ...props }: TimerProps) {
  const [dayLeft, setDayLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  function updateCountdown() {
    const now = new Date();
    const diff = date.getTime() - now.getTime();

    if (diff < 0) {
      setDayLeft({
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
      });
    } else {
      setDayLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(diff / (1000 * 60 * 60)) % 24,
        mins: Math.floor(diff / (1000 * 60)) % 60,
        secs: Math.floor((diff / 1000) % 60),
      });
    }
  }

  const { start } = useInterval(updateCountdown, 1000);

  useEffect(() => {
    start();
  }, []);

  return (
    <div
      {...props}
      className={`flex flex-wrap gap-8 xl:gap-4 ${props.className}`}
    >
      <div className="flex flex-row items-center gap-5 md:flex-col">
        <span className="min-w-16 text-center text-3xl font-bold md:text-5xl">
          {formatNumber(dayLeft.days)}
        </span>
        <span className="text-base text-gray-400 xl:text-2xl">DAYS</span>
      </div>
      <div className="mx-4 mt-2 hidden text-gray-500 lg:block">:</div>
      <div className="flex items-center gap-5 md:flex-col">
        <span className="min-w-16 text-center text-3xl font-bold md:text-5xl">
          {formatNumber(dayLeft.hours)}
        </span>
        <span className="min-w-16 text-base text-gray-400 xl:text-2xl">
          HOURS
        </span>
      </div>
      <div className="mx-4 mt-2 hidden text-gray-500 lg:block">:</div>
      <div className="flex items-center gap-5 md:flex-col">
        <span className="min-w-16 text-center text-3xl font-bold md:text-5xl">
          {formatNumber(dayLeft.mins)}
        </span>
        <span className="text-base text-gray-400 xl:text-2xl">MINUTES</span>
      </div>
      <div className="mx-4 mt-2 hidden text-gray-500 lg:block">:</div>
      <div className="flex items-center gap-5 md:flex-col">
        <span className="min-w-16 text-center text-3xl font-bold md:text-5xl">
          {formatNumber(dayLeft.secs)}
        </span>
        <span className="text-base text-gray-400 xl:text-2xl">SECONDS</span>
      </div>
    </div>
  );
}
