import React, { Component } from 'react';

const Header = (props) => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand">
          { props.appName.toLowerCase() }
        </a>
      </div>
    </nav>
  );
};

export default Header;
