import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const itemNameStyle = {
  fontSize: '1.5em',
  marginBottom: 0,
};

const noBottomMarginStyle = {
  marginBottom: 0,
};

// const createDelete = item => (() =>
//   item.data.id

// );
        // <a href="" onClick=>
        //  delete
       // </a>

const Item = ({ item }) => (
  <React.Fragment>
    <p style={itemNameStyle}>{item.data.name}</p>
    <p style={noBottomMarginStyle}>Description: {item.data.description}</p>
    <p style={noBottomMarginStyle}>Price: {item.data.price}</p>
    {item.owns &&
      (
      <p style={noBottomMarginStyle}>
        <NavLink to={`/category/${item.data.category}/item/${item.data.id}/edit`}>
          edit
        </NavLink>
      </p>
      )
    }
    <br />
  </React.Fragment>
);

Item.propTypes = {
  item: PropTypes.shape({
    data: PropTypes.shape({
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }),
    owns: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Item;
