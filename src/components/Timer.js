import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Timer = () => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => Math.max(prevTimer - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleIncrease = () => {
    setTimer((prevTimer) => Math.min(prevTimer + 10, 60));
  };

  const handldeDecrese = () => {
    setTimer((prevTimer) => Math.max(prevTimer - 5, 0));
  };

  const handleClear = () => {
    setTimer(0);
  };

  const handleRestart = () => {
    setTimer(60);
  };

  return (
    <div>
      <h1 className="text-center text-3xl text-green-400 mb-8 mt-2">
        Routine Starting In...
      </h1>

      <CircularProgressbar
        value={(timer / 60) * 100} // Convert the timer to a percentage
        text={`00 : ${timer < 10 ? `0${timer}` : timer}`}
        styles={buildStyles({
          strokeLinecap: "round",
          textSize: "16px",
          pathTransitionDuration: 1, // Animation duration in seconds
          pathColor: `rgba(1, 25, 54, ${1 - timer / 60})`,
          textColor: "#20bf55",
          trailColor: "#d6d6d6",
          backgroundColor: "#011936",
        })}
      />

      <div className="mt-6 flex flex-col justify-center">
        <div className="gap-4 grid grid-cols-2 grid-rows-2  items-center justify-center">
          <button onClick={handleIncrease}>Add (+10s)</button>
          <button onClick={handldeDecrese}>Skip (-5s) </button>
        </div>
        <div className="gap-4 grid grid-cols-2 grid-rows-2 items-center justify-center">
          <button onClick={handleClear}>Clear</button>
          <button onClick={handleRestart}>Restart</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
