import React, { Component } from 'react';
import CategoryForm from './category_form';
import callCatalogApi from '../utility';

class EditCategory extends Component {
  state = {
    name: '',
  };

  componentDidMount = () => {
    callCatalogApi(this.categoryEndpoint, {
      method: 'GET',
    }).then(({ data }) => {
      this.setState({
        name: data.data.name,
      });
    });
  }

  categoryId = this.props.match.params.categoryId;
  categoryEndpoint = `category/${this.categoryId}/`

  render() {
    return (
      <div>
        <h2>Edit Category</h2>
        <CategoryForm
          name={this.state.name}
          endpoint={this.categoryEndpoint}
          method="PATCH"
          {...this.props}
        />
      </div>
    );
  }
}

export default EditCategory;
