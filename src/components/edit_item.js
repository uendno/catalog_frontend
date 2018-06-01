import React, { Component } from 'react';
import ItemForm from './item_form';
import callCatalogApi from '../utility';

class EditItem extends Component {
  state = {
    name: '',
    description: '',
    price: '',
  };

  componentDidMount = () => {
    callCatalogApi(this.itemEndpoint, {
      method: 'GET',
    }).then(({ data }) => {
      this.setState({
        name: data.data.name,
        description: data.data.description,
        price: data.data.price,
      });
    });
  }

  categoryId = this.props.match.params.categoryId;
  itemId = this.props.match.params.itemId;
  itemEndpoint = `category/${this.categoryId}/item/${this.itemId}/`

  render() {
    return (
      <div>
        <h2>Edit Item</h2>
        <ItemForm
          name={this.state.name}
          description={this.state.description}
          price={this.state.price}
          endpoint={this.itemEndpoint}
          method="PATCH"
          categories={this.props.categories}
          categoryId={this.categoryId}
          {...this.props}
        />
      </div>
    );
  }
}

export default EditItem;
