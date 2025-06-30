import React from "react";
import { useState } from "react";
import '../styles/FunctionCounter.css'; // Assuming you have a CSS file for styling

function FunctionCounter() {
  const [Count, setCount] = useState(0);

  const Increment = () => {
    setCount(Count + 1);
  }
  const Decrement = () => {
    if (Count > 0) {
        setCount(Count - 1);
    }else {
        setCount(0);
    }
  }
  return (
    <div className="function-counter">
      <div className="counter-card">
        <h1>Function Counter</h1>
        <h2>{Count}</h2>
        <div className="buttons">
          <button onClick={Decrement}>Decrement</button>
          <button onClick={Increment}>Increment</button>
        </div>
      </div>
    </div>
  );
};

export default FunctionCounter;

    