"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
product_service_1.addProduct({ title: 'product', createAt: new Date(), stock: 15 });
let product7 = {
    title: 'product3',
    createAt: new Date(),
    stock: 1,
    size: 'M',
};
product_service_1.addProduct(product7);
console.log(product_service_1.products);
console.log(product_service_1.calcStock());
