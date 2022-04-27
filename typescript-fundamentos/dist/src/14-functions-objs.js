"use strict";
(() => {
    const login = (data) => {
        const { email, password } = data;
        console.log(email, password);
    };
    login({
        email: 'l4ur1_v3r4@hello.com',
        password: '0111-laureanovera-1001-nacimientodeunaleyenda',
    });
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({ title: 'product', createAt: new Date(), stock: 15 });
})();
