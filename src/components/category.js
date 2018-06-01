import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Item from './item';
import { callCatalogApi, createDelete }from '../utility';


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
    }).then(({ jsonResponse }) => {
      this.setState({
        category: jsonResponse.data,
        ownsCategory: jsonResponse.owns,
        items: jsonResponse.children,
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
              <a
                href=""
                onClick={
                  createDelete(
                    `category/${this.state.category}/`,
                    () => {
                      this.props.history.push('/');
                      window.location.reload();
                    },
                    () => {this.props.history.push('login/');}
                  )
                }
              >
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

export default Category;
