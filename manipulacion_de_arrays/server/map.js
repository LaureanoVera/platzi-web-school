const letters = ['a', 'b', 'c', 'd']
const newArray = []

letters.map(item => newArray.unshift(item))

console.log(`Original:`, letters);
console.log(`With Map:`,newArray);