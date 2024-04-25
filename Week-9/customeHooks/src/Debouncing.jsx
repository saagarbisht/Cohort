import React from 'react'
import { useState } from 'react'
import useDebounce from './hooks/useDebounce';
import { useEffect } from 'react';

export default function Debouncing() {
    const [input,setInput] = useState("");
    const debounce = useDebounce(input,500);
    useEffect(() => {
    },[])
    return (
        <>
            <div>
            Debounce Value {debounce}
            </div>
            <input 
            type='text'
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder='Search'
            />
        </>
    )
}
