const path = require('node:path');
const express = require('express');
const rootNode = require('../util/root-node');

const shopController= require('../controllers/shop');

const router = express.Router();

router.get('/shop', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
