const { data2 } = require('./modules.js');

let points = 0;

const UserPlay = {
  A: {
    value: 'rock',
    lose: 'scissors',
    win: 'paper',
    draw: 'rock',
  },
  B: {
    value: 'paper',
    lose: 'rock',
    win: 'scissors',
    draw: 'paper',
  },
  C: {
    value: 'scissors',
    lose: 'paper',
    win: 'rock',
    draw: 'scissors',
  },
};

const GamePoints = {
  rock: 1,
  paper: 2,
  scissors: 3,
  lost: 0,
  draw: 3,
  win: 6,
};

export const selectWinner = (user1: string, user2: string) => {
  let result = 0;

  let user1play = UserPlay[user1 as keyof typeof UserPlay];

  if (user2 === 'X') {
    return (
      GamePoints[user1play.lose as keyof typeof GamePoints] + GamePoints.lost
    );
  }

  if (user2 === 'Y') {
    return (
      GamePoints[user1play.draw as keyof typeof GamePoints] + GamePoints.draw
    );
  }

  if (user2 === 'Z') {
    return (
      GamePoints[user1play.win as keyof typeof GamePoints] + GamePoints.win
    );
  }

  return result;
};

const numbers = data2.split('\n');

numbers.map((num: string) => {
  let set = num.split(' ');
  let user1 = set[0]; // A
  let user2 = set[1]; // Y
  points += selectWinner(user1, user2);
});

console.table({ Points: points });

export {};
