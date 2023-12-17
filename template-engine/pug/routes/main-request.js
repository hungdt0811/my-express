const path = require('node:path');
const express = require('express');

const rootNode = require('../util/root-node');

const router = express.Router();
const data = require('./post-res').products;    // lay du lieu duoc chia se

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootNode, 'views', 'home.html'));
})

router.get('/product', (req, res, next) => {
    res.render('product', {data: data, title: 'Products page'});
})

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootNode, 'views', 'add-product.html'));
})

module.exports = router;

