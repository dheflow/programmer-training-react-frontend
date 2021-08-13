import React from 'react';
import { Route, Switch as Switching } from "react-router";
import Dashboard from '../components/dashboard';
import CustomerPage from '../pages/CustomerPage';
import MotorPage from '../pages/MotorPage';
import UserPage from '../pages/UserPage';
import Sidebar from '../components/sidebar';
import styled from 'styled-components';
import BrandPage from '../pages/BrandPage';
import Navbar from '../components/navbar';
import AddTransactionPage from '../pages/AddTransactionPage';

const DashboardPage = () => {
  return (
    <div>
      <Sidebar />
      <MainContentStyled>
      <Navbar />
        <Switching>
          <Route path="/Dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/CustomerPage" exact>
            <CustomerPage />
          </Route>
          <Route path="/MotorPage" exact>
            <MotorPage />
          </Route>
          <Route path="/UserPage" exact>
            <UserPage />
          </Route>
          <Route path="/BrandPage" exact>
            <BrandPage />
          </Route>  
          <Route path="/AddTransactionPage" exact>
            <AddTransactionPage />
          </Route>
        </Switching>
      </MainContentStyled>
    </div>
  )
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default DashboardPage;