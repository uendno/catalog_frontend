import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Catalog</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <NavLink exact to="/">Home</NavLink>
          </div>
          <div className="col-md-6 text-right">
            <NavLink to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
