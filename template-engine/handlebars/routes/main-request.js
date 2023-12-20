const path = require('node:path');
const express = require('express');

const router = express.Router();
const data = require('./post-res').products;    // lay du lieu duoc chia se

router.get('/', (req, res, next) => {
    // res.sendFile(path.join(rootNode, 'views', 'home.html'));
    res.render('home', {
        title: "Trang chủ", 
        activeHome: true
    });
})

router.get('/product', (req, res, next) => {
    let newData = data.map((product,i) => {
        return {
            title: product.title,
            index: i + 1
        }
    })
    res.render('product', {
        data: newData, 
        title: 'Products page', 
        activeProduct: true, 
        hasProduct: newData.length > 0 
    });
})

router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootNode, 'views', 'add-product.html'));
    res.render('add-product', {
        title: "Thêm sản phẩm", 
        activeAddProduct: true
    });
})

module.exports = router;



