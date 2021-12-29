const numbers = [1,30,25,14,5]

const every = numbers.every(item => item <= 40)
console.log(every);

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const everyChallenge = team
  .map(obj => obj.age)
  .every(age => age <= 15)
console.log(everyChallenge);