import React, { Component } from 'react';
import axios from 'axios';
import { SelectOption } from './Component.style';

export default class AddTransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      customerSelect: [],
      customerList: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3001/customerSelect")
      .then(response => { 
        console.log(response); 
        this.setState({ customerList: response.data, isLoading: false }) 
      }
    );
  }

  handleInputChange(value) {
    console.log(value);
    this.setState({ customerSelect: value });    
  }
  

  render() {
    const { customerList } = this.state;

    let customerListing = [];

    Array.from(customerList).forEach((item, index) => {
      customerListing.push(
        <option 
          key={index} 
          value={item.id}
        >
          {item.name}
        </option>
      )
    })

    var handleToUpdate = this.props.handleChangeCustomer;

    return(
      <SelectOption className="selection-name">
        <select 
          defaultValue={this.state.customerSelect.value}
          onChange={(e) => { 
            this.handleInputChange(e.target.value); 
            handleToUpdate(e.target.value)
          }}
        >
        {customerListing}
        </select>
      </SelectOption>
    )
  }
}