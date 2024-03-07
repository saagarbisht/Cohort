// async function
function printNaturalNumberUptoN(n){
    let sumOfNaturalNumber = 0;
    for(let i = 0 ; i <= n; i++){
        sumOfNaturalNumber += i; 
    }
    console.log("Sum of Natural number is Starting from ",1," to ",n," is ",sumOfNaturalNumber);
}

console.log("------Synchronous Function calling-------")
console.log("Hello World!")
printNaturalNumberUptoN(90)
console.log("Function is completed")

console.log("\n\n")

console.log("------Asynchronous Function calling-------")
console.log("Hello World!")
setTimeout(() => printNaturalNumberUptoN(90), 100)
console.log("Function is completed")


const { rejects } = require("node:assert");
// Another in-built asyn function
const fs = require("node:fs");
fs.readFile("../text.txt","utf-8",(err,data) => {
    if(err){
        console.log("Unable to read the file")
        return;
    }
    // console.log(data);
})

// using promise on the above situation

function readData(){
    return new Promise((resolve, reject) => {
        fs.readFile("../text.txt","utf-8",(err,data) => {
            if(err) {
                reject(err.message);
            } 
            resolve(data);
        })
    })
}

readData().then(consoleData).catch(errorOccured);

function consoleData(file){
    // console.log(file)
}

function errorOccured(error){
    console.log("A Error Occured : ",error)
}

// using async/await in the above situation
function readData2(){
    return new Promise((resolve, reject) => {
        fs.readFile("./text.txt","utf-8",(err,data) => {
            if(err) {
                reject(err.message);
            } 
            resolve(data);
        })
    })
}

async function usingAsync(){
    try {
        const data = await readData2();
        console.log(data);
    } catch (error) {
        console.log("Error Occured : ",error)
    }
}

usingAsync()