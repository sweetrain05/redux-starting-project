import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import classes from "./Counter.module.css";

const Counter = () => {
    const dispatch = useDispatch();

    const counter = useSelector((state) => state.counter);
    const show = useSelector((state) => state.showCounter);

    const [number, setNumber] = useState();

    const incrementHandler = () => {
        dispatch({ type: "increment" });
    };
    const increaseHandler = (amount) => {
        dispatch({ type: "increase", amount });
    };
    const decrementHandler = () => {
        dispatch({ type: "decrement" });
    };
    const toggleCounterHandler = () => {
        dispatch({ type: "toggle" });
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{show ? counter : ""}</div>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => {
                        setNumber(Number(e.target.value));
                    }}
                ></input>
                <button
                    onClick={() => {
                        increaseHandler(number);
                    }}
                >
                    Increase by {number}
                </button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
