import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CategoryLink from './category_link';

class Categories extends Component {
  state = {
    categories: [],
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12">
            {this.props.loggedIn ?
              <NavLink to="/new_category">New Category</NavLink>
              :
              <NavLink to="/login">New Category</NavLink>
            }
            <hr />
          </div>
        </div>
        {this.props.categories.map(category => (
          <CategoryLink
            category={category}
            key={`category${category.data.id}`}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Categories;
