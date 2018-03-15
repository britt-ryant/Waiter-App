import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import MenuList from './components/MenuList';
import MenuItemAddForm from './components/MenuItemAddForm';
import MenuItemEditForm from './components/MenuItemEditForm';

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
              <Route exact path='/menu/add' component={MenuItemAddForm} />
              <Route path='/menu/edit/:id' component={MenuItemEditForm} />
          </div>
      </div>
    </Router>
    );
  }
}

export default App;
