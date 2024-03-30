import React, { useEffect, useState } from 'react'
import "../App.css";
export default function TodosWithHook() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        setInterval(() => {
            fetch("https://sum-server.100xdevs.com/todos")
        .then(data => data.json())
        .then(data => setTodos(data.todos))
        },10000)
    },[])
    return (
        <ul>
            {todos.map(todo => {
                return (
                    <li key={todo.id}>
                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>
                        <button>{!todo.completed ? "Mark as done" : "done"}</button>
                    </li>
                )
            })}
        </ul>
    )
}
