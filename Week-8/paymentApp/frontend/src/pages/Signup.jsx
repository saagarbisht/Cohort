import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import FormContainer from '../components/FormContainer'
import Heading from '../components/Heading'
import Input from "../components/Input"
import Button from '../components/Button'
import Bottom from '../components/Bottom'
import axios from "axios"
export default function Signup() {
    return (
        <>
            <FormContainer>
                <Heading formHeading={"Sign up"} formSubHeading={"Enter your infromation to create an account"}/>
                <SignupInputs />
                <Bottom text={"Already have an account ?"} lable={"Sign in"} to={"/signin"}/>
            </FormContainer>
        </>
    )
}

function SignupInputs(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    async function sendData(){
        const payload = {
            firstName,
            lastName,
            email,
            password
        }
        try {
            const responce = await axios.post("http://localhost:3000/api/v1/user/signup", payload)
            const token = await responce.data.token
            localStorage.setItem("token", token);
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className='mt-6 flex flex-col gap-2'>
                    <Input 
                    id={"firstName"} 
                    label={"First Name"} 
                    placeholder={"Sagar"} 
                    type={"text"} 
                    value={firstName}
                    onChangeFunction={e => setFirstName(e.target.value)}/>

                    <Input 
                    id={"lastname"} 
                    label={"Last Name"} 
                    placeholder={"Bisht"} 
                    type={"text"} 
                    value={lastName}
                    onChangeFunction={e => setLastName(e.target.value)}/>

                    <Input 
                    id={"email"} 
                    label={"Email"} 
                    placeholder={"xyz@expamle.com"} 
                    type={"email"} 
                    value={email}
                    onChangeFunction={e => setEmail(e.target.value)}/>

                    <Input 
                    id={"password"} 
                    label={"Password"} 
                    placeholder={"abc123"} 
                    type={"password"} 
                    value={password}
                    onChangeFunction={e => setPassword(e.target.value)}/>

            </div>
            <div className='mt-4'>
                    <Button name={"Sign up"} onClickFunction={sendData}/>
            </div>
        </>
    )
}