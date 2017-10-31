import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someState: ''
    };
  }

  render() {
    return (
      <div>
        <h1>working ?</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
