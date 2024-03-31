import React, {useState } from 'react'

export default function UseStateHook() {
    const [counter, setCounter] = useState(0);
    const updateCounter = () => {
        setCounter(counter + 1);
    }
    return (
        <>
        <h1>Using useState Hook</h1>
        <button onClick={updateCounter}>Click Me : <span>{counter}</span></button>
        </> 
    )
}
