import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import { Card, Button } from './Component.style';

export const Login = () => {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    axios.post("http://localhost:3000/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].name);
        history.push("/dashboard");
      }
    });
  };

  return (
    <Card>
      <div className="login">
        <h1>Login</h1>
        <label>Name</label>
        <input 
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label>Password</label>
        <input 
          type="text"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <div>
          <Button onClick={login}>Login</Button>
        </div>
        <h4>{loginStatus}</h4>

        <Link to="/">Back</Link>
      
      </div>
    </Card>
  )
};

export default Login;