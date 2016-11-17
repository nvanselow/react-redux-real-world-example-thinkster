import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './stores/default';
import { TOGGLE } from './constants/actions';

class App extends Component {
  constructor() {
    super();
    this.state = {};

    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    Store.subscribe(() => this.setState(Store.getState()));
  }

  onClick() {
    Store.dispatch({ type: TOGGLE });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />
        <div>
          <h1>To-Dos</h1>
          <div>
            Learn Redux
            <input
              type="checkbox"
              checked={!!this.state.checked}
              onClick={this.onClick}
            />
          </div>
          {
            this.state.checked ? (<h2>Done!</h2>) : null
          }
        </div>
      </div>
    );
  }
}

export default App;
