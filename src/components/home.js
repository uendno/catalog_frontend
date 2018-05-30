import React, { Component } from "react";
import Item from "./item"

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latest_items: []
    };

    const url = 'http://localhost:1337/latest_items/6/'

    fetch(url, {
      method: 'GET'
    }).then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          latest_items: 
          response.data.map(({data}) =>
          <Item 
            key={'item' + data.id.toString()}  
            item={data}/>)
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Latest Items</h1>
        <br></br>
        {this.state.latest_items}
        <div>
        </div>
      </div>
    );
  }
}

export default Home
