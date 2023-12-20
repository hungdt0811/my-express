const path = require('node:path');
const express = require('express');
const { engine } = require('express-handlebars');    // import template engine handlebars

const rootNode = require('./util/root-node');

const mainRq = require('./routes/main-request');
const postRes = require('./routes/post-res');

const app = express(); // Khoi tao may chu

app.engine('.hbs', engine({ 
    defaultLayout: 'main-layout.hbs', 
    extname: '.hbs',
    partialsDir: path.join(rootNode, 'views/layouts/partials') 
})); // khai bao handlebars là một template engine
app.set('view engine', '.hbs');;  // khai bao su dung template engine handlebars
app.set('views', path.join(rootNode, 'views'));      // khai báo nơi sử dụng view cho template engine

app.use(express.urlencoded({ extended: false }));       // phan tich du lieu tu form
app.use(express.static(path.join(rootNode, 'public'))); // add static folder

app.use(postRes.router);
app.use(mainRq);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(rootNode, 'views', '404.html'));
    res.render('404', {title: "Không tìm thấy trang"});
})
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
})