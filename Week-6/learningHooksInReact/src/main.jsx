import React from 'react'
import ReactDOM from 'react-dom/client'
import UseStateHook from './components/UseStateHook'
import UseEffectHook from './components/UseEffectHook'
import UseMemoHook from './components/UseMemoHook'
import UseCallbackHooks from './components/UseCallbackHook'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <UseStateHook />
  <UseEffectHook />
  <UseMemoHook />
  <UseCallbackHooks />
  </>
)
