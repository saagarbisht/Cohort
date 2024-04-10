import React, {useState} from 'react'
import "./App.css"
export default function App() {
  const colorArray = ["red","blue","orange","purple"];
  return (
      <>
        <BackgroundChanger  colors = {colorArray}/>
      </>
  )
}


function BackgroundChanger({colors}){
  const [color,setColor] = useState("olive")
  return (
    <>
          <div className='container' style={{backgroundColor : color}}>
          <div className='secondContainer'>
            <div className='colorPicker'>
              {colors.map(color => <Button color={color} key={color} setColor = {setColor}/>)}
            </div>    
        </div>
    </div>
    </>
  )
}


function Button({color,setColor}){
  function setBackgroundColor(){
    setColor(color)
  }
  return(
    <>
      <button className='btn' style={{backgroundColor : color}} onClick={setBackgroundColor}> {color} </button>
    </>
  )
}