const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.get("/",(req,res) => {
    return res.send("Home Page is Loaded")
})
app.get("/about",(req,res) => {
    return res.send("About Page is Loaded")
})
app.post("/form",(req,res) => {
    const {name,email} = req.body;
    return res.json({"Name" : name, "Email" : email})
})

app.listen(PORT,() => console.log(`App is Live at port : ${PORT}`))