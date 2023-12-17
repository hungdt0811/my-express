const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('1st Middleware');
    next();
})
app.use('/users', (req, res, next) => {
    res.send(`<h1>Users page</h1>`);
})
app.use('/', (req, res, next) => {
    res.send(`<h1>Home page</h1>`);
})

app.listen(3000);