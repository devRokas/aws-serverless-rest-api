const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => res.json({ message: 'GET request! 👀' }));

app.post('/', (req, res) => {
    res.json({ message: 'POST request! ✅' });
});

app.put('/', (req, res) => {
    res.json({ message: 'PUT request! 🔄' });
});

app.delete('/', (req, res) => {
    res.json({ message: 'DELETE request! ❌' });
});

module.exports.handler = serverless(app);