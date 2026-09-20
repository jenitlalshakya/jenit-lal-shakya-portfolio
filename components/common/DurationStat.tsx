"use client"

import { useEffect, useState } from "react";
import { getDuration } from "@/lib/getDuration";

type DurationStatProps = {
  startDate: Date;
}

export const DurationStat = ({ startDate }: DurationStatProps) => {
  const [duration, setDuration] = useState(() => getDuration(startDate));
  
  useEffect(() => {
    const updateDuration = () => {
      setDuration(getDuration(startDate));
    };

    updateDuration();

    const interval = setInterval(updateDuration, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return <>{duration}</>;
};
