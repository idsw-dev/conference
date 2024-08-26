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
        <div  {...props} className={`flex gap-5 ${props.className}`}>
            <div className="flex flex-col items-center gap-2">
                <span>{formatNumber(dayLeft.days)}</span>
                <span className=" ">DAYS</span>
            </div>
            <div className="hidden lg:block">:</div>
            <div className="flex flex-col items-center gap-2">
                <span>{formatNumber(dayLeft.hours)}</span>
                <span className=" ">HOURS</span>
            </div>
            <div className="hidden lg:block">:</div>
            <div className="flex flex-col items-center gap-2">
                <span>{formatNumber(dayLeft.mins)}</span>
                <span className=" ">MINUTES</span>
            </div>
            <div className="hidden lg:block">:</div>
            <div className="flex flex-col items-center gap-2">
                <span>{formatNumber(dayLeft.secs)}</span>
                <span className=" ">SECONDS</span>
            </div>
        </div>
    );
}