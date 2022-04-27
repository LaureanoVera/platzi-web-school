"use strict";
(() => {
    function greeting(myText) {
        if (typeof myText === 'string') {
            console.log(`string ${myText.toLocaleLowerCase}`);
        }
        else {
            // if it's not text it's number
            // because it only accepts two types
            myText.toFixed(0);
            myText > 18 ? console.log('bip') : console.log('denied');
        }
    }
    // literal types
    let shirtSize;
    shirtSize = 'S';
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';
})();
