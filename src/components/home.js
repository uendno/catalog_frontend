import React, { Component } from 'react';
import Item from './item';
import callCatalogApi from '../utility';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latest_items: [],
    };

    callCatalogApi('latest_items/6/', {
      method: 'GET',
    }).then((response) => {
      this.setState({
        latest_items: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Latest Items</h1>
        <br />
        {this.state.latest_items.map(({ data }) => (
          <Item
            key={`home_item${data.id}`}
            item={data}
          />))
        }
      </div>
    );
  }
}

export default Home;
