const express = require("express");
const cors = require("cors");
const {connect} = require("mongoose")
const mainRouter = require("./routes/index")
const app = express();

connect('mongodb://DESKTOP-JR3MHMR:27017,DESKTOP-JR3MHMR:27018,DESKTOP-JR3MHMR:27019?replicaSet=rs')
.then(() => console.log("mongodb connected..."))
.catch(() => console.log("unable to connect..."))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}))


app.use("/api/v1/",mainRouter)

app.listen(3000);