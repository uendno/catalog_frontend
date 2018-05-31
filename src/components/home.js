import React, { Component } from 'react';
import Item from './item';
import callCatalogApi from '../utility';

class Home extends Component {
  state = {
    latest_items: [],
  };

  componentDidMount() {
    callCatalogApi('latest_items/6/', {
      method: 'GET',
    }).then(({ data }) => {
      this.setState({
        latest_items: data.data,
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Latest Items</h1>
        <br />
        {this.state.latest_items.map((item) => (
          <Item
            key={`home_item${item.data.id}`}
            item={item}
          />))
        }
      </div>
    );
  }
}

export default Home;
