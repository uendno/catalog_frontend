import React from 'react';
import { NavLink } from 'react-router-dom';

const headerStyle = {
  margin: '.8em',
};

const Header = props => (
  <React.Fragment>
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
          <p>
            {props.loggedIn} &nbsp; &nbsp;
            <a
              href=""
              onClick={
                (event) => {
                  props.setLoggedInNull();
                  localStorage.clear();
                  event.preventDefault();
                }
              }
            >
              Logout
            </a>
          </p>
        :
          <NavLink to="/login">
            Login
          </NavLink>
        }
      </div>
    </div>
  </React.Fragment>
);

export default Header;
