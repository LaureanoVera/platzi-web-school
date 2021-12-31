var a = "Hello";

function hello() {
  let b = "Hello World";
  const c = "Hello World!";
  if (true) {
    let d = "Hello World!!";
    debugger;
  }
}
hello();

const moneyBoxC = (coins) => {
  debugger;
  var saveCoins = 0;
  const countCoins = (coins) => {
    debugger;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  };
  return countCoins;
};

let myMoneyBox = moneyBoxC();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(5);
