const {User,Balance} = require("../models/user");
const {signupSchema,signinSchema} = require("../authentication/user");
const jwt = require("jsonwebtoken");
const {JWT_KEY} = require("../config")

async function signup (req,res){
    const userInfo = req.body;
    if(!userInfo){
        return res.json({"msg" : "enter valid input"})
    }else{
        const verifyData = signupSchema.safeParse(userInfo);
        const randomBalance = () => {
            return Math.floor(Math.random() * 100000) + 10000
        }
        if(!verifyData.success){
            return res.json({"msg" : "invalid input data"})
        }else{
            const newUserEntry  = await User.create({
                firstName : verifyData.data.firstName,
                lastName : verifyData.data.lastName,
                email : verifyData.data.email,
                password : verifyData.data.password,
            })
            const userId = newUserEntry._id
            await Balance.create({
                userId,
                balance : randomBalance(),
            })
            const token = jwt.sign({userId},JWT_KEY)
            return res.json({token})
        }
    }
}

async function signin (req,res){
    const userInfo = req.body;
    if(!userInfo){
        return res.json({"msg" : "enter valid input detail"})
    }else{
        const verifyData = signinSchema.safeParse(userInfo);
        if(!verifyData.success){
            return res.json({"msg" : "invalid input"})
        }else{
            const user = await User.findOne({email : verifyData.data.email,password : verifyData.data.password}) 
            if(!user){
                return res.json({"msg" : "please signup first"})
            }else{
                return res.json({"userInfo":user})
            }
        }
    }
}

async function updateProfile(req,res){
    const userInfo = req.body
    await User.findOneAndUpdate({_id : req.userId},userInfo)
    return res.json({"msg":"update Success"})
}

module.exports = {
    signin,
    signup,
    updateProfile
}