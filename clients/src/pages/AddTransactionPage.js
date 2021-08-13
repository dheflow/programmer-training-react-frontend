import React,{ useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserList from '../components/userList';
import CustomerList from '../components/customerList';
import MotorList from '../components/motorList';
import axios from 'axios';
import { Button, AddTransactionPage, FormInputTransaction } from '../styles/Component.style';

export const AddTransaction = () => {
  const [transactionNumber, setTransactionNumber] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [userName, setUserName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [motorName, setMotorName] = useState("");
  const [rentDuration, setRentDuration] = useState("");
  const [price, setPrice] = useState("");

  const history = useHistory();

  const addTransaction = () => {
    // console.log(userName);
    axios({
      method: 'post',
      url: 'http://localhost:3001/addTransactionForm',
      data: {
        transactionNumber: transactionNumber,
        transactionDate: transactionDate,
        userName: userName,
        customerName: customerName,
        motorName: motorName,
        rentDuration : rentDuration,
        price : price,
      }
    })
    .then(function (response) {
      history.push('/Dashboard');
      console.log(response);      
    })
    .catch(function (err) {
      console.log(err);
    });
  }

  const handleChangeUserName = (value) => {
    setUserName(value);  
  }

  const handleChangeCustomer = (value) => {
    setCustomerName(value);
  }

  const handleChangeMotor = (value) => {
    setMotorName(value);
  }

  return (
    <AddTransactionPage>
    <h1>Add Transaction</h1>
    <FormInputTransaction>
      <div>
      <label>Transaction Number</label>
      <input
        type="text"
        onChange={(e) => {
          setTransactionNumber(e.target.value);
        }}
      />

      </div>

      <div>
      <label>Transaction Date</label>
      <input
        type="text"
        onChange={(e) => {
          setTransactionDate(e.target.value);
        }}
      />
      </div>

      <div>
      <label>Price</label>
      <input
        type="text"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      </div>

      <div>
        <label>Usename</label>      
        <UserList
          handleChangeUserName={handleChangeUserName}
        />
      </div>

      <div>
        <label>Customer Name</label>
        <CustomerList 
          handleChangeCustomer={handleChangeCustomer}
        />
      </div>

      <div>
      <label>Motor Name</label>
      <MotorList
        handleChangeMotor={handleChangeMotor}
      />
      </div>

      <div>
      <label>Rent Duration</label>
      <input
        type="text"
        onChange={(e) => {
          setRentDuration(e.target.value);
        }}
      />
      </div>
      <div>
        <Button className="primary-button" onClick={addTransaction}>Add Transaction</Button>
      </div>
      <div>
        <Button className="danger-button">
          <Link to="/Dashboard" >Cancel</Link>
        </Button>
      </div>
      </FormInputTransaction>
      
    </AddTransactionPage>
  )
}

export default AddTransaction;