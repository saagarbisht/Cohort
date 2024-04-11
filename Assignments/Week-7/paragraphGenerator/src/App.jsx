import React, { useState } from 'react'
import "./App.css"

export default function App() {
  return (
    <div className='container'>
      <h1>Paragraph Generator</h1>
      <InputField />
    </div>
  )
}

function InputField(){
  const [input, setInput] = useState(0);
  const words = ["hello", "my" ,"name", "is ", "Sagar", "i","love","Programming"]

  const [para,setPara] = useState("");

  function generatePara(){
    let para = "";
    for(let i = 0; i < input; i++){
        const randomNumber = Math.floor(Math.random() * 8);
        para += words[randomNumber];
        para += " "
    }
    setPara(para);
  }

  function setInputs(e){
    setInput(Number(e.target.value));
  }

  return (
    <>
      <div className='inputField'>
        <input type="number" placeholder='Enter Number of Words' onChange={setInputs}/>
        <button onClick={generatePara}>Generate</button>
      </div>
      <GeneratedField para={para}/>
    </>
  )
}

function GeneratedField({para}){
  return (
    <>
      <div className='generatedPara'>
        {para}
      </div>
    </>
  )
}