const express = require('express');

const productsController = require('../controllers/produtcs');
const router = express.Router();

router.post('/shop', productsController.postAddProduct);


module.exports = router;