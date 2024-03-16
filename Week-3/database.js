const express = require ("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const key = "HuihadDSDA986786&^^*(";

mongoose.connect("mongodb+srv://sgrcoc3:E6IK7xtnHaQu1ks9@cohort.chfje2r.mongodb.net/user_app")
.then(() => console.log("mongodb connected... "))
.catch(() => console.log("unable to connect..."));

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String,
    },
    username : {
        type : String,
    }
});

const USERS = mongoose.model("user",userSchema);

const app = express();

app.use(express.json());

app.post("/signup",async (req,res) => {
    try {
        const {email,password,username} = req.body;
        if(!email || !password || !username){
            return res.send("enter data body")
        }
        await USERS.create({
            email,
            password,
            username
        })
        const payload = {
            email,
            username
        }
        const token = jwt.sign(payload,key);
        return res.send(`User created. Token : ${token}`)
    } catch (error) {
        if(error.code === 11000){
            return res.send("this email is already in use")
        }
        }
})

app.get("/users",async(req,res) => {
    const auth = req.headers.auth;
    if(!auth){
        return res.send("dno token send try again")
    }
    const user = jwt.verify(auth,key);
    if(!user){
        return res.send("create a user id first")
    }
    const users = await USERS.find({});
    return res.json({"users" : users.filter(all => all.email !== user.email)})
})

app.listen(3000,() => console.log("server is live at port 3000..."))