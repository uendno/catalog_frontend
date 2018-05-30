import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';

const clearCookies = () => {
  const cookies = new Cookies();
  cookies.remove('token');
};

const headerStyle = {
  margin: '.8em',
};

const Header = props => (
  <div>
    <div className="row">
      <div className="col-md-12 text-center">
        <h1 style={headerStyle}>Catalog</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <NavLink exact to="/">Home</NavLink>
      </div>
      <div className="col-md-6 text-right">
        {
          props.loggedIn
        ?
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            href=""
            onClick={
              (event) => {
                props.setLoggedInFalse();
                clearCookies();
                event.preventDefault();
              }
            }
          >
              logout
          </a>
        :
          <NavLink to="/login">
            Login
          </NavLink>
        }
      </div>
    </div>
  </div>
);

Header.propTypes = {
  setLoggedInFalse: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default Header;
