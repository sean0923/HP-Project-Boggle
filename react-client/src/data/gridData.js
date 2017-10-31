const rowData = require('./rowData');


function generateRandRowIdx(rowDataLen) {
  return Math.floor(Math.random() * rowDataLen);
}

function createGameGrid(rowColNum) {
  let rowDataLen = rowData.length;
  console.log('len', rowDataLen);
  let randRowIdx = [];
  for (let i = 0; i < rowColNum; i++) {
    randRowIdx.push(generateRandRowIdx(rowDataLen));
  }
  console.log(randRowIdx);
  let gameGridRows = [];
  for (let i = 0; i < randRowIdx.length; i++) {
    gameGridRows.push(rowData[randRowIdx[i]]);
  }

  let gameGrid = gameGridRows.map((row) => {
    return row.split('').map((char) => {
      if (char === 'q') return { char: 'Qu', canSelect: true };
      return { char: char.toUpperCase(), canSelect: true };
    });
  });

  console.log('gameGrid', gameGrid);
}

module.exports = createGameGrid(5);


// console.log(generateRandRowIdx(2));
