import React from 'react';
import ReactDOM from 'react-dom';

import gameGrid from './data/createGameGrid';

// import logo from '../dist/logo.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameGrid,
    };
  }

  render() {
    const arr = [];
    for (let i = 0; i < 25; i++) {
      arr.push(i);
    }
    return (
      <div>
        {console.log(this.state.gameGrid)}
        <div className="gameGrid">
          {/* {arr.map((idx) => {
            return (
              <div key={idx} className="dice">

              </div>
            );
          })} */}

          {this.state.gameGrid.map(row =>
            row.map((dice, idx) => (
              <div key={idx} className="dice">
                <p>{dice.char}</p>
              </div>
            )))}
        </div>
        <div className="wordAndSubmitBtn">
          <div className="word">
            <p>Current Word: {'yeah'}</p>
          </div>

          <div className="submitBtn">
            <input type="submit" value="Submit Word" />
          </div>
        </div>

        <div className="scoreTable">
          <table>
            <tbody>
              <tr>
                <th>Word</th>
                <th>Score</th>
              </tr>
              <tr>
                <td>some word</td>
                <td>10</td>
              </tr>
              <tr>
                <td>other word</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
