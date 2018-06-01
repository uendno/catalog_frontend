import React from 'react';
import { NavLink } from 'react-router-dom';
import { createDelete } from '../utility';

const itemNameStyle = {
  fontSize: '1.5em',
  marginBottom: 0,
};

const noBottomMarginStyle = {
  marginBottom: 0,
};

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
            createDelete(
              `category/${item.data.category}/item/${item.data.id}/`,
              () => window.location.reload(),
              () => {this.props.history.push('login/');}
            )
          }
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
