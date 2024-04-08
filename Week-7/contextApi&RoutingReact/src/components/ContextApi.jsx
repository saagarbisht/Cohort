import React, { useContext, useState } from 'react'
import {CountContext} from "../context"
export default function PropDrilling() {
    const [count,setCount] = useState(0);
    return (
        <>
            <CountContext.Provider value={{count,setCount}}>
                <Count/>
            </CountContext.Provider>
        </>
    )
}

function Count(){
    return (
        <>
            <RenderCount/>
            <Button/>
        </>
    )
}

function RenderCount(){
    const {count} = useContext(CountContext)
    return <div>{count}</div>
}

function Button(){
    const {count,setCount} = useContext(CountContext)
    return <div>
        <button onClick={() => {
            setCount(count - 1)
        }}>decrease</button>
        <button onClick={() => {
            setCount(count + 1)
        }}>increase</button>
    </div>
}