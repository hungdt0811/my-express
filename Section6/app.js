const path = require('node:path');
const express = require('express');

const rootNode = require('./util/root-node');

const mainRq = require('./routes/main-request');
const postRes = require('./routes/post-res');

const app = express(); // Khoi tao may chu

app.use(express.urlencoded({ extended: false }));       // phan tich du lieu tu form
app.use(express.static(path.join(rootNode, 'public'))); // add static folder

app.use(postRes.router);
app.use(mainRq);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootNode, 'views', '404.html'))
})
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
})