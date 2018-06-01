import React, { Component } from 'react';
import { NavLink, HashRouter } from 'react-router-dom';
import Header from './header';
import Categories from './categories';
import Content from './content';
import callCatalogApi from '../utility';


class Main extends Component {
  state = {
    loggedIn: localStorage.getItem('email'),
    categories: [],
  };

  componentDidMount() {
    callCatalogApi('categories/', {
      method: 'GET',
    }).then(({ data }) => {
      this.setState({
        categories: data.data,
      });
    });
  }

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
              <Categories
                categories={this.state.categories}
                loggedIn={this.state.loggedIn}
              />
            </div>
            <div className="col-md-9">
              {this.state.loggedIn ?
                <NavLink to="/new_item">New Item</NavLink>
                  :
                <NavLink to="/login">New Item</NavLink>
                }
              <hr />
              <Content
                setLoggedIn={(email) => {
                  this.setState({ loggedIn: email });
                }}
                categories={this.state.categories}
                loggedIn={this.state.loggedIn}
              />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
