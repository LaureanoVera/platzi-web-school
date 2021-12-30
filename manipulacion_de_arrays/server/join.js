const elements = ['fire', 'air', 'water']

let final = ''
const separator = '--'
for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  final = final + element + separator
}
console.log(final);

console.group('Join:')
const join = elements.join('--')
console.log(join);
console.groupEnd('Join:')

console.group('Split:')
const title = 'Manipulacion de Arrays'
const split = title.split(' ')
console.log(split);
const joinSplit = split.join('-').toLowerCase()
console.log(joinSplit);
console.groupEnd('Split:')