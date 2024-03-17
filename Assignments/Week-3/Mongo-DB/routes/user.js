const { Router } = require("express");
const { User, Course } = require("../db/index");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async(req, res) => {
    const {username,password} = req.body;
    const user = await User.create({
        username,
        password
    })
    return res.status(200).json({"msg" : "user created successfully"});

});

router.get('/courses', async(req, res) => {
    const courses = await Course.find({});
    return res.status(200).json({courses});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const {username} = req.headers;
    const {courseId} = req.params;
    try {
        await User.updateOne({username},{
            "$push" : {
                purchsedCourse : courseId
            }
        })
        return res.status(200).json({"msg" : "purchase complete"})
    } catch (error) {
        return res.status(500).json({"msg" : "server error occured unable to purchase"})
    }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    const { username} = req.headers;
    const user = await User.findOne({username});
    const courses = await Course.find({_id : {
        "$in" : user.purchsedCourse
    }})
    return res.status(200).json({courses})
});

module.exports = router