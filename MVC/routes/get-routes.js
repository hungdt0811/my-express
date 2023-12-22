const express = require('express');

const router = express.Router();

const productsController = require('../controllers/produtcs');

router.get('/', (req, res, next) => {
    res.render('home', {
        title: 'Home page', 
        path: '/'
    });   
})

router.get('/shop', productsController.getShop);

router.get('/add-product',  productsController.getAddProduct);

module.exports = router;

