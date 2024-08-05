import { useState } from "react";

export default () => {
    const date = new Date(2024, 11, 17, 9, 0, 0);
    let now = new Date();

    const [dayLeft, setDayLeft] = useState({
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
    });
    const updateCountdown = () => {
        console.log("ste");
        now = new Date();
        const diff = date.getTime() - now.getTime();
        console.log(diff);
        setDayLeft({
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor(diff / (1000 * 60 * 60)) % 24,
            mins: Math.floor(diff / (1000 * 60)) % 24,
            secs: Math.floor((diff / 1000) % 60),
        });
    };
    setInterval(() => updateCountdown(), 1000);

    return (
        <div className="countdown lg:grid-cols-1 gap-5 justify-center text-white flex text-6xl mb-16">
            <div className="countdown-item relative days">
                <span>{dayLeft.days}</span>
                <span className="countdown-desc text-sm absolute -bottom-8 left-[50%] -translate-x-1/2">DAYS</span>
            </div>
            <span>:</span>
            <div className="countdown-item relative hours">
                <span>{dayLeft.hours.toString().padStart(2, '0')}</span>
                <span className="countdown-desc text-sm absolute -bottom-8 left-[50%] -translate-x-1/2">HOURS</span>
            </div>
            <span>:</span>
            <div className="countdown-item relative mins">
                <span>{dayLeft.mins.toString().padStart(2, '0')}</span>
                <span className="countdown-desc text-sm absolute -bottom-8 left-[50%] -translate-x-1/2">MINUTES</span>
            </div>
            <span>:</span>
            <div className="countdown-item relative secs">
                <span>{dayLeft.secs.toString().padStart(2, '0')}</span>
                <span className="countdown-desc text-sm absolute -bottom-8 left-[50%] -translate-x-1/2">SECONDS</span>
            </div>
        </div>
    )
}
