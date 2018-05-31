import React, { Component } from "react";

class ItemForm extends Component {
  state = {
    name: this.props.name,
    description: this.props.description,
    price: this.props.price,
    name_error: "",
    description_error: "",
    price_error: "",
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      name: this.state.name.trim(),
      description: this.state.description.trim(),
      price: this.state.price.trim(),
    });

    this.setState({name_error:
      this.state.name ? "" : "name cannot be empty"
    });
    this.setState({description_error:
      this.state.description ? "" : "description cannot be empty"
    });
    this.setState({price_error:
      this.state.price ? "" : "price cannot be empty"
    });
    if (this.state.name && this.state.description && this.state.price) {
      callCatalogApi(
        this.props.endpoint, {
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
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
      </React.Fragment>
    );
  }
}

export default ItemForm;
