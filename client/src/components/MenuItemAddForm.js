import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class MenuItemAddForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      course: 1,
      cost: 0,
      fireRedirect: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    axios({
      method: 'POST',
      url: '/api/menu',
      data: {
        name: this.state.name,
        description: this.state.description,
        course: this.state.course,
        cost: this.state.cost,
      },
    })
      .then(item => {
        this.setState({
          fireRedirect: true,
        });
        console.log('ADDED ITEM TO MENU_DB WORKED--->', item);
      })
      .catch(err => {
        console.log('ADDING ITEM TO MENU_DB FAILED--->', err);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.handleInputChange}
            placeholder="What is the name of the item?"
          />
          <input
            type="text"
            name="description"
            onChange={this.handleInputChange}
            placeholder="What is the description?"
          />
          <input
            type="number"
            name="course"
            onChange={this.handleInputChange}
            placeholder="What course would you like this item to be?"
          />
          <input
            type="number"
            name="cost"
            onChange={this.handleInputChange}
            placeholder="How much would you like this item to cost?"
          />
          <input type="submit" value="Add Item" />
        </form>
        {this.state.fireRedirect ? <Redirect to="/item" /> : ' '}
      </div>
    );
  }
}

export default MenuItemAddForm;
