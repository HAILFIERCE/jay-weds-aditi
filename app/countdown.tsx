"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const target = new Date("2027-01-23T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = target.getTime() - Date.now();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );
      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );
      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-8 flex gap-4 text-center">
      <div>
        <p className="text-3xl font-bold">{timeLeft.days}</p>
        <p>Days</p>
      </div>

      <div>
        <p className="text-3xl font-bold">{timeLeft.hours}</p>
        <p>Hours</p>
      </div>

      <div>
        <p className="text-3xl font-bold">{timeLeft.minutes}</p>
        <p>Minutes</p>
      </div>

      <div>
        <p className="text-3xl font-bold">{timeLeft.seconds}</p>
        <p>Seconds</p>
      </div>
    </div>
  );
}