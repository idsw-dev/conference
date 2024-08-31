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
        <div  {...props} className={`flex gap-4 ${props.className}`}>
            <div className="flex flex-col items-center gap-5">
                <span className="font-bold text-[40px]">{formatNumber(dayLeft.days)}</span>
                <span className="text-[24px]">DAYS</span>
            </div>
            <div className="hidden lg:block">:</div>
            <div className="flex flex-col items-center gap-5">
                <span className="font-bold text-[40px]">{formatNumber(dayLeft.hours)}</span>
                <span className="text-[24px]">HOURS</span>
            </div>
            <div className="hidden lg:block">:</div>
            <div className="flex flex-col items-center gap-5">
                <span className="font-bold text-[40px]">{formatNumber(dayLeft.mins)}</span>
                <span className="text-[24px]">MINUTES</span>
            </div>
            <div className="hidden lg:block">:</div>
            <div className="flex flex-col items-center gap-5">
                <span className="font-bold text-[40px]">{formatNumber(dayLeft.secs)}</span>
                <span className="text-[24px]">SECONDS</span>
            </div>
        </div>
    );
}