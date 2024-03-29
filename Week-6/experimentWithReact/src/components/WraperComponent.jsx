import React from 'react'

export default function WraperComponent() {
    return (
        <>
                <UserDetail />
        </>
    )
}

function  UserDetail(){
    return( 
    <CardWrapper>
        <h1>Sagar Bisht</h1>
        <p>Hello! Everyone myself Sagar Bisht i am currently learning web development from harkirst's cohort 2</p>
    </CardWrapper>)
}

function CardWrapper({children}){
    return (
        <div style={{display : "inline-block",padding : "16px", border : "2px solid black", borderRadius : "4px"}}>
            {children}
        </div>
    )
}

