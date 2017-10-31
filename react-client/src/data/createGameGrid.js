const diceData = require('./diceData');

let chooseOneSideOfDice = (dice) => {
  let randIdx = Math.floor(Math.random() * 6);
  return dice[randIdx];
};

function createGameGrid() {
  let gameGrid = [];
  let tempArr = [];
  let count = 0;

  diceData.forEach((dice) => {
    let char = chooseOneSideOfDice(dice);

    if (char === 'q') tempArr.push({ char: 'Qu', canSelect: true, isSelected: false });
    else tempArr.push({ char: char.toUpperCase(), canSelect: true, isSelected: false });

    count++;

    if (count === 5) {
      gameGrid.push(tempArr);
      count = 0;
      tempArr = [];
    }
  });

  return gameGrid;
}

module.exports = createGameGrid();
