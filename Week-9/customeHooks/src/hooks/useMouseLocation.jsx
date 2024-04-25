import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function useMouseLocation() {
    const [location,setLocation] = useState({x: 0, y : 0})
    
    function handelMouseEvent(e){
        setLocation({x : e.clientX, y : e.clientY})
    }

    useEffect(() => {
        window.addEventListener("mousemove",handelMouseEvent)
        return () => {
            window.removeEventListener("mousemove",handelMouseEvent)
        }
    },[])
    return {location}
}
