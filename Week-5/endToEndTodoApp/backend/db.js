const {Schema,model,connect} = require("mongoose")

connect("mongodb+srv://sgrcoc3:E6IK7xtnHaQu1ks9@cohort.chfje2r.mongodb.net/Todo_Collection")
.then(() => console.log("mongodb connected successfully..."))
.catch(() => console.log("unable to connect mongodb..."))

const todoSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String, 
        required : true
    },
    completed : {
        type : Boolean,
        default : false,
        require : true
    }
})

const Todo = model("todos",todoSchema);

module.exports = {Todo}