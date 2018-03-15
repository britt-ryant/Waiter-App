import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import MenuList from './components/MenuList';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
          <div>
            <nav>
              <Link to='/'>Home Page</Link>
              <Link to='/menu'>Menu Page</Link>
            </nav>
              <Route exact path='/' component={Home} />
              <Route exact path='/menu' component={MenuList} />
          </div>
      </div>
    </Router>
    );
  }
}

export default App;
