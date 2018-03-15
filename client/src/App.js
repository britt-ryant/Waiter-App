import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

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
      apiDataLoaded: false,
    };
    this.loggingOut = this.loggingOut.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loggingOut(e) {
    e.preventDefault();
    this.setState({
      isLoggedIn: false,
    });
  }

  handleChange(e) {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`made it to handleSubmit`);
    axios
      .get(`/auth/${this.state.username}`)
      .then(result => {
        console.log(result);
        this.setState({
          isLoggedIn: true,
          userData: result.data.data,
        });
      })
      .catch(err => {
        //use this err to tell user that there is no record of user!
        console.log(`name does not exist in database`);
      });
    // this.props.loggingIn(this.state.userData);
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              onChange={this.handleChange}
              placeholder="User Name"
            />
            <input
              type="text"
              name="password"
              onChange={this.handleChange}
              placeholder="Password"
            />
            <input type="submit" value="Log In!" />
          </form>
        </div>
      );
    } else {
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
            <form onSubmit={this.loggingOut}>
              <input type="submit" value="Log Out" />
            </form>
          </div>
        </Router>
      );
    }
  }
}

export default App;
