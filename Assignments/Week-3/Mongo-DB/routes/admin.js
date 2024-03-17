const { Router } = require("express");
const {Admin, Course} = require("../db/index")
const adminMiddleware = require("../middleware/admin");
const router = Router();

router.post('/signup',async (req, res) => {
    const {username,password} = req.body;
    try {
        await Admin.create({
            username,
            password
        })
        return res.status(200).json({"msg" : "Admin created successfully"})
    } catch (error) {
        return res.status(500).json({"mgs" : "due to server error admin is not created"})
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    const  {title,description,imageLink,price} = req.body;
    try {
        const course = await Course.create({
            title,
            description,
            imageLink,
            price
        })
        return res.status(200).json({"msg" : "Course created successfully", "course id" : course._id})
    } catch (error) {
        return res.status(500).json({"mgs" : "due to server error course is not created"})
    }
});

router.get('/courses', adminMiddleware, async(req, res) => {
    const courses = await Course.find({});
    return res.status(200).json({courses});
});

module.exports = router;