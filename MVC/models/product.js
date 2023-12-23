const fs = require('node:fs');
const path = require('node:path');
const rootNode = require('../util/root-node');

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        const p = path.join(rootNode, 'data', 'products.json');
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback) {
        const p = path.join(rootNode, 'data', 'products.json');
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                callback([]);
            }
            callback(JSON.parse(fileContent));
        });
    }
}