const fs = require("fs");
fs.readFile("../../text.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error Occur : ",err.message)
    }else{
        console.log(data)
    }
})

const data = "Hello my self is Sagar Bisht and it's really nice to meet you, i am currently learning about backend and to be specific its about nodejs and https server" 
fs.writeFile("../../write.txt",data,(err)=>{
        if(err){
            console.log("Error Occuers : ",err.message)
        }
})