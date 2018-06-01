import React, { Component } from 'react';
import callCatalogApi from '../utility';

class CategoryForm extends Component {
  state = {
    name: this.props.name,
    nameError: '',
  };

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

    const data = {
      name: this.state.name.trim(),
    };

    if (data.name) {
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
        window.location.reload();
      });
    }
    const newState = {
      name: data.name,
      nameError: data.name ? '' : 'Name cannot be empty',
    };
    this.setState(newState);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="category-name"> Name </label>
            <input
              id="category-name"
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
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default CategoryForm;
