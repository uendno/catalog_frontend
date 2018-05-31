import React, { Component } from 'react';
import ItemForm from './item_form.js';

class NewItem extends Component {
  render() {
    return (
      <div>
        <h2>New Item</h2>
        <ItemForm
          name=""
          description=""
          price=""
          endpoint="item/new/"
          method="PUT"
        />
      </div>
    );
  }
}

export default NewItem;
