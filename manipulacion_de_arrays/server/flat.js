const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const newArray = []
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let j = 0; j < array.length; j++) {
    const element = matriz[i][j];
    newArray.push(element)
  }
}
console.log(newArray);

console.group('Flat:')
const flat = matriz.flat()
console.log(flat);
console.groupEnd('Flat:')