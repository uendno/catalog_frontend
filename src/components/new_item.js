import React from 'react';
import { NavLink } from 'react-router-dom';
import ItemForm from './item_form.js';

const NewItem = props => (
  props.categories ?
  <div>
    <h2>New Item</h2>
    <ItemForm
      name=""
      description=""
      price=""
      endpoint="item/new/"
      method="PUT"
      categories={props.categories}
      {...props}
    />
  </div>
  :
  <div>
    <h2>
      <NavLink to="/new_category">Add a category</NavLink>
       &nbsp; before adding items</h2>
  </div>
);

export default NewItem;
