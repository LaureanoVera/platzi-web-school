"use strict";
(() => {
    const calcTotal = (prices) => {
        let total = 0;
        prices.forEach((item) => (total += item));
        return total.toString();
    };
    const printTotal = () => {
        const rta = calcTotal([1, 5, 2, 7, 9]);
        console.log(`Final price: ${rta}`);
    };
    printTotal();
})();
