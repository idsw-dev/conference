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
    <div className="countdown grid grid-cols-2 lg:grid-cols-1 text-xl gap-5 justify-center">
      <div className="countdown-item p-3 bg-gradient-to-r from-dark/15 to-dark/20 shadow-xl shadow-gray-700/15 rounded-lg days text-white">
        {dayLeft.days} days
      </div>
      <div className="countdown-item p-3 bg-gradient-to-r from-dark/15 to-dark/20 shadow-xl shadow-gray-700/15 rounded-lg hours text-white">
        {dayLeft.hours.toString().padStart(2, "0")} hours
      </div>
      <div className="countdown-item p-3 bg-gradient-to-r from-dark/15 to-dark/20 shadow-xl shadow-gray-700/15 rounded-lg mins text-white">
        {dayLeft.mins.toString().padStart(2, "0")} mins
      </div>
      <div className="countdown-item p-3 bg-gradient-to-r from-dark/15 to-dark/20 shadow-xl shadow-gray-700/15 rounded-lg secs text-white">
        {dayLeft.secs.toString().padStart(2, "0")} secs
      </div>
    </div>
  );
};
