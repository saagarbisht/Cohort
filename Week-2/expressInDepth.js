const express = require("express");
const app = express();
const PORT = 9000;

const user = [
    {
        user : "Ironman",
        kidneys : [
            {
                healthy : false
            },{
                healthy : true
            }
        ]
    }
]

app.use(express.json());

app.get("/",(req,res) => {
    const userKidney = user[0].kidneys;
    const numberOfKidney = userKidney.length;
    let healthyKidney = 0;
    userKidney.forEach(kidney => {
        if(kidney.healthy){
            healthyKidney++
        }
    })
    let unHealthyKidney = numberOfKidney - healthyKidney;
    return res.json({"Total Kidneys":numberOfKidney,"Healthy Kidney" : healthyKidney,"Unhealthy Kidney" : unHealthyKidney})
})
app.post("/",(req,res) => {
    if(req.body){
        const newKidneyStatus = req.body.healthy;
        user[0].kidneys.push({ "healthy" : newKidneyStatus })
    }
    return res.redirect("/");
})
app.put("/",(req,res) => {
    const changes = req.body.change;
    user[0].kidneys.forEach(kidney => {
        kidney.healthy = changes
    })
    return res.redirect("/");   
})
app.delete("/",(req,res) => {
    let unhealthyKidney = false;
    user[0].kidneys.forEach(kidney => {
        if(!kidney.healthy){
            unhealthyKidney = true   
        }
    })
    if(unhealthyKidney){
        user[0].kidneys  = user[0].kidneys.filter(kidney => kidney.healthy)
        return res.redirect("/");
    }else{
        return res.status(411).json({"msg":"you have no unhealthy kidneys"})
    }
})
app.listen(PORT);