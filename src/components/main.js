import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './home';
import NewCategory from './new_category';
import NewItem from './new_item';
import Login from './login';
import Header from './header';
import Categories from './categories';
import Category from './category';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };
  }


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
            <Categories />
            <div className="col-md-9">
              <NavLink to="/new_item">New Item</NavLink>
              <hr />
              <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/new_category" component={NewCategory} />
                <Route path="/new_item" component={NewItem} />
                <Route
                  path="/login"
                  render={props => (
                    <Login
                      setLoggedInTrue={() => {
                        this.setState({ loggedIn: true });
                      }}
                      {...props}
                    />)
                  }
                />
                <Route
                  path="/category/:categoryId/"
                  render={props => (
                    <Category
                      key={props.match.params.categoryId}
                      {...props}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
