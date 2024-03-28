const zod = require("zod");

const cardSchema = zod.object({
    name : zod.string(),
    description : zod.string(),
    intrest : zod.array(zod.string()),
    linkedin : zod.string(),
    twitter : zod.string(),
})

module.exports = {
    cardSchema
}