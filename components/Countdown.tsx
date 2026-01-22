
import React, { useState, useEffect } from 'react';
import { CountdownTime } from '../types';
import { EVENT_DATE } from '../constants';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = EVENT_DATE.getTime() - now;
      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="text-5xl md:text-8xl font-serif-luxury gold-foil-textured tracking-tighter italic md:not-italic">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-[10px] tracking-[0.5em] uppercase opacity-30 mt-4 font-bold">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-center space-x-10 md:space-x-20">
      <TimeUnit value={timeLeft.days} label="Ngày" />
      <div className="h-12 w-[1px] bg-[#d4af37] opacity-10 hidden md:block mt-2"></div>
      <TimeUnit value={timeLeft.hours} label="Giờ" />
      <div className="h-12 w-[1px] bg-[#d4af37] opacity-10 hidden md:block mt-2"></div>
      <TimeUnit value={timeLeft.minutes} label="Phút" />
      <div className="h-12 w-[1px] bg-[#d4af37] opacity-10 hidden md:block mt-2"></div>
      <TimeUnit value={timeLeft.seconds} label="Giây" />
    </div>
  );
};

export default Countdown;
