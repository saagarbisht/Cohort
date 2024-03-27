import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import './App.css'

function App() {
  const [todos, settodos] = useState([])
  fetch("http://localhost:3000/todos")
  .then(data => data.json())
  .then(todo => settodos(todo.todos))
  return (
    <>
      <form action="">
        <CreateTodo />
      </form>
      <Todos todos={todos}/>
    </>
  )
}

export default App
