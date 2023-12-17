const path = require('node:path');
const express = require('express');

const app = express();
const rootDir = require('./util/root');

const mainRoute = require('./routes/main-route');
const usersRoute = require('./routes/users');

app.use(express.static(path.join(rootDir, 'public'))); // chỉ định folder static

app.use(mainRoute);
app.use(usersRoute);

app.use((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));
})

app.listen(3000);