const express = require('express');
const app = express();
const importData = require('./data.json')

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/teams', (req, res) => {
    res.send(importData);
})

app.listen(port, () => {
    console.log(`Listening at port http://localhost:${port}`)
})