import React, { Component } from 'react';
import { NavLink, HashRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Header from './header';
import Categories from './categories';
import Content from './content';


class Main extends Component {
  state = {
    loggedIn: Boolean((new Cookies()).get('token')),
  };

  render() {
    return (
      <HashRouter>
        <div className="container">
          <Header
            loggedIn={this.state.loggedIn}
            setLoggedInFalse={() => {
              this.setState({
                loggedIn: false,
              });
            }}
          />
          <br />
          <div className="row">
            <div className="col-md-3">
              <Categories />
            </div>
            <div className="col-md-9">
              <NavLink to="/new_item">New Item</NavLink>
              <hr />
              <Content
                setLoggedInTrue={() => {
                  this.setState({ loggedIn: true });
                }}
              />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
