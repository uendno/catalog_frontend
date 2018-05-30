import React, { Component } from "react";
import Category from './category';
import {
  NavLink,
} from "react-router-dom";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      categories: []
    };

    const url = 'http://localhost:1337/categories/';

    fetch(url, {
      method: 'GET',
    }).then(response => response.json())
      .then(response => {
        this.setState({
          categories: response.data.map(category =>
          <Category
            category={category}
            key={'category' + category.data.id.toString()}
            />)
        })
      });
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="row">
          <div className="col-md-12">
            <NavLink to="/new_category">New Category</NavLink>
            <hr></hr>
          </div>
        </div>
        {this.state.categories}
      </div>
    );
  }
}

export default Categories
