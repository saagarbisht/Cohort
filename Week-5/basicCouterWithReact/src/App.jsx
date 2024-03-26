import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <CustomeButton count = {count} setCount = {setCount}/>
    </>
  )
}

function CustomeButton(props){
  function updateCount(){
    props.setCount(props.count + 1)
  }
  return <button onClick={updateCount}>Counter : {props.count}</button>
}

export default App
