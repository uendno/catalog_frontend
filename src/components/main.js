import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home.js";
import NewCategory from "./new_category.js";
import NewItem from "./new_item";
import Login from "./login";
import Header from './header';
import Categories from './categories.js';


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container">
          <Header/>
          <br></br>
          <div className="row">
            <Categories/>
            <div className="col-md-9">
              <NavLink to="/new_item">New Item</NavLink>
              <hr></hr>
              <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/new_category" component={NewCategory}/>
                <Route path="/new_item" component={NewItem}/>
                <Route path="/login" component={Login}/>
              </div>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
