const { data4 } = require('./modules.js');
const entries = data4.split('\n');

let points = 0;

entries.map((entry: string, index: number) => {
  var entryArr = entry.split(',');

  let elf1Start = parseInt(entryArr[0].split('-')[0]);
  let elf1Finish = parseInt(entryArr[0].split('-')[1]);
  let elf2Start = parseInt(entryArr[1].split('-')[0]);
  let elf2Finish = parseInt(entryArr[1].split('-')[1]);

  if (elf1Start <= elf2Start && elf1Finish >= elf2Start) {
    points++;
  } else if (elf2Start <= elf1Start && elf2Finish >= elf1Start) {
    points++;
  }
});

console.table({ Points: points });

export {};
