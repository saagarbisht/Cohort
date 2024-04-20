const {Router} = require("express");
const userRoute = require("./user");
const balanceRoute = require("./balance");
const route = Router();

route.use("/user",userRoute);
route.use("/account",balanceRoute);

module.exports = route;