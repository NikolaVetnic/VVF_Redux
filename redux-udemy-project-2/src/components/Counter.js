import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/index";

const Counter = () => {
    const dispatch = useDispatch(); // returns a function which can be called to dispatch actions

    const counter = useSelector((state) => state.counter);
    const show = useSelector((state) => state.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    const increaseHandler = () => {
        dispatch(counterActions.increase(5));
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={incrementHandler}>Increment</button>
            </div>
            <div>
                <button onClick={increaseHandler}>Increase by 5</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
