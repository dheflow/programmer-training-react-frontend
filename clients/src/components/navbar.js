import React, { Component } from 'react';
import { Navbar } from '../styles/Component.style';
import { BsFillEnvelopeFill, BsFillChatFill } from 'react-icons/bs';
import { FcTodoList } from 'react-icons/fc'
import Profile from '../images/trihariyanto.jpg';

export default class navbar extends Component  {
  render() {
    return (
      <Navbar>
        <div className="left-navbar">
          <a href="/dashboard"><BsFillEnvelopeFill className="navbar-icon"/></a>
          <a href="/dashboard"><BsFillChatFill className="navbar-icon"/></a>
          <a href="/dashboard"><FcTodoList className="navbar-icon"/></a>
        </div>
        <div className="right-navbar">
          <div className="admin-profile">
            <div className="status">
              <p>Tri Hariyanto</p>
              <h6>Available</h6>
            </div>
            <img src={Profile} alt="profile"/>
          </div>
        </div>
      </Navbar>
    )
  };
};