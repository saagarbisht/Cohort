const {Router} = require("express")
const {authentication} = require("../middlewares/auth")
const {getCurrentBalance,transferMoney} = require("../controllers/balance")
const route = Router();

route.get("/balance",authentication,getCurrentBalance)
route.post("/balance/transfer",authentication,transferMoney)

module.exports = route