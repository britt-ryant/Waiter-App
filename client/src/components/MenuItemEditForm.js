import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class MenuItemEditForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      course: 1,
      cost: 0,
      fireRedirect: false,
      apiDataLoaded: false,
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
      method: 'PUT',
      url: `/api/menu/edit/${this.props.match.params.id}`,
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
        console.log('UPDATING ITEM IN MENU_DB WORKED--->', item);
      })
      .catch(err => {
        console.log('UPDATING ITEM IN MENU_DB FAILED--->', err);
      });
  }

  componentDidMount() {
    axios
      .get(`/api/menu/edit/${this.props.match.params.id}`)
      .then(item => {
        console.log('GETTING ITEM WORKED--->', item.data.data);
        this.setState({
          apiDataLoaded: true,
          apiData: item.data.data,
        });
      })
      .catch(err => {
        console.log('GETTING ITEM FAILED--->', err);
      });
  }

  renderItems() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.handleInputChange}
            placeholder={this.state.apiData.name}
          />
          <input
            type="text"
            name="description"
            onChange={this.handleInputChange}
            placeholder={this.state.apiData.description}
          />
          <input
            type="number"
            name="course"
            onChange={this.handleInputChange}
            placeholder={this.state.apiData.course}
          />
          <input
            type="number"
            name="cost"
            onChange={this.handleInputChange}
            placeholder={this.state.apiData.cost}
          />
          <input type="submit" value="Add Item" />
        </form>
        {this.state.fireRedirect ? <Redirect to="/item" /> : ' '}
      </div>
    );
  }

  render() {
    return <div>{this.state.apiDataLoaded ? this.renderItems() : ' '}</div>;
  }
}

export default MenuItemEditForm;
