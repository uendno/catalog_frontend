import React, { Component } from "react";
import CategoryForm from './category_form';
import callCatalogApi from '../utility';

class EditCategory extends Component {
  categoryId = this.props.match.params.categoryId;
  category_endpoint = `category/${this.categoryId}/`

  state = {
    name: "",
  };

  componentDidMount = () => {
    callCatalogApi(this.category_endpoint, {
      method: 'GET',
    }).then(({ data }) => {
      this.setState({
        name: data.data.name,
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Edit Category</h2>
        <CategoryForm
          name={this.state.name}
          endpoint={this.category_endpoint}
          method="PATCH"
          {...this.props}
        />
      </div>
    );
  }
}

export default EditCategory;
