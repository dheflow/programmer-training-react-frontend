// Motor List

import React, { Component } from 'react';
import { Thead, Table, Tbody, Button, LayoutPage } from '../styles/Component.style';
import axios from 'axios';

export default class BrandList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      motors: [], 
      isLoading: true 
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios.get("http://localhost:3001/MotorSelect")
      .then(response => { 
        console.log(response); 
        this.setState({ motors: response.data, isLoading: false }) 
      });      
  }

  render() {
    const { motors, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    let motorList = [];

    motors.forEach((item, index) => {
      motorList.push(
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.police_number}</td>
          <td>{item.vehicle_type_id}</td>
          <td>{item.year_build}</td>
          <td>{item.year_operated}</td>
          <td>{item.fuel_type}</td>
          <td>{item.owner_name}</td>
        </tr>
      )
    })

    return (
      <LayoutPage>
        <div className="top-section">
          <h1>Motor List</h1>
          <div className="add-data">
            <Button className="green-button">
              Add Motor
            </Button>
          </div> 
        </div>
        <Table>
          <Thead>
            <tr>
              <th>Id</th>
              <th>Police Number</th>
              <th>Vehicle Type</th>
              <th>Year Build</th>
              <th>Year Operated</th>
              <th>Fuel Type</th>
              <th>Owner Name</th>
            </tr>
          </Thead>
          <Tbody>
            {motorList}
          </Tbody>
        </Table>
      </LayoutPage>
    )
  }
}
