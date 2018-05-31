import React, { Component } from 'react';
import { NavLink, HashRouter } from 'react-router-dom';
import Header from './header';
import Categories from './categories';
import Content from './content';


class Main extends Component {
  state = {
    loggedIn: localStorage.getItem('email'),
  };

  render() {
    return (
      <HashRouter>
        <div className="container">
          <Header
            loggedIn={this.state.loggedIn}
            setLoggedInNull={() => {
              this.setState({
                loggedIn: null,
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
                setLoggedIn={(email) => {
                  this.setState({ loggedIn: email });
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
