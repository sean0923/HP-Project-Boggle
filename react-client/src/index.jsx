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
          {/* <table> */}
          {/* <th>
              <td>Word</td>
              <td>Score</td>
            </th> */}
          {/* </table> */}

          <table>
            <tbody>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
              </tr>
              <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>94</td>
              </tr>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>80</td>
              </tr>
            </tbody>
          </table>

          {/* <table style="width:100%">
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
        </table> */}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
