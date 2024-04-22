const {Balance} = require("../models/user");
const {default:mongoose} = require("mongoose")

async function getCurrentBalance(req,res){
    const userId = req.userId;
    const userBalance = await Balance.findOne({userId})
    return res.json({balance : userBalance.balance, user : req.user})
}

async function transferMoney(req,res){
    const session = await mongoose.startSession();
    session.startTransaction();
    const {to,amount} = req.body;
    const userId = req.userId
    const account = await Balance.findOne({userId}).session(session);

    if(!account || account.balance < amount){
        await session.abortTransaction();
        return res.json({"message" : "Insufficient balance"})
    }

    const toAccount = await Balance.findOne({userId : to }).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.json({"msg" : "invalid user"})
    }

    await Balance.updateOne({userId},{$inc : {balance : -amount}}).session(session)
    await Balance.updateOne({userId : to},{$inc : {balance : amount}}).session(session)

    await session.commitTransaction();
    session.endSession();
    return res.json({"msg" : "transiction completed"})
}   

module.exports = {
    getCurrentBalance,
    transferMoney
}