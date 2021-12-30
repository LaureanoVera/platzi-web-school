const elements = [1,2,3,4,5]
const moreElements = [6,7,8,9,10]

// const newArray = elements
const newArray = [...elements]
for (let i = 0; i < moreElements.length; i++) {
  const element = moreElements[i];
  newArray.push(element)
}
console.log(newArray);

console.group('Concat:')
const concat = elements.concat(moreElements)
console.log(concat);
console.groupEnd('Concat:')

console.group('Spread:')
const spread = [...elements, ...moreElements]
const spread2 = [...elements, ...'siete']
console.log(spread);
console.log(spread2);
console.groupEnd('Spread:')