import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class LogIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      userData: null,
      username: '',
      password: '',
      fireRedirect: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }
  handleSubmit(e){
    e.preventDefault()
    console.log(`made it to handleSubmit`);
    axios.get('/auth')
    .then(result => {
      console.log(result)
      this.setState({
        isLoggedIn: true,
        userData: result.data.data,
      })
    })
    .catch(err => {
      //use this err to tell user that there is no record of user!
      console.log(`name does not exist in database`);
    })
    this.props.loggingIn(this.state.userData)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='username' onChange={this.handleChange} placeholder="User Name" />
          <input type='text' name='password' onChange={this.handleChange} placeholder="Password" />
          <input type='submit' value='Log In!' />
        </form>
        {this.state.isLoggedIn ? <Redirect to='/' /> : '' }
      </div>

    )
  }
}

export default LogIn;
