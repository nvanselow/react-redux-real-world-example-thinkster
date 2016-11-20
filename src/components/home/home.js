import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { HOME_PAGE_LOADED } from '../../constants/actions';
import agent from '../../services/agent';

import Banner from './banner';
import MainView from './mainView';

const mapStateToProps = state => ({
  appName: state.common.appName,
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: HOME_PAGE_LOADED, payload }),
});

class Home extends Component {
  componentWillMount() {
    this.props.onLoad(agent.Articles.all());
  }

  render() {
    return (
      <div className="home-page">
        <Banner appName={this.props.appName} />

        <div className="container page">
          <div className="row">
            <MainView />

            <div className="col-md-3">
              <div className="sidebar">
                <p>
                  Popular Tags
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  appName: PropTypes.string,
  onLoad: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
