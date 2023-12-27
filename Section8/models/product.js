const path = require('node:path');
const fs = require('node:fs');
const rootNode = require('../util/root-node');

const linkData = path.join(rootNode, 'data', 'product-list.json');
let products = [];

module.exports = class Product {
    constructor(name, imageUrl, description , price) { 
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        fs.readFile(linkData, (err, fileContent) => {
            products = [];
            if(!err) {
                products = JSON.parse(fileContent);
            }
            else {
                products = [];
            }
            products.push(this);
            fs.writeFile(linkData, JSON.stringify(products), (err) => {
                console.log('Có lỗi khi ghi file');
                console.log(err);
            })
        })
        console.log('test');
    }

    static fetchAll(cb) {
        fs.readFile(linkData, (err, fileContent) => {
            if (!err) {
                products = JSON.parse(fileContent);
                cb(products);
            }
            else {
                console.log('Có lỗi khi đọc file');
                console.log(err);
                cb([]);
            }
        })
    }
}