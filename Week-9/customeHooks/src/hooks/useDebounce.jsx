import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function useDebounce(input,time) {
    const [value,setValue] = useState("")
    useEffect(() => {
        const start = setTimeout(() => {
            setValue(input)
        },time)
        return () => {
            clearTimeout(start)
        }
    },[input])
    return value
}
