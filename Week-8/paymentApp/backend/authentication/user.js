const zod = require("zod");

const signupSchema = zod.object({
    firstName : zod.string(),
    lastName : zod.string(),
    email : zod.string().email(),
    password : zod.string(),
})

const signinSchema = zod.object({
    email  : zod.string().email(),
    password : zod.string(),
})

module.exports = {
    signupSchema,
    signinSchema
}