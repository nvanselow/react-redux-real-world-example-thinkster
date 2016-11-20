import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ArticleList from '../articles/articleList';

const mapStateToProps = state => ({
  articles: state.home.articles,
});

const MainView = ({ articles }) => (
  <div className="col-md-9">
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <a href="" className="nav-link active">
            Global Feed
          </a>
        </li>
      </ul>
    </div>

    <ArticleList articles={articles} />
  </div>
);

MainView.propTypes = {
  articles: PropTypes.array,
};

export default connect(mapStateToProps, () => ({}))(MainView);
