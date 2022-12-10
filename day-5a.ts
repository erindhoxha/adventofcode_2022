const { data5, stacks } = require('./modules.js');
const entries = data5.split('\n');
const rows = stacks.split('\n');

const columns: Record<string, string[]> = {
  '1': [],
  '2': [],
  '3': [],
  '4': [],
  '5': [],
  '6': [],
  '7': [],
  '8': [],
  '9': [],
};

const getStringIndexForColumn = (column: number): number => {
  // 1, 5, 9, 13, 17, 21, 25, 29, 33
  return column * 4 - 3;
};

for (const row of rows) {
  console.log(row);
  for (let i = 1; i < 10; i++) {
    const stringIndex = getStringIndexForColumn(i);
    if (row[stringIndex] !== ' ') {
      columns[i].unshift(row[stringIndex]);
    }
  }
}

console.log(columns);
