const path = require('node:path');
const express = require('express');
const rootNode = require('../util/root-node');

const router = express.Router();

// controllers
const get404 = require('../controllers/404');

router.get('/', (req, res, next) => {
    res.render(path.join(rootNode, 'views', 'home'), {
        title: 'Trang chủ',
        path: '/',
    });
});

router.use('', get404);

module.exports = router;
