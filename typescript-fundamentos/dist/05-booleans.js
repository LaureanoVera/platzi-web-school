"use strict";
(() => {
    let isEnable = true;
    let isGreater = false;
    isEnable = false;
    const random = Math.random();
    console.log('random', random);
    isGreater = random > 0.19 ? false : true;
    console.log(!isGreater);
})();
