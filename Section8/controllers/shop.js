const path = require('node:path');
const rootNode = require('../util/root-node');
const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {
            title: 'Shop',
            path: '/shop',
            products: products,
        });
    });
}
exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            title: 'All products',
            path: '/products',
            products: products,
        });
    });
    
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        title: 'Your Cart',
        path: '/cart',
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        title: 'Checkout',
        path: '/checkout',
    });
}