// import React,{ useState} from 'react';
// import UserList from './userList';
// import CustomerList from './customerList';
// import MotorList from './motorList';
// import axios from 'axios';
// import { Card, Button } from '../styles/Component.style';

// export const AddTransaction = () => {

//   const [transactionNumber, setTransactionNumber] = useState("");
//   const [transactionDate, setTransactionDate] = useState("");
//   const [userName, setUserName] = useState("");
//   const [customerName, setCustomerName] = useState("");
//   const [motorName, setMotorName] = useState("");
//   const [rentDuration, setRentDuration] = useState("");
//   const [price, setPrice] = useState("");

//   const addTransaction = () => {
//     console.log(userName);
//     axios({
//       method: 'post',
//       url: 'http://localhost:3001/addTransactionForm',
//       data: {
//         transactionNumber: transactionNumber,
//         transactionDate: transactionDate,
//         userName: userName,
//         customerName: customerName,
//         motorName: motorName,
//         rentDuration : rentDuration,
//         price : price,
//       }
//     })
//     .then(function (response) {
//       alert('data added successfully')
//       console.log(response);      
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
//   }

//   const handleChangeUserName = (value) => {
//     setUserName(value);  
//   }

//   const handleChangeCustomer = (value) => {
//     setCustomerName(value);
//   }

//   const handleChangeMotor = (value) => {
//     setMotorName(value);
//   }

//   return (
//     <Card>      
//       <div className="registration">
//         <h1>Add Transaction</h1>
//         <label>Transaction Number</label>
//         <input
//           type="text"
//           onChange={(e) => {
//             setTransactionNumber(e.target.value);
//           }}
//         />
//         <label>Transaction Date</label>
//         <input
//           type="text"
//           onChange={(e) => {
//             setTransactionDate(e.target.value);
//           }}
//         />
//         <label>Usename</label>      
//         <UserList
//           handleChangeUserName={handleChangeUserName}
//         />

//         <label>Customer Name</label>
//         <CustomerList 
//           handleChangeCustomer={handleChangeCustomer}
//         />

//         <label>Motor Name</label>
//         <MotorList
//           handleChangeMotor={handleChangeMotor}
//         />

//         <label>Rent Duration</label>
//         <input
//           type="text"
//           onChange={(e) => {
//             setRentDuration(e.target.value);
//           }}
//         />
//         <label>Price</label>
//         <input
//           type="text"
//           onChange={(e) => {
//             setPrice(e.target.value);
//           }}
//         />
//         <div>
//           <Button className="primary-button" onClick={addTransaction}>Add Transaction</Button>
//         </div>

//       </div>
//     </Card>
//   )
// }

// export default AddTransaction;
