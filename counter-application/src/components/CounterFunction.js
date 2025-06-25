import React from "react";
import { useState } from "react";

function CounterFunction() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(prevcount => prevcount + 1);
    }
    const decrement = () => {
        setCount(prevcount => prevcount > 0 ? prevcount - 1 : 0);
    }
    return(
        <div className="counter-container">
            <h1 className="counter">Counter Function</h1>
            <h1 className="counter">{count}</h1>
            <div className="button-container">
                <button className="decrement" onClick={decrement}>-</button>
                <button className="increment" onClick={increment}>+</button>
            </div>
        </div>
    ) 

}
export default CounterFunction;