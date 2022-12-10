const { data } = require('./modules.js');

let tempArr: number[] | never = [];
let arrayOfElvesCals: number[][] = [];
let elves: { number: number; calories: number }[] = [];

const numbers = data.split('\n');

numbers.map((nr: string) => {
  const n = parseInt(nr);
  if (!Number.isNaN(n)) {
    tempArr.push(n);
  } else {
    arrayOfElvesCals.push(tempArr);
    tempArr = [];
  }
});

arrayOfElvesCals.map((data, index = 1) => {
  const calories = data.reduce((acc, curr) => {
    acc += curr;
    return acc;
  });
  elves.push({
    number: index + 1,
    calories: calories,
  });
});
let elfWithHighestCalories = elves.reduce((a, s) =>
  a.calories > s.calories ? a : s
);

console.table(elfWithHighestCalories);

export {};
