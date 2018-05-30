import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './item';

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      category: null,
    };

    // eslint-disable-next-line prefer-destructuring
    const categoryId = props.match.params.categoryId;
    const url = `http://localhost:1337/category/${categoryId}/related/`;

    fetch(url, {
      method: 'GET',
    }).then(response => response.json())
      .then((response) => {
        this.setState({
          category: response.data,
          items: response.children,
        });
      });
  }

  render() {
    if (this.state.category) {
      return (
        <div>
          <h1>{this.state.category.name}</h1>
          <br />
          {this.state.items.map(item => (
            <Item
              item={item.data}
              key={`item${item.data.id}`}
            />))}
        </div>
      );
    }
    return <div />;
  }
}

Category.propTypes = {
  match: PropTypes.shape({
    params:
      PropTypes.shape({
        categoryId: PropTypes.string.isRequired,
      }).isRequired,
  }).isRequired,
};

export default Category;
