import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {

    return (
        <>
            <h1>Using useEffect Hook</h1>
            <TodoWithId />
        </>
    )
}

function TodoWithId(){
    const [todoId, setTodoId] = useState("1");
    function updateTodo(e){
        setTodoId(e.target.innerText)
    }
    return(
        <>
            <button onClick={updateTodo}>1</button>
            <button onClick={updateTodo}>2</button>
            <button onClick={updateTodo}>3</button>
            <button onClick={updateTodo}>4</button>
            <Todo id={todoId}/>
        </>
    )
}

function Todo({id}){
    const [todo, setTodo] = useState({});
    useEffect(() => {
        fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then(res => res.json())
        .then(data => setTodo(data.todo)) 
    },[id])
    return (<div>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
    </div>)
}