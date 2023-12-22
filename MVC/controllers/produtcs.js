const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        title: 'Add product page', 
        path: '/add-product'
    });
}

exports.getShop = (req, res, next) => {
    res.render('shop', {
        title: 'Shop page', 
        path: '/shop',
        products: products
    });
    
}

exports.postAddProduct = (req, res, next) => {
    products.push({product_name: req.body.title})
    res.redirect('/shop');
}

