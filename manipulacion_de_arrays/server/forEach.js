const letters = ['a', 'b', 'c', 'd']

console.group('for')
for (let i = 0; i < letters.length; i++) {
  const element = letters[i];
  console.log(element);
}
console.groupEnd('for')

console.group('forEach')
letters.forEach(item => console.log(item))
console.groupEnd('forEach')