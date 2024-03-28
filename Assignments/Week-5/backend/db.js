const {Schema,model,connect} = require("mongoose");

connect("mongodb+srv://sgrcoc3:E6IK7xtnHaQu1ks9@cohort.chfje2r.mongodb.net/businessCard")
.then(() => console.log("mongodb connected successfully..."))
.catch(() => console.log("unable to connect to mongodb..."))


const cardScheam = new Schema({
        name : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        intrest: [
            {
                type : String,
            }
        ],
        linkedin : {
            type : String
        },
        twitter : {
            type : String
        },
    }
)
const Card = model("user-card",cardScheam);

module.exports = {
    Card
}