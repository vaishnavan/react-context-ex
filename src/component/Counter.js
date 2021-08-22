import React, { useContext } from "react";
import { counterContext } from "./Context";

export default function Counter() {
  const myCounter = useContext(counterContext);
  // console.log(myCounter)
  const { count, setCount } = myCounter;

  const handleIncrement = () => {
    setCount((count) => {
      return count + 1;
    });
  };

  const handleDecrement = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount((count) => {
        return count - 1;
      });
    }
  };

  const handleDouble = () => {
    setCount((count) => {
      return count * 2;
    });
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleDouble}>Double Increment</button>
    </>
  );
}
