import React, { useState } from 'react'

let id = 3;
export default function Key() {
    const [titles,setTitle] = useState("");
    const [descriptions,setDescription] = useState("");
    const [todo,setTodo] = useState([
        {
            id : 1,
            title : "Going To the gym",
            description : "Today i have to go to gym by 7 o'clock"
        },
        {
            id : 2,
            title : "Washing Dishes",
            description : "Today is my turn of washing dishes"
        },
        {
            id : 3,
            title : "Reading Manga",
            description : "Today i have to finish 30 chapters of One Piece Manga"
        },
    ])
    function addTitle(e){
        setTitle(e.target.value)
    }
    function addDescription(e){
        setDescription(e.target.value)
    }
    function addNewTodo(){
        setTodo([
            ...todo,
            {
                id : ++id,
                title : titles,
                description : descriptions
            }
        ])
    }
    return (
        <>
            <div style={{display : "flex", flexDirection : "column", alignItems : "start", gap : "16px"}}>
                <input type="text" placeholder='title' onChange={addTitle}/>
                <input type="text" placeholder='description' onInput={addDescription}/>
                <button onClick={addNewTodo}>Add a todo</button>
            </div>
            {todo.map(todos => {
                return (
                        <Todo key={todos.id} title={todos.title} description={todos.description}/>
                )
            })}
        </>
    )
}

function Todo({title,description}){
    return (
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
    )
}
