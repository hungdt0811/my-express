const path = require('node:path');
const express = require('express');

const router = express.Router();

const products = [];    // tao array luu du lieu

router.post('/product', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/product');  // dieu huong ve trang chu
})

exports.router = router;
exports.products = products;    // xuat mang de module khac co the su dung

