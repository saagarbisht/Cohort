const express = require("express");
const app  = express();

app.get("/", (req,res) => {
    const num1 = req.query.num1
    const num2 = req.query.num2
    return res.status(200).json({"result" : Number(num1) + Number(num2)});
})

app.listen(3000);