/**
You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
- Don't use any database, just store all the data in an array to store the todo list data (in-memory)
- Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

Each todo has a title and a description. The title is a string and the description is a string.
Each todo should also get an unique autogenerated id every time it is created
The expected API endpoints are defined below,
    1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
    2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
    3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
    4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
    5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

Testing the server - run `npm run test-todoServer` command in terminal
*/
const express = require('express');
const fs = require("fs");
const app = express();

function uniqueId() {
    let id = "";
    const str = "abcdefIJKLhijk012lmnvwxyzABCD56g78EFGHMNOPQRSTUopqrstuVWXYZ349";
    for (let i = 1; i < 11; i++) {
        const index = Math.floor(Math.random() * str.length);
        id += str[index];
    }
    return id;
}
app.use(express.json());

app.get("/todos", (req, res) => {
    fs.readFile("./todos.json", "utf-8", (err, data) => {
        if (err) {
            console.log("Error Occured : ", err.message)
            return res.sendStatus(500).end();
        } else {
            const todos = JSON.parse(data);
            return res.status(200).send(todos);
        }
    })
})

app.get("/todos/:id", (req, res) => {
    const todoId = req.params.id;
    fs.readFile("./todos.json", "utf-8", (err, data) => {
        let hasTodo = false;
        if (err) {
            console.log("Error Occured : ", err.message)
            return res.sendStatus(500).end();
        } else {
            const todos = JSON.parse(data);
            todos.forEach(todo => {
                if (todo.id === todoId) {
                    hasTodo = true;
                    return res.status(200).send(todo)
                }
            })
            if (!hasTodo) {
                return res.status(404).end("not found")
            }
        }
    })
})

app.post("/todos", (req, res) => {
    const inputTodo = req.body
    const todo = { "id": uniqueId(), ...inputTodo }
    fs.readFile("./todos.json", "utf-8", (err, data) => {
        if (err) {
            console.log("Error Occured : ", err.message);
            return res.sendStatus(500).end();
        } else {
            const todos = JSON.parse(data);
            todos.push(todo);
            fs.writeFile("./todos.json", JSON.stringify(todos), (err, data) => {
                if (err) {
                    console.log("Error Occured : ", err.message);
                    return res.sendStatus(500).end();
                } else {
                    return res.status(201).json({ "id": todo.id })
                }
            })
        }
    })
})

app.put("/todos/:id", (req, res) => {
    const todoId = req.params.id;
    const updatedTodo = req.body;
    fs.readFile("./todos.json", "utf-8", (err, data) => {
        let hasTodo = false;
        if (err) {
            console.log("Error Occures : ", err.message)
            return res.sendStatus(500).end()
        } else {
            const todos = JSON.parse(data);
            todos.forEach((todo, index) => {
                if (todo.id === todoId) {
                    hasTodo = true;
                    todos[index] = { ...todo, ...updatedTodo }
                    console.log(todo);
                    fs.writeFile("./todos.json", JSON.stringify(todos), (err, data) => {
                        if (err) {
                            console.log("Error Occures : ", err.message)
                            return res.sendStatus(500).end();
                        } else {
                            return res.sendStatus(200).end();
                        }
                    })
                }
            })
            if (!hasTodo) {
                return res.sendStatus(404);
            }
        }
    })
})

app.delete("/todos/:id", (req, res) => {
    const todoId = req.params.id;
    fs.readFile("./todos.json", "utf-8", (err, data) => {
        if (err) {
            console.log("Error Occured : ", err.message)
            return res.sendStatus(500).end();
        } else {
            const todos = JSON.parse(data);
            const newTodos = todos.filter(todo => todo.id !== todoId);
            if (todos.length === newTodos.length) {
                return res.sendStatus(404).end();
            } else {
                fs.writeFile("./todos.json", JSON.stringify(newTodos), (err, data) => {
                    if (err) {
                        console.log("Error Occured : ", err.message)
                        return res.sendStatus(500).end();
                    } else {
                        return res.sendStatus(200).end();
                    }
                })
            }
        }
    })
})

app.all("*", (req, res) => {
    return res.sendStatus(404).end()
})

