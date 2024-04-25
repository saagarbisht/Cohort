import React from 'react'
import useOnline from './hooks/useOnline'

export default function CheckingOniline() {
    const isOnline = useOnline();
    return (
        <>
            <div>
                {isOnline ? "You are Online" : "You are offline"}
            </div>
        </>
    )
}
