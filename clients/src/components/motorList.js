import React, { Component } from 'react';
import axios from 'axios';
import { SelectOption } from './Component.style';

export default class AddTransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      motorSelect: [],
      motorList: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3001/motorSelect")
      .then(response => { 
        console.log(response); 
        this.setState({ motorList: response.data, isLoading: false }) 
      }
    );
  }

  handleInputChange(value) {
    console.log(value);
    this.setState({ motorSelect: value });    
  }
  

  render() {
    const { motorList } = this.state;

    let motorListing = [];

    Array.from(motorList).forEach((item, index) => {
      motorListing.push(
        <option 
          key={index} 
          value={item.id}
        >
          {item.police_number}
        </option>
      )
    })

    var handleToUpdate = this.props.handleChangeMotor;

    return(
      <SelectOption className="selection-name">
        <select 
          defaultValue={this.state.motorSelect.value}
          onChange={(e) => { 
            this.handleInputChange(e.target.value); 
            handleToUpdate(e.target.value)
          }}
        >
        {motorListing}
        </select>
      </SelectOption>
    )
  }
}