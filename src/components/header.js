import React from 'react';

const Header = ({ appName }) => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand">
          { appName.toLowerCase() }
        </a>
      </div>
    </nav>
  );
};

export default Header;
