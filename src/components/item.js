import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import callCatalogApi from '../utility';

const itemNameStyle = {
  fontSize: '1.5em',
  marginBottom: 0,
};

const noBottomMarginStyle = {
  marginBottom: 0,
};

const createDelete = (item, refresh) => ((event) =>{
  callCatalogApi(`category/${item.data.category}/item/${item.data.id}/`, {
    method: 'DELETE',
  })
  event.preventDefault();
  refresh();
})
        // <a href="" onClick=>
        //  delete
       // </a>

const Item = ({ item, history, location }) => (
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
        &nbsp;
        &nbsp;
        &nbsp;
        <a href="" onClick={
          createDelete(item, () => window.location.reload())}>
          delete
        </a>
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
