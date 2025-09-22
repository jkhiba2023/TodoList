import { useEffect, useState } from "react";

export const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");
  const Interval = useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const formatDate = now.toLocaleDateString();
      const formatTime = now.toLocaleTimeString();
      setDateTime(`${formatDate} - ${formatTime}`);
    }, 1000);
  }, []);
  return <h2 className="date-time">{dateTime}</h2>;
};
