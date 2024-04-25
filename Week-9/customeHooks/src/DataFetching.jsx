import React from 'react'
import useDataFetching from './hooks/useDataFetching'
import { useState } from 'react';

export default function DataFetching() {
    const {data,loading} = useDataFetching("https://sum-server.100xdevs.com/todos",200000);
    return (
        <div>
        {
        loading ? 
        <div>Loading.....</div>
        :
        data.map(todo => {
                return (<div key={todo.title}>
                    <h2>{todo.title}</h2>
                    <p>{todo.description}</p>
                </div>)
            })
        }
        </div>
    )
}
