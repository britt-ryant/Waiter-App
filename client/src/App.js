import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import MenuList from './components/MenuList';
import MenuItemAddForm from './components/MenuItemAddForm';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
          <div>
            <nav>
              <Link to='/'>Home Page</Link>
              <Link to='/menu'>Menu Page</Link>
              <Link to='/menu/add'>Add Item</Link>
            </nav>
              <Route exact path='/' component={Home} />
              <Route exact path='/menu' component={MenuList} />
              <Route path='/menu/add' component={MenuItemAddForm} />
          </div>
      </div>
    </Router>
    );
  }
}

export default App;
