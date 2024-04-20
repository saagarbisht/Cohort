const {Schema,model} = require("mongoose")

const userSchema = new Schema({
    firstName : {
        type : String,
        required : true,
        trim : true,
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
}) 

const balanceSchema = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})

const User = model("userInfo",userSchema);
const Balance = model("userBalance",balanceSchema)

module.exports = {
    User,
    Balance
};