import React from 'react';
import {Button} from "shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../model/slice/counterSlice";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";

const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue)
    const handleIncrement = () => {
        dispatch(counterActions.increment());
    }
    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    }
    return (
        <div>
            <h1 data-testid="counter-value">
                {counterValue}
            </h1>
            <Button testId="counter-increment-btn" onClick={handleIncrement}>+</Button>
            <Button testId="counter-decrement-btn" onClick={handleDecrement}>-</Button>
        </div>
    );
};

export default Counter;
