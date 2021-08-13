// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { Button, Card } from './Component.style';

// export const Register = () => {

//   const [nameReg, setNameReg] = useState("");
//   const [emailReg, setEmailReg] = useState("");
//   const [usernameReg, setUsernameReg] = useState("");
//   const [passwordReg, setPasswordReg] = useState("");

//   const register = () => {
//     axios.post("http://localhost:3001/register", {
//       name: nameReg,
//       email: emailReg,
//       username: usernameReg,
//       password: passwordReg
//     }).then((response) => {
//       console.log(response);
//     });
//   }
//   return (
//     <Card>
//       <div className="registration">
//         <h1>Registration</h1>
//         <label>Name</label>
//         <input
//           type="text"
//           placeholder="Name..."
//           onChange={(e) => {
//             setNameReg(e.target.value);
//           }}
//         />
//         <label>Email</label>
//         <input
//           type="text"
//           placeholder="Email..."
//           onChange={(e) => {
//             setEmailReg(e.target.value);
//           }}
//         />
//         <label>Username</label>
//         <input
//           type="text"
//           placeholder="Username..."
//           onChange={(e) => {
//             setUsernameReg(e.target.value);
//           }}
//         />
//         <label>Password</label>
//         <input
//           type="text"
//           placeholder="Password..."
//           onChange={(e) => {
//             setPasswordReg(e.target.value);
//           }}
//         />
//         <div>
//           <Button onClick={register}>Register</Button>
//         </div>

//         <h2>Have an account? <Link to="/login">Login</Link></h2>
              
//       </div>
//     </Card>
//   )
// };

// export default Register;