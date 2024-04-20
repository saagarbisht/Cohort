const  {Router} = require("express")
const {signin,signup,updateProfile} = require("../controllers/user")

const authRoute = Router();

authRoute.put("/update",updateProfile)
authRoute.post("/signin",signin)
authRoute.post("/signup",signup)

module.exports = authRoute;