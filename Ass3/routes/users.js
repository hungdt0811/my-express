const path = require('node:path');
const express = require('express');

const rootDir = require('../util/root');

const router = express.Router();

router.get('/users', (req, res, next) => {
    console.log(rootDir)
    res.sendFile(path.join(rootDir, 'views', 'users.html'));
})

module.exports = router;