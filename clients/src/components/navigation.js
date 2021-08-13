import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../images/logo.png';
import { NavigationStyled } from '../styles/Component.style';
import { 
  BsFillGrid1X2Fill, 
  BsPeopleFill, 
  BsStarFill,
  BsPersonLinesFill,
  BsPersonCheckFill 
} from "react-icons/bs";

function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt=""/>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
            <NavLink to="/Dashboard" activeClassName="active-class" exact><BsFillGrid1X2Fill className="icon-item"/>Dashboard</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/MotorPage" activeClassName="active-class" exact><BsPersonLinesFill className="icon-item"/> Motor List</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/UserPage" activeClassName="active-class" exact><BsPeopleFill className="icon-item"/>User List</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/CustomerPage" activeClassName="active-class" exact><BsPersonCheckFill className="icon-item"/>Customer List</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/BrandPage" activeClassName="active-class" exact><BsStarFill className="icon-item" />Brand List</NavLink>
        </li>
      </ul>
      <footer className="footer">
          <p>@2021 <b>Created By Tri Hariyanto</b></p>
      </footer>
    </NavigationStyled>
  )
}

export default Navigation;