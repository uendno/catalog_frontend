import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const CategoryLink = ({ category }) => (
  <div className="row">
    <div className="col-md-12">
      <NavLink to={`/category/${category.data.id}/`}>
        {category.data.name}
      </NavLink>
    </div>
  </div>);

CategoryLink.propTypes = {
  category: PropTypes.shape({
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default CategoryLink;
