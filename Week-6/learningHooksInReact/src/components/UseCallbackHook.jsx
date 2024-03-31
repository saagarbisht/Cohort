import React, { memo, useCallback, useState } from 'react'

export default function UseCallbackHooks() {
    const [counter, setCounter] = useState(0);
    function updateCounter(){
        setCounter(counter + 1)
    }
    
    const clickMe = useCallback(function(){
        console.log("button clicked")
    },[])
    return (
        <>
            <h1>Using useCallback Hook</h1>
            <Child onClick = {clickMe}/>
            <button onClick={updateCounter}>Click me {counter}</button>
        </>    
)
}



const Child = memo(({onClick}) => {
    console.log("child render")
    return (
        <>
            <button>Button Clicked</button>
        </>
    )
} )