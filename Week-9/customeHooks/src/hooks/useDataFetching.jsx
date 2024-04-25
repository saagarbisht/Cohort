import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function useDataFetching(url,n) {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const req = () => {
        fetch(url)
        .then(data => data.json())
        .then(data => {setData(data.todos); setLoading(false)})
    }
    useEffect(() => {
        const start = setInterval(req,n);
        req()
        return () => {
            clearInterval(start)
        }
    },[n])
    return {data,loading}
}
