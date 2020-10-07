const express = require('express');
const timer = require('./Middlewares/timer');

const app = express();

app.use(timer);

app.get('/', (req, res) => {
    res.status(200).send('Is this the correct time?')
});

app.listen(3000);