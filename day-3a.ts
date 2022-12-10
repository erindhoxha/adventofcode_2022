const { data3 } = require('./modules.js');
const { alphabetPosition } = require('./global.js');
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const entries = data3.split('\n');

let points = 0;

entries.map((entry: string) => {
  let firstHalf = entry.slice(0, entry.length / 2).split('');
  let secondHalf = entry.slice(entry.length / 2, entry.length).split('');
  firstHalf.some((r) => {
    if (secondHalf.includes(r)) {
      points += alphabetPosition(r);
      return true;
    }
  });
});

console.table({ Points: points });

export {};
