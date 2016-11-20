import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Store from './stores/default';
import { TOGGLE } from './constants/actions';
import Header from './components/header';

const mapStateToProps = state => ({
  appName: state.common.appName,
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
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  appName: PropTypes.string,
  children: PropTypes.node,
};

export default connect(mapStateToProps, () => ({}))(App);
