import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Register from './routes/Register';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import MotorPage from './routes/Dashboard';
import UserPage from './routes/Dashboard';
import CustomerPage from './routes/Dashboard';
import BrandPage from './routes/Dashboard';
import AddTransactionPage from './pages/AddTransactionPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={Register} /> */}
          <Route exact path="/" component={Login} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/MotorPage" component={MotorPage} />     
          <Route path="/UserPage" component={UserPage} />
          <Route path="/CustomerPage" component={CustomerPage} />
          <Route path="/BrandPage" component={BrandPage} />
          <Route path="/AddTransactionPage" component={AddTransactionPage}/>      
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
