const fs = require('fs');
const data = fs.readFileSync('./input.txt', { encoding: 'utf8', flag: 'r' });
const data2 = fs.readFileSync('./input2.txt', { encoding: 'utf8', flag: 'r' });
const data3 = fs.readFileSync('./input3.txt', { encoding: 'utf8', flag: 'r' });
module.exports = { data, data2, data3 };