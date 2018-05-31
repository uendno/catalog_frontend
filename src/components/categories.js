import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CategoryLink from './category_link';
import callCatalogApi from '../utility';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };

    callCatalogApi('categories/', {
      method: 'GET'
    }).then((response) => {
      this.setState({
        categories: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <NavLink to="/new_category">New Category</NavLink>
            <hr />
          </div>
        </div>
        {this.state.categories.map(category => (
          <CategoryLink
            category={category}
            key={`category${category.data.id}`}
          />
        ))}
      </div>
    );
  }
}

export default Categories;
