const path = require('node:path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/shop', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
})

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
})

module.exports = router;