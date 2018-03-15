import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class ComponentOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstStateMethod: '',
    };
  }

  render() {
    return (
      <div>
        <Header />
        <h1> This is the User Page</h1>
        <Footer />
      </div>
    );
  }
}

export default ComponentOne;
