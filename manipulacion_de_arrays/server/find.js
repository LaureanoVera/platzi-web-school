const { nextSunday } = require("date-fns");

const numbers = [1,30,49,29,10,13]

console.group('For')
console.time('For')
let rta = undefined
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element === 30) {
    rta = element
    break
  }
}
console.log(rta);
console.timeEnd('For')
console.groupEnd('For')

console.group('Find')
console.time('Find')
const find = numbers.find(item => item >= 40)
console.log(find);
console.timeEnd('Find')
console.groupEnd('Find')

console.group('FindIndex')
console.time('FindIndex')
const findIndex = numbers.findIndex(item => item === 10)
console.log(numbers[findIndex]);
console.timeEnd('FindIndex')
console.groupEnd('FindIndex')