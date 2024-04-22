const {User} = require("../models/user")

const jwt = require("jsonwebtoken");
const {JWT_KEY} = require("../config")

async function authentication(req,res,next){
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.json({})
    }
    const token = authHeader.split(" ")[1];
    try {
        const verifyToken = jwt.verify(token,JWT_KEY);
        req.userId = verifyToken.userId;
        const user = await User.findOne({_id : verifyToken.userId})
        req.user = user
        next();
    } catch (error) {
        console.log(error)
        return res.json({})
    }
}
module.exports = {
    authentication,
}