const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

app.get('/user', (req, res) => {
    throw new Error("some error");
    res.status(200).json({ name: 'john' });
});

app.post('/user', (req, res) => {
    res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', (req, res) => {
    res.status(200).json({ errorCount });
});

app.use((err, req, res, next) => {
    errorCount++;
    res.status(404).json({ "error": err.message });
})

app.listen(3002);