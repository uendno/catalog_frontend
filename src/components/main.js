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


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div class="container">
          <h1>Catalog</h1>
          <Header/>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/new_category">New Category</NavLink></li>
            <li><NavLink to="/new_item">New Item</NavLink></li>
            <li><a href="http://localhost:1337/categories/">Categories</a></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>

          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/new_category" component={NewCategory}/>
            <Route path="/new_item" component={NewItem}/>
            <Route path="/login" component={Login}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
