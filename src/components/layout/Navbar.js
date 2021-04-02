import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ icon, title }) {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

export default Navbar;
