import React, { useState, useEffect } from "react";

function Time() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const updateClock = () => {
      setDate(new Date());
    };

    const now = new Date();
    const oneMinute = 1000 * 60;
    const timeUntilMinuteTick = oneMinute - (now.getSeconds() * 1000 + now.getMilliseconds());

    const timeout = setTimeout(() => {
      updateClock();
      const interval = setInterval(updateClock, oneMinute);
      return () => clearInterval(interval);
    }, timeUntilMinuteTick);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </div>
  );
}

export default Time;