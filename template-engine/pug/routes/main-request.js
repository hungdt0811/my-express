const path = require('node:path');
const express = require('express');

const rootNode = require('../util/root-node');

const router = express.Router();
const data = require('./post-res').products;    // lay du lieu duoc chia se

router.get('/', (req, res, next) => {
    // res.sendFile(path.join(rootNode, 'views', 'home.html'));
    res.render('home', {title: "Trang chủ", path: "/"});
})

router.get('/product', (req, res, next) => {
    res.render('product', {data: data, title: 'Products page', path: "/product"});
})

router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootNode, 'views', 'add-product.html'));
    res.render('add-product', {title: "Thêm sản phẩm", path: "/add-product"});
})

module.exports = router;



