"use strict";
(() => {
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({ title: 'product', createAt: new Date(), stock: 15 });
    let product7 = {
        title: 'product3',
        createAt: new Date(),
        stock: 1,
        size: 'M',
    };
    addProduct(product7);
})();
