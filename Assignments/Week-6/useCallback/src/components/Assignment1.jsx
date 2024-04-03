import { useCallback, useState } from "react";

export function Assignment1() {
    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    },[count])

    const handleDecrement = useCallback(() => {
        setCount(count - 1);
    },[count])

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = ({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
);
