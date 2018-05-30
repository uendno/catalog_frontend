import React from 'react';
import PropTypes from 'prop-types';

const itemNameStyle = {
  fontSize: '1.5em',
  marginBottom: 0,
};

const noBottomMarginStyle = {
  marginBottom: 0,
};

const Item = ({ item }) => (
  <div>
    <p style={itemNameStyle}>{item.name}</p>
    <p style={noBottomMarginStyle}>Description: {item.description}</p>
    <p style={noBottomMarginStyle}>Price: {item.price}</p>
    <br />
  </div>
);

Item.propTypes = {
  item: PropTypes.shape({
    description: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired,
  }).isRequired,
};


export default Item;
