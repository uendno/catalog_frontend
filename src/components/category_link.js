import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoryLink = ({ category }) => (
  <div className="row">
    <div className="col-md-12">
      <NavLink to={`/category/${category.data.id}/`}>
        {category.data.name}
      </NavLink>
    </div>
  </div>);

export default CategoryLink;
