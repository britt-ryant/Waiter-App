import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import MenuList from './components/MenuList';
import MenuItemAddForm from './components/MenuItemAddForm';
import MenuItemEditForm from './components/MenuItemEditForm';
import LogIn from './components/LogIn';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userData: null,
    };
    this.loggingIn = this.loggingIn.bind(this);
    this.loggingOut = this.loggingOut.bind(this);
  }

  loggingIn(user) {
    console.log(user);
    this.setState({
      isLoggedIn: true,
    });
  }

  loggingOut(e) {
    e.preventDefault();
    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Router>
          <div>
            <div>
              <nav>
                <Link to="/">Home Page</Link>
                <Link to="/menu">Menu Page</Link>
                <Link to="/menu/add">Add Item</Link>
              </nav>
              <Route exact path="/" component={Home} />
              <Route exact path="/menu" component={MenuList} />
              <Route exact path="/menu/add" component={MenuItemAddForm} />
              <Route path="/menu/edit/:id" component={MenuItemEditForm} />
            </div>
            <form onSubmit = {this.loggingOut}>
              <input type="submit" value="Log Out" />
            </form>
          </div>
        </Router>
      );
    } else {
      return (
        <div>
          <LogIn loggingIn={this.loggingIn} />
        </div>
      );
    }
  }
}

export default App;
