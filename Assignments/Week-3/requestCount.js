const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let requestCount = 0;

function checkRequest(req, res, next){
    requestCount++;
    next();
};

app.get('/user', checkRequest, function (req, res) {
    res.status(200).json({ name: 'john' });
});

app.post('/user', checkRequest, function (req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', checkRequest, function (req, res) {
    res.status(200).json({ requestCount });
});

app.listen(3000);
