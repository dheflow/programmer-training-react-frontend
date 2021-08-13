//User List

import React, { Component } from 'react';
import { Thead, Table, Tbody, Button, LayoutPage } from '../styles/Component.style';
import axios from 'axios';

export default class BrandList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: [], 
      isLoading: true 
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios.get("http://localhost:3001/UserSelect")
      .then(response => { 
        console.log(response); 
        this.setState({ users: response.data, isLoading: false }) 
      });      
  }

  render() {
    const { users, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    let userList = [];

    users.forEach((item, index) => {
      userList.push(
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.username}</td>
          <td>{item.password}</td>
        </tr>
      )
    })

    return (
      <LayoutPage>
        <div className="top-section">
          <h1>User List</h1>
          <div className="add-data">
            <Button className="green-button">
              Add User
            </Button>
          </div> 
        </div>
        <Table>
          <Thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </Thead>
          <Tbody>
            {userList}
          </Tbody>
        </Table>
      </LayoutPage>
    )
  }
}
