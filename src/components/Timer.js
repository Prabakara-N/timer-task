import React, { useEffect, useState } from "react";

const Timer = () => {
  let [timer, setTimer] = useState(60);

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
    setTimer((prevTimer) => Math.min(prevTimer - 5, 60));
  };

  const handleClear = () => {
    setTimer(`00`);
  };

  const handleRestart = () => {
    setTimer(60);
  };

  return (
    <div>
      <h1 className="text-center text-3xl text-green-400 mb-8 mt-2">
        Routine Starting In...
      </h1>
      <div className="w-[320px] h-[320px] rounded-full border-[12px] border-violet-700 flex items-center justify-center">
        <p className="text-6xl text-green-400">00 : {timer}</p>
      </div>
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
