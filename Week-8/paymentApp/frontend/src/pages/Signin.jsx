import React, { useState } from 'react'
import FormContainer from '../components/FormContainer'
import Heading from '../components/Heading'
import Bottom from '../components/Bottom'
import Input from '../components/Input'
import Button from '../components/Button'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

export default function Signin() {
    return (
        <>
            <FormContainer>
                <Heading formHeading={"Sign in"} formSubHeading={"Enter your credentials to access your account"}/>
                <SigninInputs />
                <Bottom text={"Don't have an account ?"} lable={"Sign up"} to={"/signup"}/>
            </FormContainer>
        </>
    )
}

function SigninInputs(){
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    async function authForSignin(){
        const payload = {
            email,
            password
        }
        const responce = await axios.post("http://localhost:3000/api/v1/user/signin",payload)
        const user = await responce.data.userInfo
        if(!user){
            console.log("Error")
            console.log(user)
        }else{
            navigate("/dashboard")
        }
    }
    return (
    <>
        <div className='mt-6'>
            <div className='flex flex-col gap-2'>
                <Input 
                id={"email"}
                inputValue={email}
                label={"Email"}
                onChangeFunction={e => setEmail(e.target.value)}
                placeholder={"xyz@example.com"}
                type={"email"}
                />

                <Input 
                id={"password"}
                inputValue={password}
                label={"Password"}
                onChangeFunction={e => setPassword(e.target.value)}
                placeholder={"abc123"}
                type={"password"}
                />
            </div>
            <div className='mt-4'>
            <Button name={"Signin"} onClickFunction={authForSignin}/>
            </div>
        </div>
    </>
    )
}