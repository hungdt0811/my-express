const path = require('node:path');
const express = require('express');
const rootDir = require('../util/root');

const router = express.Router(); // khởi tạo router

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html')); // khai báo đổ dữ liệu html
})

module.exports = router;