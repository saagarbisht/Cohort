const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
];

app.use(express.json());

function userExists(username, password) {
    return ALL_USERS.find(
        (user) => user.username === username && user.password === password
    );
}

app.post("/signin", function (req, res) {
    if (!req.body) return res.sendStatus(400).end();
    const { username, password } = req.body;
    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }
    const payload = {
        username: username,
    };
    const token = jwt.sign(payload, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        const usersArr = ALL_USERS.filter((user) => user.username !== username);
        return res.status(200).json({ users: usersArr });
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000);
