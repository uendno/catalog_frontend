import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
            Home
        </div>
        <div className="col-md-6 text-right">
          <p>login</p>
        </div>
      </div>
      );
  }
}

export default Header;
