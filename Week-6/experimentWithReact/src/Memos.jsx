import {memo,useState } from "react";

function Memos(){
    const [value,setValue] = useState("Sagar Bisht")
    function updateName(){
        setValue(Math.random());
    }
    return (
        <div>
            <button onClick={updateName}>Click here to change the name</button>
            <Header title={value}/>
            <Header title={"Naina Bisht"}/>
            <Header title={"Bisht Naina"}/>
            <Header title={"Naina D. Bisht"}/>
            <Header title={"Bisht D. Naina"}/>
        </div>
    )
}

const Header = memo(function({title}){
    return (
        <h1>
            My Name is {title}
        </h1>
    )
})

export  default Memos