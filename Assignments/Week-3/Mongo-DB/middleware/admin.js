const {Admin} = require("../db/index");

async function adminMiddleware(req, res, next) {
    const {username,password} = req.headers;
    const user = await Admin.findOne({username});
    if(!user){
        return res.status(403).json({"msg" : "Admin does't exist"});
    }
    next();
}

module.exports = adminMiddleware;