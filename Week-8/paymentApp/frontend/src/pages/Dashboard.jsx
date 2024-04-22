import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Users from '../components/Users'
import Balance from '../components/Balance';
export default function Dashboard() {
    const [userName,setUsername] = useState(null);
    const [balance,setBalance] = useState(0);
    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch("http://localhost:3000/api/v1/account/balance",{
            method: "GET",
            headers : {
                "authorization" : `Bearer ${token}`,
            }
        })
        .then(data => data.json())
        .then(data => {
            setUsername(data.user.firstName)
            setBalance(data.balance)
        })
        .catch(err => console.log(err.message))
    },[balance])
    return (
        <>
            <Navbar userName={userName}/>
            <Balance balance={balance}/>
            <Users />
        </>
    )
}