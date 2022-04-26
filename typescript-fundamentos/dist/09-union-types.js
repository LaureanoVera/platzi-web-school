"use strict";
(() => {
    let dinamicVar;
    dinamicVar = 0;
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
    greeting('Lau');
})();
