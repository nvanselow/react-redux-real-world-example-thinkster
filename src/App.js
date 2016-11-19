import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Store from './stores/default';
import { TOGGLE } from './constants/actions';
import Header from './components/header';

const mapStateToProps = state => ({
  appName: state.appName
});

class App extends Component {
  static onClick() {
    Store.dispatch({ type: TOGGLE });
  }

  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    Store.subscribe(() => this.setState(Store.getState()));
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
              onClick={App.onClick}
            />
          </div>
          {
            this.state.checked ? (<h2>Done!</h2>) : null
          }
        </div>

        <h1>{this.props.appName}</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(App);
