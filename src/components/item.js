import React from 'react';
import { NavLink } from 'react-router-dom';
import callCatalogApi from '../utility';

const itemNameStyle = {
  fontSize: '1.5em',
  marginBottom: 0,
};

const noBottomMarginStyle = {
  marginBottom: 0,
};

const createDelete = (item, refresh) => ((event) => {
  callCatalogApi(`category/${item.data.category}/item/${item.data.id}/`, {
    method: 'DELETE',
  });
  event.preventDefault();
  refresh();
});

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
        &nbsp;
        &nbsp;
        &nbsp;
        <a
          href=""
          onClick={
            createDelete(item, () => window.location.reload())}
        >
          delete
        </a>
      </p>
      )
    }
    <br />
  </React.Fragment>
);

export default Item;
