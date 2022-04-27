"use strict";
(() => {
    function createProductToJson(title, createAt, stock, size) {
        return {
            title,
            createAt,
            stock,
            size,
        };
    }
    let size1 = 'M';
    const product1 = createProductToJson('p1', new Date(), 4, size1);
    const createProductToJsonV2 = (title, createAt, stock, size // ? = optional
    ) => {
        return {
            title,
            createAt,
            stock,
            size,
        };
    };
    let size2 = 'L';
    const product2 = createProductToJsonV2('p2', new Date(), 1);
})();
