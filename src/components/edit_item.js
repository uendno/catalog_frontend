import React, { Component } from "react";
import ItemForm from './item_form';
import callCatalogApi from '../utility';

class EditItem extends Component {
  categoryId = this.props.match.params.categoryId;
  itemId = this.props.match.params.itemId;
  item_endpoint = `category/${this.categoryId}/item/${this.itemId}/`
  category_endpoint = `category/${this.categoryId}/`

  state = {
    name: "",
    description: "",
    price: "",
    category_name: ""
  };

  componentDidMount = () => {
    callCatalogApi(this.item_endpoint, {
      method: 'GET',
    }).then(({ data }) => {
      this.setState({
        name: data.data.name,
        description: data.data.description,
        price: data.data.price,
      });
    });

    callCatalogApi(this.category_endpoint, {
      method: 'GET',
    }).then(({ data }) => {
      this.setState({
        category_name: data.data.name,
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Edit Item</h2>
        <ItemForm
          name={this.state.name}
          description={this.state.description}
          price={this.state.price}
          endpoint={this.item_endpoint}
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
