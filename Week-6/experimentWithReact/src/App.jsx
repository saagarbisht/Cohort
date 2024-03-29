import { useState } from 'react';
import './App.css'
import {Header} from "./components/Header";
function App() {

  return (
      <div>
        <HeaderWithButton />
        <Header title={"Manas Singh Rana"}/>
        <Header title={"Harshit Saxena"}/>
        <Header title={"Roronoa Zoro"}/>
        <Header title={"Vinsmoke Sanji"}/>
      </div>

  )
}

function HeaderWithButton(){
  const [value,setValue] = useState("Sagar Bisht")
  function changeTitle(){
    const newNum = Math.random();
    setValue(newNum);
  }
  return (
    <>
        <button onClick={changeTitle}>Click me to change the title</button>
        <Header title={value}/>
    </>
  )
}
export default App
