import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Store from './stores/default';
import { TOGGLE } from './constants/actions';
import Header from './components/header';
import Home from './components/home/home';

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
      <div>
        <Header appName={this.props.appName} />
        <div>
          <Home />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(App);
