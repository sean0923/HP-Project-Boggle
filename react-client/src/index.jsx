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

    };
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

        <CurrWordNSubmitBtn />

        <ScoreTable />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
