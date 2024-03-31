import React, { useMemo, useState } from 'react'

export default function UseMemoHook() {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);
    function updateCounter(){
        setCounter(counter + 1)
    }
    function updateInput(e){
        const inputNumber = Number(e.target.value)
        setInputValue(inputNumber)

    }
    const sum = useMemo(() => {
        let sum = 0;
        for(let i = 1; i <= inputValue; i++){
            sum +=i;
        }
        return sum
    },[inputValue])

    return (
        <>
            <h1>Using useMemo Hook</h1>
            <input type="text" placeholder='Sum from 1 to n' onChange={updateInput}/>
            <p>Sum is {sum}</p>
            <button onClick={updateCounter}>Counter <span>{counter}</span></button>
        </>
    )
}
