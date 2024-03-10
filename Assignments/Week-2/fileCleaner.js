const fs = require("fs");

const filePath = "../../text2.txt"

function cleanFile(str){
    return str.split(" ").filter(str => /\S/.test(str)).join(" ")
}


fs.readFile(filePath,"utf-8",(err,data)=>{
    if(err){
        console.log("Error Occured : ",err.message)
    }else{
        fs.writeFile(filePath,cleanFile(data),(err)=>{
            if(err){
                console.log("Error Occured : ",err.message)
            }
        })
    }
})