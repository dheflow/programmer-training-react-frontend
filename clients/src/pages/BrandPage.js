import React, { Component } from 'react';
import { Thead, Table, Tbody, Button, LayoutPage } from '../styles/Component.style';
import axios from 'axios';

export default class BrandList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      brands: [], 
      isLoading: true 
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get("http://localhost:3001/BrandSelect")
      .then(response => { 
        console.log(response); 
        this.setState({ brands: response.data, isLoading: false }) 
      });      
  }

  render() {
    const { brands, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    let brandList = [];

    brands.forEach((item, index) => {
      brandList.push(
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.description}</td>
        </tr>
      )
    })

    return (
      <LayoutPage>
        <div className="top-section">
          <h1>Brand List</h1>
          <div className="add-data">
            <Button className="green-button">
              Add Brand
            </Button>
          </div> 
        </div>
        <Table>
          <Thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </Thead>
          <Tbody>
            {brandList}
          </Tbody>
        </Table>
      </LayoutPage>
    )
  }
}