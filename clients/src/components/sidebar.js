import React from 'react'
import styled from 'styled-components';
import Navigation from './navigation';
import * as palette from '../styles/variable-color';

function Sidebar({navToggle}) {
  return (
    <SidebarStyled className={`${navToggle ? 'nav-toggle' : ''}`}>
      <Navigation />
    </SidebarStyled>
  )
}

const SidebarStyled = styled.div`
  width: 17.15rem;
  position: fixed;
  height: 100vh;
  background-color: ${palette.LightGrey}
  overflow: hidden;
  transition: all .4s ease-in-out;
  @media screen and (max-width:1200px){
      transform: translateX(-100%);
      z-index: 20;
  }
`;

export default Sidebar;