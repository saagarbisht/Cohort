const express = require("express");
const cors = require("cors");

const app = express();

const {cardSchema} = require("./zod");
const {Card} = require("./db")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.post("/card",async(req,res) => {
    const createCard = req.body;
    const parseCard = cardSchema.safeParse(createCard);
    if(!parseCard.success){
        return res.json({"msg" : "invalid input"})
    }
    const newCard = await Card.create({
        name : createCard.name,
        description : createCard.description,
        intrest : createCard.intrest,
        linkedin : createCard.linkedin,
        twitter : createCard.twitter
    })
    return res.json({"id" : newCard._id})
})

app.get("/cards",async(req,res) => {
    const allCards = await Card.find({});
    return res.json({"card" : allCards})
})

app.use((err,req,res,next) => {
    return res.json({"msg" : "Route does not exist"})
})

app.listen(3000);