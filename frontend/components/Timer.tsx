"use client";
import React, { useState, useEffect } from "react";

const Timer = () => {
  // Initialize state for days, hours, minutes, and seconds
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const eventTime = new Date("2024-01-01").getTime();
      const remainingTime = eventTime - currentTime;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      // Update the state with the new time values
      setTime({ days, hours, minutes, seconds });
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="bg-green-600 text-white p-2 rounded flex flex-col items-center justify-center">
        {time.days}{" "}
        <small className="block mt-1 text-xs text-gray-100">DAYS</small>
      </div>
      <div className="bg-green-600 text-white p-2 rounded flex flex-col items-center justify-center">
        {time.hours}{" "}
        <small className="block mt-1 text-xs text-gray-100">HOURS</small>
      </div>
      <div className="bg-green-600 text-white p-2 rounded flex flex-col items-center justify-center">
        {time.minutes}{" "}
        <small className="block mt-1 text-xs text-gray-100">MINUTES</small>
      </div>
      <div className="bg-green-600 text-white p-2 rounded flex flex-col items-center justify-center">
        {time.seconds}{" "}
        <small className="block mt-1 text-xs text-gray-100">SECONDS</small>
      </div>
    </div>
  );
};

export default Timer;
