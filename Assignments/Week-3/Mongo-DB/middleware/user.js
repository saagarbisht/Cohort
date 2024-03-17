const { User } = require("../db/index");

async function userMiddleware(req, res, next) {
    const {username,password} = req.headers;
    const user = await User.findOne({
            username,
            password
        })
    if(!user){
    return res.status(403).json({"msg" : "no such user found"})
    }
    next();
}

module.exports = userMiddleware;