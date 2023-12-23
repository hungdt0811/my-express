const Products = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        title: 'Add product page', 
        path: '/add-product'
    });
}

exports.getShop = (req, res, next) => {
    Products.fetchAll((products) => {
        res.render('shop', {
            title: 'Shop page', 
            path: '/shop',
            products: products
        });
    });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Products(req.body.title);
    product.save();
    res.redirect('/shop');
}

