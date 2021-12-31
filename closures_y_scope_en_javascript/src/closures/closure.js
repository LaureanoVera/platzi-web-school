const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
};
moneyBox(5);
moneyBox(10);

// CLOSURE STRUCTURE
console.group("Closure:");
const moneyBoxC = (coins) => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  };
  return countCoins;
};

let myMoneyBox = moneyBoxC();
myMoneyBox(4); //4
myMoneyBox(6); //10
myMoneyBox(5); //15
console.groupEnd("Closure:");
