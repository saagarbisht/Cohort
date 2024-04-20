const axios = require("axios");

// thenables
fetch("https://sum-server.100xdevs.com/todos")
.then(todo => todo.json())
.then(todo => console.log("Number of Todos : ",todo.todos.length))
.catch(error => console.log(`Error occured : ${error.message}`))
.finally(() => console.log("first programm finished..."))

// async/await

async function todoCount(){
    try {
        const responce = await fetch("https://sum-server.100xdevs.com/todos");
        const todo = await responce.json()
        console.log("Number of Todos : ",todo.todos.length)
    } catch (error) {
        console.log("Error occured",error.message)
    }
    console.log("second programm finished...")
}
todoCount()

// axios

async function todoCount2(){
    const responce = await axios.get("https://sum-server.100xdevs.com/todos")
    console.log("Number of Todos",responce.data.todos.length);
    console.log("third programm finished...");
} 

todoCount2()