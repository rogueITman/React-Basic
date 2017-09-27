import React from 'react';

export const Header = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-heaer">
          <ul className="nav navbar-nav">
            <li><a href="#">{props.homeLink}</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.PropTypes = {
  homeLink: React.PropTypes.string
}
