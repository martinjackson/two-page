import React, { Component } from 'react';
import autoBind from 'react-autobind';
import Popout from 'react-popout';

import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {};
      autoBind(this);
    }

  clicked() {
    this.setState({showPop: true});
  }

  popupClosed() {
    this.setState({showPop: false});
  }

  render() {

    let pop = (this.state.showPop) ?
        <Popout url='popout.html' title='Window title' onClosing={this.popupClosed}>
          <div>Popped out content!</div>
        </Popout>
        : <p></p>;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.clicked}>Click Me</button>
        {pop}
      </div>
    );
  }
}

export default App;
