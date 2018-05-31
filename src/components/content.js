import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Home from './home';
import NewCategory from './new_category';
import NewItem from './new_item';
import EditItem from './edit_item';
import Login from './login';
import Category from './category';


const Content = props => (
  <div className="content">
    <Route exact path="/" component={Home} />
    <Route path="/new_category" component={NewCategory} />
    <Route
      path="/new_item"
      render={innerProps => (
        <NewItem
          categories={props.categories}
          {...innerProps}
        />
      )}
    />
    <Route
      path="/category/:categoryId/item/:itemId/edit"
      render={innerProps => (
        <EditItem
          key={
            `${innerProps.match.params.categoryId}/${innerProps.match.params.itemId}/edit`}
          categories={props.categories}
          {...innerProps}
        />
      )}
    />
    <Route
      path="/login"
      render={innerProps => (
        <Login
          setLoggedIn={props.setLoggedIn}
          {...innerProps}
        />)
      }
    />
    <Route
      exact path="/category/:categoryId/"
      render={props => (
        <Category
          // eslint-disable-next-line react/prop-types
          key={props.match.params.categoryId}
          {...props}
        />
      )}
    />
  </div>
);

Content.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};


export default Content;
