import React, { useEffect, useState } from 'react'
import "./App.css"

export default function App() {
    const [user,setUser] = useState({});
    const [input, setInput] = useState("saagarbisht")
    useEffect(() => {
        fetch(`https://api.github.com/users/${input}`)
        .then(user => user.json())
        .then(data => setUser(data))
        .catch(() => setUser({err : "no data / check url"}))
    },[input])
    return (
        <>
            <input type="text" placeholder='enter username' onChange={(e) => setInput(e.target.value)}/>
            <Card user={user}/>
        </>
    )
}

function Card({user}){
    return (
        <>
            <div className="container">
                {user.err ? user.err : <div className="card">
                    <h1>{user.name}</h1>
                    <div className="profile">
                        <img src={user.avatar_url} alt={user.name} />
                    </div>
                </div>}
            </div>
        </>
    )
}


