"use strict";
(() => {
    let myNull = null;
    let myUndefined = undefined;
    let myNumber = null;
    myNumber = 19;
    let myString = undefined;
    myString = 'Laureano Vera';
    function hi(name) {
        let hello = 'Hello';
        if (name) {
            hello = `${hello} ${name}!`;
        }
        else {
            hello = `${hello} nobody!`;
        }
        console.log(hello);
    }
    function hiV2(name) {
        let hello = 'Hello';
        hello += (name === null || name === void 0 ? void 0 : name.toLowerCase()) || 'nobody';
    }
    hi('Ivan');
    hi(null);
})();
