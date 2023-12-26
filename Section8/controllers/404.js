const path = require('node:path');
const rootNode = require('../util/root-node');

module.exports = (req, res, next) => {
    res.render(path.join(rootNode, 'views', '404'), {
        title: 'Không tìm thấy trang',
        path: '',
    });
}