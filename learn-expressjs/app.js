const path = require('node:path');
const express = require('express');

const rootDir = require('./util/path');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express(); 

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public'))); // add static folder

app.use(adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

app.listen(3000);
