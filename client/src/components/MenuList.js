import React, { Component } from 'react';
import axios from 'axios';
import Item from './Item';

class MenuList extends Component {
  constructor() {
    super();
    this.state = {
      spiDataLoaded: false,
      apiData: null,
    };
  }

  componentDidMount() {
    axios
      .get('/api/menu')
      .then(item => {
        console.log('GETTING AN ITEM WORKED--->', item);
        this.setState({
          apiDataLoaded: true,
          apiData: item.data.data,
        });
      })
      .catch(err => {
        console.log('GETTING AN ITEM FAILED--->', err);
      });
  }

  renderItems() {
    console.log('FINISHED LOADING DATA---->', this.props);
    return this.state.apiData.map(item => {
      return <Item key={item.id} item={item} />;
    });
  }

  render() {
    return <div>{this.state.apiDataLoaded ? this.renderItems() : ''}</div>;
  }
}

export default MenuList;
