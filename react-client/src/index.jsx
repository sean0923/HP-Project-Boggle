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
      submittedWords: ['dddadfdfd'],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeDiceColor = this.changeDiceColor.bind(this);
  }

  handleSubmit() {
    const reversedChars = this.state.selectedChars
      .slice()
      .reverse()
      .join('');
    if (reversedChars.length === 0) {
      alert('Cannot submit empty word!');
      return;
    }

    const submittedWords = this.state.submittedWords.concat(reversedChars);
    this.setState({
      submittedWords,
      selectedChars: [],
    });
  }

  changeDiceColor(dice, row, col) {
    console.log(row, col);
    
    // if (this.state.gameGrid[row][col].canSelect) {
    //   this.state.gameGrid[row][col].isSelected = true;
    // }

    if (dice.canSelect) {
      dice.isSelected = !dice.isSelected;
      this.setState({
        gameGrid,
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
                    this.changeDiceColor(dice, row, col);
                  }}
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
          handleSubmit={this.handleSubmit}
        />

        <ScoreTable submittedWords={this.state.submittedWords} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
