const { data2 } = require('./modules.js');

let points = 0;

const GameRules = {
  A: 'rock' as string,
  X: 'rock' as string,

  B: 'paper' as string,
  Y: 'paper' as string,

  C: 'scissors' as string,
  Z: 'scissors' as string,

  rock: 1 as number,
  paper: 2 as number,
  scissors: 3 as number,

  lost: 0,
  draw: 3,
  win: 6,
};

export const selectWinner = (user1: string | number, user2: string) => {
  let result = 0;

  const ifVal = (a: string, b: string, w: number) => {
    user1 === a && user2 === b ? (result = w) : 0;
  };

  ifVal('A', 'Z', GameRules.lost + GameRules.scissors);
  ifVal('C', 'Y', GameRules.lost + GameRules.paper);
  ifVal('B', 'X', GameRules.lost + GameRules.rock);
  ifVal('C', 'X', GameRules.win + GameRules.rock);
  ifVal('B', 'Z', GameRules.win + GameRules.scissors);
  ifVal('A', 'Y', GameRules.win + GameRules.paper);

  ifVal('A', 'X', GameRules.draw + GameRules.rock);
  ifVal('X', 'A', GameRules.draw + GameRules.rock);
  ifVal('B', 'Y', GameRules.draw + GameRules.paper);
  ifVal('Y', 'B', GameRules.draw + GameRules.paper);
  ifVal('C', 'Z', GameRules.draw + GameRules.scissors);
  ifVal('Z', 'C', GameRules.draw + GameRules.scissors);

  return result;
};

const numbers = data2.split('\n');

numbers.map((num: string) => {
  let set = num.split(' ');
  let firstPlay = set[0];
  let secondPlay = set[1];
  points += selectWinner(firstPlay, secondPlay);
});

console.table({ Points: points });

export {};
