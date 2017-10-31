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
  }

  handleSubmit() {
    let reversedChars = this.state.selectedChars.slice().reverse().join('');
    let submittedWords = this.state.submittedWords.concat(reversedChars);

    this.setState({
      submittedWords,
      selectedChars: []
    });
  }

  render() {
    return (
      <div>
        {/* {console.log(this.state.gameGrid)} */}
        <div className="gameGrid">
          {this.state.gameGrid.map(row =>
            row.map((dice, idx) => (
              <div key={idx} className="dice">
                <p>{dice.char}</p>
              </div>
            )))}
        </div>

        <CurrWordNSubmitBtn
          selectedChars={this.state.selectedChars}
          handleSubmit={this.handleSubmit}
        />

        <ScoreTable
          submittedWords={this.state.submittedWords}
        />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
