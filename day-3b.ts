const { data3 } = require('./modules.js');
const { alphabetPosition } = require('./global.js');
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const entries = data3.split('\n');
const perChunk = 3;

let points = 0;

const result = entries.reduce(
  (resultArray: any[], item: string, index: number): string[] => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);

    return resultArray;
  },
  []
);

console.log(result);

result.map((entry: string) => {
  let arr1 = entry[0].split('');
  let arr2 = entry[1].split('');
  let arr3 = entry[2].split('');

  arr1.some((r) => {
    if (arr2.includes(r) && arr3.includes(r)) {
      points += alphabetPosition(r);
      return true;
    }
  });
});

console.table({ Points: points });
export {};
