import React from 'react';
import ReactDOM from 'react-dom';

import gameGrid from './data/createGameGrid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameGrid
    };
  }

  render() {
    return (
      <div>
        <h1>working ?</h1>
        {console.log(this.state.gameGrid)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
