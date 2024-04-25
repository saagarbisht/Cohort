import React from 'react'
import useMouseLocation from './hooks/useMouseLocation'

export default function MouseLocation() {
    const {location} = useMouseLocation()
    return (
        <>
            <div>
                Location of Mouse : {location.x} , {location.y}
            </div>
        </>
    )
}
