import { useState } from 'react';
import './App.css'
import { BusinessCard } from './components/BusinessCard'
function App() {
  const [card,setCard] = useState([]);

  fetch("http://localhost:3000/cards")
  .then(data => data.json())
  .then(data => setCard(data.card));

  return (
    <>
      <BusinessCard userData={card}/>
    </>
  )
}

export default App
