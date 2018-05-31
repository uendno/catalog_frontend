import React from 'react';
import CategoryForm from './category_form.js';

const NewCategory = props => (
  <div>
    <h2>New Category</h2>
    <CategoryForm
      name=""
      endpoint="category/new/"
      method="PUT"
      {...props}
    />
  </div>
);

export default NewCategory;
