// Customer List

import React, { Component } from 'react';
import { Thead, Table, Tbody, Button, LayoutPage } from '../styles/Component.style';
import axios from 'axios';

export default class BrandList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      customers: [], 
      isLoading: true 
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios.get("http://localhost:3001/CustomerSelect")
      .then(response => { 
        console.log(response); 
        this.setState({ customers: response.data, isLoading: false }) 
      });      
  }

  render() {
    const { customers, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    let customerList = [];

    customers.forEach((item, index) => {
      customerList.push(
        <tr key={item.id}>
          <td>{item.id_number}</td>
          <td>{item.name}</td>
          <td>{item.telephone}</td>
          <td>{item.address}</td>
          <td>{item.handphone}</td>
          <td>{item.email}</td>
        </tr>
      )
    })

    return (
      <LayoutPage>
        <div className="top-section">
          <h1>Customer List</h1>
          <div className="add-data">
            <Button className="green-button">
              Add Motor
            </Button>
          </div> 
        </div>
        <Table>
          <Thead>
            <tr>
              <th>Id Number</th>
              <th>Name</th>
              <th>Telephone</th>
              <th>Address</th>
              <th>Handphone</th>
              <th>Email</th>
            </tr>
          </Thead>
          <Tbody>
            {customerList}
          </Tbody>
        </Table>
      </LayoutPage>
    )
  }
}
