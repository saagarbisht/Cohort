const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

app.use((req, res, next) => {
    const userId = req.headers["user-id"];
    if (!numberOfRequestsForUser[userId]) {
        numberOfRequestsForUser[userId] = 1;
        next();
    }
    if (numberOfRequestsForUser[userId] > 5) {
        return res.status(404).send("too many request");
    }
    numberOfRequestsForUser[userId]++;
    next();
});

app.get('/user', function (req, res) {
    return res.status(200).json({ name: 'john' })
});

app.post('/user', function (req, res) {
    return res.status(200).json({ msg: 'shaun' })
});

app.listen(3002);