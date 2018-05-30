import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Home from './home';
import NewCategory from './new_category';
import NewItem from './new_item';
import Login from './login';
import Category from './category';


const Content = props => (
  <div className="content">
    <Route exact path="/" component={Home} />
    <Route path="/new_category" component={NewCategory} />
    <Route path="/new_item" component={NewItem} />
    <Route
      path="/login"
      render={inner_props => (
        <Login
          setLoggedInTrue={props.setLoggedInTrue}
        />)
      }
    />
    <Route
      path="/category/:categoryId/"
      render={props => (
        <Category
          key={props.match.params.categoryId}
          {...props}
        />
      )}
    />
  </div>
);

Content.propTypes = {
  setLoggedInTrue: PropTypes.func.isRequired,
};


export default Content;
