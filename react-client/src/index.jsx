import React from 'react';
import ReactDOM from 'react-dom';

import gameGrid from './data/createGameGrid';

import CurrWordNSubmitBtn from './components/CurrWordNSubmitBtn.jsx';
import ScoreTable from './components/ScoreTable.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameGrid,
      selectedChars: [],
      selectedRowCol: [],
      submittedWords: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isValidIdx = this.isValidIdx.bind(this);
    this.handleDiceClick = this.handleDiceClick.bind(this);
  }

  handleSubmit() {
    let currWord = this.state.selectedChars.slice().join('');
    if (currWord.length === 0) {
      alert('Cannot submit empty word!');
      return;
    }

    let submittedWords = this.state.submittedWords.concat(currWord);

    let gameGrid = this.state.gameGrid.map((dices) => {
      return dices.map((dice) => {
        dice.canSelect = true;
        dice.isSelected = false;
        return dice;
      });
    });

    this.setState({
      gameGrid,
      submittedWords,
      selectedChars: [],
      selectedRowCol: []
    });
  }

  isValidIdx(idx) {
    if (idx >= 0 && idx <= 4) return true;
    return false;
  }

  handleDiceClick(dice, row, col) {
    let gameGrid = this.state.gameGrid;

    let selectedChars = this.state.selectedChars.slice();
    let selectedRowCol = this.state.selectedRowCol.slice();

    let prevRow;
    let prevCol;
    // if nothing is seleted then make all dice selectable
    if (selectedRowCol.length === 0) {
      gameGrid.forEach((dices) => {
        dices.forEach((oneDice) => {
          oneDice.canSelect = true;
        });
      });
    } else { // if some dice is seleted then set previous row and col
      prevRow = selectedRowCol[selectedRowCol.length - 1].row;
      prevCol = selectedRowCol[selectedRowCol.length - 1].col;
    }


    if (prevRow !== undefined && prevCol !== undefined) {
      // if something is seleted then make all dice NOT selectable
      gameGrid.forEach((dices) => {
        dices.forEach((oneDice) => {
          oneDice.canSelect = false;
        });
      });

      // Deciding which dice can be selected
      let top = prevRow + 1;
      let bot = prevRow - 1;
      let rgt = prevCol + 1;
      let lft = prevCol - 1;

      gameGrid[prevRow][prevCol].canSelect = true;

      if (this.isValidIdx(top)) {
        gameGrid[top][prevCol].canSelect = true;
        if (this.isValidIdx(rgt)) gameGrid[top][rgt].canSelect = true;
        if (this.isValidIdx(lft)) gameGrid[top][lft].canSelect = true;
      }

      if (this.isValidIdx(bot)) {
        gameGrid[bot][prevCol].canSelect = true;
        if (this.isValidIdx(rgt)) gameGrid[bot][rgt].canSelect = true;
        if (this.isValidIdx(lft)) gameGrid[bot][lft].canSelect = true;
      }

      if (this.isValidIdx(rgt)) gameGrid[prevRow][rgt].canSelect = true;
      if (this.isValidIdx(lft)) gameGrid[prevRow][lft].canSelect = true;

      // Deciding which dice CANNOT be selected
      for (let i = 0; i < selectedRowCol.length - 1; i++) {
        let oneRowCol = selectedRowCol[i];
        if (oneRowCol.row === row && oneRowCol.col === col) {
          dice.canSelect = false;
          alert('You CANNOT select already selected dice other last dice you selected');
          return;
        }
      }
    }

    if (dice.canSelect) {
      dice.isSelected = !dice.isSelected;
      // if new dice is selected push to history
      if (dice.isSelected) {
        selectedChars.push(dice.char);
        selectedRowCol.push({ row, col });
      } else { // if prev dice is selected pop from history
        selectedChars.pop();
        selectedRowCol.pop();
      }
      this.setState({
        gameGrid,
        selectedChars,
        selectedRowCol,
      });
    } else {
      alert('You CANNOT select dice that is not adjcent from last dice you selected');
    }
  }

  render() {
    return (
      <div>
        <div className="gameGrid">
          {this.state.gameGrid.map((dices, row) =>
            dices.map((dice, col) => {
              let cName = 'dice';
              if (dice.isSelected) cName = 'selectedDice';
              return (
                <div
                  onClick={() => { this.handleDiceClick(dice, row, col); }}
                  key={col}
                  className={cName}
                >
                  <p className="pointer">{dice.char}</p>
                </div>
              );
            }))}
        </div>

        <CurrWordNSubmitBtn
          selectedChars={this.state.selectedChars}
          selectedRowCol={this.state.selectedRowCol}
          handleSubmit={this.handleSubmit}
        />

        <ScoreTable submittedWords={this.state.submittedWords} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
