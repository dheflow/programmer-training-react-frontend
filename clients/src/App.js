import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './routes/Register';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />                  
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
