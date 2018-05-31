import React, { Component } from "react";
import callCatalogApi from '../utility';

class ItemForm extends Component {
  state = {
    name: this.props.name,
    description: this.props.description,
    price: this.props.price,
    nameError: "",
    descriptionError: "",
    priceError: "",
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log("hel")
    event.preventDefault();
    this.setState({
      name: this.state.name.trim(),
      description: this.state.description.trim(),
      price: this.state.price.trim(),
    });

    this.setState({nameError:
      this.state.name ? "" : "Name cannot be empty"
    });
    this.setState({descriptionError:
      this.state.description ? "" : "Description cannot be empty"
    });
    this.setState({priceError:
      this.state.price ? "" : "Price cannot be empty"
    });
    if (this.state.name && this.state.description && this.state.price) {
      callCatalogApi(
        this.props.endpoint, {
          method: this.props.method,
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            data: {
              name: this.state.name,
              description: this.state.description,
              price: this.state.price,
            },
          }),
        }
      ).then((response) => {
        console.log(response);
        if (response.status === 200) {
          this.props.history.push("/");
        }
      });
    }
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
            <label htmlFor="item-description"> Description </label>
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
            <select className="form-control" id="item-category">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default ItemForm;
