const pets = ['cat', 'dog', 'bat']

let includeInArray = false
for (let i = 0; i < pets.length; i++) {
  const element = pets[i];
  if (element === 'dog') {
    includeInArray = true
    break;
  }
}
console.log(includeInArray);

console.group('Include:')
console.time(('Include'))
const include = pets.includes('dog')
console.log(include);
console.timeEnd(('Include'))
console.groupEnd('Include:')