const totals = [1,2,3,4]

let sum = 0
for (let i = 0; i < totals.length; i++) {
  const element = totals[i];
  sum += element
}
console.log(sum);

const reduce = totals.reduce((sum, item) => sum + item)
console.log(reduce);