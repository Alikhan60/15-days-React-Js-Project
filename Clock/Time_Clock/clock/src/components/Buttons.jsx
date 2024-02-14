import { useEffect, useState } from "react";

const Buttons = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interValId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interValId);
    };
  });
  return <div className="btn btn-success btn">{time.toLocaleTimeString()}</div>;
};

export default Buttons;
