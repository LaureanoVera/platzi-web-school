const fruits = () => {
  if (true) {
    var fruitOne = "apple";
    let fruitTwo = "banana";
    const fruitThree = "kiwi";
    // solo se muestra "fruitOne(var)" fuera del bloque
    console.log(fruitTwo);
    console.log(fruitThree);
  }
  console.log(fruitOne);
  // console.log(fruitTwo);
  // console.log(fruitThree);
};
fruits();

let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);

var y = 1;
{
  var y = 2;
  console.log(y);
}
console.log(y);

const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};
anotherFunction();
