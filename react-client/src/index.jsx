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
      selectedChars: ['a', 'b', 'c'],
      selectedRowCol: [],
      submittedWords: ['dddadfdfd'],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    });
  }

  handleDiceClick(dice, row, col) {
    // console.log(row, col);
    // if (this.state.gameGrid[row][col].canSelect) {
    //   this.state.gameGrid[row][col].isSelected = true;
    // }

    console.log('sc', this.state.selectedChars.slice());
    let selectedChars = this.state.selectedChars.slice();

    let selectedRowCol = this.state.selectedRowCol.slice();

    if (dice.canSelect) {
      dice.isSelected = !dice.isSelected;
      if (dice.isSelected) {
        selectedChars.push(dice.char);
        selectedRowCol.push({ row, col });
      } else {
        selectedChars.pop();
        selectedRowCol.pop();
      }
      this.setState({
        gameGrid,
        selectedChars,
        selectedRowCol,
      });
    } else {
      alert('You can only select ajcent dice from last dice you selected');
    }
  }

  render() {
    return (
      <div>
        {/* {console.log(this.state.gameGrid)} */}
        <div className="gameGrid">
          {this.state.gameGrid.map((dices, row) =>
            dices.map((dice, col) => {
              let cName = 'dice';
              if (dice.isSelected) cName = 'selectedDice';
              return (
                <div
                  onClick={() => {
                    this.handleDiceClick(dice, row, col);
                  }}
                  key={col}
                  className={cName}
                >
                  <p className="pointer">{dice.char}</p>
                </div>
              );
            }))}
        </div>

        {console.log('this is selected row col:', this.state.selectedRowCol)}

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
