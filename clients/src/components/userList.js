import React, { Component } from 'react';
import axios from 'axios';
import { SelectOption } from './Component.style';

export default class AddTransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      userSelect: [],
      userList: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3001/userSelect")
      .then(response => { 
        console.log(response); 
        this.setState({ userList: response.data, isLoading: false }) 
      }
    );
  }

  handleInputChange(value) {
    console.log(value);
    this.setState({ userSelect: value });    
  }
  

  render() {
    const { userList } = this.state;

    let userListing = [];

    Array.from(userList).forEach((item, index) => {
      userListing.push(
        <option
          key={index} 
          value={item.id}>
          {item.username}
        </option>
      )
    })

    var handleToUpdate = this.props.handleChangeUserName;

    return(
      <SelectOption className="selection-name">
        <select 
          defaultValue={this.state.userSelect.value}
          onChange={(e) => {this.handleInputChange(e.target.value); handleToUpdate(e.target.value)}}
        >
        {userListing}
        </select>
      </SelectOption>
    )
  }
}