import React, { Component } from 'react';
import ItemForm from './item_form';
import callCatalogApi from '../utility';

class EditItem extends Component {
  state = {
    name: '',
    description: '',
    price: '',
    category_name: '',
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

    callCatalogApi(this.categoryEndpoint, {
      method: 'GET',
    }).then(({ data }) => {
      this.setState({
        category_name: data.data.name,
      });
    });
  }

  categoryId = this.props.match.params.categoryId;
  itemId = this.props.match.params.itemId;
  itemEndpoint = `category/${this.categoryId}/item/${this.itemId}/`
  categoryEndpoint = `category/${this.categoryId}/`

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
          current_category={this.state.category_name}
          {...this.props}
        />
      </div>
    );
  }
}

export default EditItem;
