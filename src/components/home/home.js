import React from 'react';
import { connect } from 'react-redux';

import Banner from './banner';
import MainView from './mainView';

const mapStateToProps = state => ({
  appName: state.appName
});

const Home = ({ appName }) => {
  return (
    <div className="home-page">
      <Banner appName={appName} />

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
};

export default connect(mapStateToProps, () => ({}))(Home);
