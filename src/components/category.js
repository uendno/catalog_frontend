import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Item from './item';
import callCatalogApi from '../utility';

const createDelete = (category, refresh) => ((event) =>{
  callCatalogApi(`category/${category.id}/`, {
    method: 'DELETE',
  })
  event.preventDefault();
  refresh();
})

class Category extends Component {
  state = {
    items: [],
    category: null,
  };

  componentDidMount() {
    // eslint-disable-next-line prefer-destructuring
    const categoryId = this.props.match.params.categoryId;

    callCatalogApi(`category/${categoryId}/related/`, {
      method: 'GET',
    }).then(({ data }) => {
      this.setState({
        category: data.data,
        ownsCategory: data.owns,
        items: data.children,
      });
    });
  }

  render() {
    if (this.state.category) {
      return (
        <React.Fragment>
          <h1>{this.state.category.name}</h1>
          {this.state.ownsCategory &&
            (
            <p >
              <NavLink to={`/category/${this.state.category.id}/edit`}>
                edit
              </NavLink>
              &nbsp;
              &nbsp;
              &nbsp;
              <a href="" onClick={
                createDelete(this.state.category, () => {
                  this.props.history.push('/'); window.location.reload();})}>
                delete
              </a>
            </p>
            )
          }
          <br />
          {this.state.items.map(item => (
            <Item
              item={item}
              key={`item${item.data.id}`}
              {...this.props}
            />))}
        </React.Fragment>
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
