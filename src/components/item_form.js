import React, { Component } from 'react';
import { callCatalogApi } from '../utility';

class ItemForm extends Component {
  state = {
    name: this.props.name,
    description: this.props.description,
    price: this.props.price,
    nameError: '',
    descriptionError: '',
    priceError: '',
    category: this.props.current_category,
  };

  componentDidMount() {
    if (this.props.categoryId) {
      const categoryEndpoint = `category/${this.props.categoryId}/`
      callCatalogApi(
        categoryEndpoint,
        {
          method: 'GET',
        }).then(({ jsonResponse }) => {
          console.log(jsonResponse);
          this.setState({
            category: jsonResponse.data.name
          })
        }
      )
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Validate input
    const categoryName =
        this.state.category ?
          this.state.category :
          this.props.categories[0].data.name;

    const data = {
      name: this.state.name.trim(),
      description: this.state.description.trim(),
      price: this.state.price.trim(),
      category_name: categoryName,
    };

    if (data.name && data.description && data.price) {
      callCatalogApi(
        this.props.endpoint,
        {
          method: this.props.method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data }),
        },
        this.props.history.push,
      ).then((response) => {
        if (response.status === 403) {
          this.props.history.push('/login');
          localStorage.clear();
          return;
        }
        this.props.history.push('/');
      });
    }
    const newState = {
      name: data.name,
      description: data.description,
      price: data.price,
      nameError: data.name ? '' : 'Name cannot be empty',
      descriptionError: data.description ? '' : 'Description cannot be empty',
      priceError: data.price ? '' : 'Price cannot be empty',
      category: categoryName,
    };
    this.setState(newState);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="item-name"> Name </label>
            <input
              id="item-name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              className="form-control"
              aria-describedby="name-error"
            />
            <small id="name-error" className="form-text text-muted">
              {this.state.nameError}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="item-description">Description</label>
            <textarea
              id="item-description"
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
              className="form-control"
              aria-describedby="description-error"
            />
            <small id="description-error" className="form-text text-muted">
              {this.state.descriptionError}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="item-price">Price</label>
            <input
              id="item-price"
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.handleInputChange}
              className="form-control"
              aria-describedby="price-error"
            />
            <small id="price-error" className="form-text text-muted">
              {this.state.priceError}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="item-category">Category</label>
            <select
              className="form-control"
              id="item-category"
              value={this.state.category}
              name="category"
              onChange={this.handleInputChange}
            >
              {this.props.categories.map(({ data }) => (
                <option
                  key={`form${data.name}`}
                  value={data.name}
                >
                  {data.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default ItemForm;
