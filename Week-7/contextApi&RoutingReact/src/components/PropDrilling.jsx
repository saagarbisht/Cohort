import React, { useState } from 'react'

export default function PropDrilling() {
    const [count,setCount] = useState(0);
    return (
        <>
            <Count count={count} setCount={setCount}/>
        </>
    )
}

function Count({count,setCount}){
    return (
        <>
            <div>{count}</div>
            <Button count={count} setCount={setCount}/>
        </>
    )
}

function Button({count,setCount}){
    return <div>
        <button onClick={() => {
            setCount(count - 1)
        }}>decrease</button>
        <button onClick={() => {
            setCount(count + 1)
        }}>increase</button>
    </div>
}