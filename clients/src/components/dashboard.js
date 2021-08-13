import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Thead, Table, Tbody, LayoutPage, Button } from '../styles/Component.style';
import axios from 'axios';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      transactions: [],
      isLoading: true 
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios.get("http://localhost:3001/transaction")
      .then(response => { 
        console.log(response); 
        this.setState({ transactions: response.data, isLoading: false }) 
      });      
  }

  render() {
    const { transactions, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    let transactionList = [];

    function WithoutTime(dateTime) {
      const date = new Date(dateTime);
      return Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date);
    }

    transactions.forEach((item, index) => {
      transactionList.push(
        <tr key={item.transaction_number}>
          <td>{item.transaction_number}</td>
          <td>{WithoutTime(item.transaction_date)}</td>
          <td>{item.username}</td>
          <td>{item.customer_name_rental}</td>
          <td>{item.name}</td>
          <td>{item.rent_duration} Days</td>
          <td>Rp. {item.rental_price}</td>
        </tr>
      )
    })

    return (
      <LayoutPage>
        <div className="top-section">
          <h1>Transaction</h1>
          <div className="add-data">
            <Button className="green-button">
              <Link to="/AddTransactionPage" className="add-button">Add Transaction</Link>
            </Button>
          </div>
        </div>
        <Table>
          <Thead>
            <tr>
              <th>Transaction Number</th>
              <th>Transaction Date</th>
              <th>Username</th>
              <th>Costumer Name</th>
              <th>Motor Name</th>
              <th>Rent Duration</th>
              <th>Price</th>
            </tr>
          </Thead>
          <Tbody>
            {transactionList}
          </Tbody>
        </Table>
      </LayoutPage>
    )
  }
}
