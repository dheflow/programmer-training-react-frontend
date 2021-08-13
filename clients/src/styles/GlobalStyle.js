import { createGlobalStyle } from 'styled-components';
import * as palette from './variable-color';

export const GlobalStyle = createGlobalStyle `
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    list-style: outside none none;
    text-decoration: none;
  }

  body {
    background-color: ${palette.Dark};
    transition: all .4s ease-in-out;
    font-family: 'Rubik', sans-serif;
  }

  //Nav Toggler
  .ham-burger-menu{
      position: absolute;
      right: 5%;
      top: 3%; 
      display: none;
      z-index: 15;
      svg{
          font-size: 3rem;
      }
    }
    .nav-toggle{
        transform: translateX(0);
        z-index: 20;
    }

  @media screen and (max-width:1200px){
    .ham-burger-menu{
        display: block;
    }
  }

  ul {
    list-style-type: none;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  } 
`