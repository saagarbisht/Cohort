import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Memos  from './Memos.jsx'
import Key from './components/Key.jsx'
import TodosWithHook from './components/TodosWithHook.jsx'
import WraperComponent from './components/WraperComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Memos /> */}
    {/* <Key /> */}
    {/* <WraperComponent /> */}
    <TodosWithHook />
  </React.StrictMode>,
)
