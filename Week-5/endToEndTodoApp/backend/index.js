const express = require("express");
const cors = require("cors")
const app = express();

const {createTodo,updateTodo} = require("./type");
const {Todo} = require("./db");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended : false}));


app.post("/todo",async(req,res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        return res.status(411).json({"msg" : "invalid input"})
    }
    const newTodo = await Todo.create({
        title : createPayload.title,
        description : createPayload.description,
    })
    return res.json({"new todo id " : newTodo._id});
})

app.get("/todos",async (req,res) => {
    const allTodos = await Todo.find({});
    return res.json({"todos": allTodos});
})

app.put("/completed",async (req,res) => {
    const createPayload = req.body;
    const parsePayload = updateTodo.safeParse(createPayload);
    if(!parsePayload.success){
        return res.status(411).json({"msg" : "invalid input"})
    }
    const todo = await Todo.findOneAndUpdate({_id : createPayload.id},{completed : true});
    return res.json({"msg" : "Todo is marked as Completed"})
})

app.use((err,req,res,next) => {
    res.send("File not found")
})

app.listen(3000);