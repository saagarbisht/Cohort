import { useMemo, useState } from "react";

export function Assignment1() {
    const [input, setInput] = useState(0);
    const expensiveValue = useMemo(function(){
        let factorial = 1;
        for(let i = 2; i <= input; i++){
            factorial *= i;
        }
        return factorial
    },[input])
    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onInput={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}