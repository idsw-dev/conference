import { useState } from "react";

type TimerProps = {
    date: Date;
} & React.HTMLProps<HTMLDivElement>;

function formatNumber(number: number) {
    return number.toString().padStart(2, "0");
}

export default function Timer({ date, ...props }: TimerProps) {
    let now = new Date();

    const [dayLeft, setDayLeft] = useState({
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
    });

    function updateCountdown() {
        now = new Date();
        const diff = date.getTime() - now.getTime();

        setDayLeft({
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor(diff / (1000 * 60 * 60)) % 24,
            mins: Math.floor(diff / (1000 * 60)) % 24,
            secs: Math.floor((diff / 1000) % 60),
        });
    }

    setInterval(() => updateCountdown(), 1000);

    return (
        <div  {...props} className={`flex gap-8 xl:gap-4 flex-wrap ${props.className}`}>
            <div className="flex md:flex-col flex-row items-center gap-5">
                <span className="font-bold text-3xl text-[40px]">{formatNumber(dayLeft.days)}</span>
                <span className="text-xl xl:text-2xl">DAYS</span>
            </div>
            <div className="hidden lg:block">:</div>
            <div className="flex md:flex-col items-center gap-5">
                <span className="font-bold text-3xl text-[40px]">{formatNumber(dayLeft.hours)}</span>
                <span className="text-xl xl:text-2xl">HOURS</span>
            </div>
            <div className="hidden lg:block">:</div>
            <div className="flex md:flex-col items-center gap-5">
                <span className="font-bold text-3xl text-[40px]">{formatNumber(dayLeft.mins)}</span>
                <span className="text-xl xl:text-2xl">MINUTES</span>
            </div>
            <div className="hidden lg:block">:</div>
            <div className="flex md:flex-col items-center gap-5">
                <span className="font-bold text-3xl text-[40px]">{formatNumber(dayLeft.secs)}</span>
                <span className="text-xl xl:text-2xl">SECONDS</span>
            </div>
        </div>
    );
}