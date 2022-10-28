import React, { useState } from "react";
const index = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className="p-8 flex flex-col justify-center items-center">
      <div className="space-x-4 flex">
        <button className=" bg-red-400 rounded-xl px-4" onClick={decreaseCount}>
          -
        </button>
        <div>{count}</div>
        <button
          className=" bg-primary-200 rounded-xl px-4"
          onClick={increaseCount}
        >
          +
        </button>
      </div>
      <div>
        <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
};

export default index;
