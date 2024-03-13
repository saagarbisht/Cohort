const express = require("express");
const zod = require("zod");

const app = express();

app.use(express.json());

app.use((req,res,next) => {
    if(req.headers.username && req.headers.password){
        const {username,password} = req.headers;
        if(username!=="Sagar" || password !== "sgr26"){
            res.send("Wrong Credentials")
            return
        }else{
            return next()
        }
    }else{
        res.send("Enter Email and Password")
    }
})

function kidneyCheck(){
    return (req,res,next) => {
        if(req.query.id){
            const kidneyId = Number(req.query.id);
            if(kidneyId === 1 || kidneyId === 2){
                req.kidney = kidneyId;
                return next();
            }else{
                res.send("PLease enter a valid id")
            }
        }else{
            res.send("Enter Kidney Id")
        }
    }
};

const schema = zod.array(zod.number());

app.get("/middleware",kidneyCheck(),(req,res) => {
    res.send("We are learning Middlewares"+" and you have : " + req.kidney + " kidneys")
})

app.post("/post",(req,res) => {
    const kidney = req.body.kidney;
    const responce = schema.safeParse(kidney)
    if(!responce.success){
        res.send("Enter Valid Input")
        return
    }
    const kidneyLength = kidney.length;
    res.send("Number of kidney :" + kidneyLength);
})

app.use((err,req,res,next) => {
    console.log(err)
    res.json({"mgs":"something went wrong"})
})

app.listen(3000);