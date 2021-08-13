import styled from 'styled-components';
import * as palette from './variable-color';

export const Background = styled.div `
  background: ${palette.Dark};
`

export const Button = styled.button`
  padding: .467rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  border: none;
  border-radius: .267rem;
  line-height: 1.6rem;

  &.primary-button {
    background: ${palette.Primary};
    color: ${palette.White};
  }

  &.primary-button:hover{
    background: ${palette.Dark};
    color: ${palette.White}};
    border: 1px solid ${palette.Primary};
  }

  &.green-button {
    background: ${palette.Green};
    border: none;
    color: ${palette.White};
  }

  &.green-button:hover {
    background: ${palette.Dark};
    color: ${palette.White};
    border: 1px solid ${palette.Green};
  }

  &.danger-button {
    background: ${palette.Red};
    border: none;
    
    a {
      color: ${palette.White};
    }
  }

  &.danger-button:hover {
    background: ${palette.Dark};
    color: ${palette.White};
    border: 1px solid ${palette.Red};
  }
`
export const Card = styled.div `
  width: 25%;
  height: auto;
  background: ${palette.LightDark};
  color: ${palette.LightBlue};
  text-align: center;
  display: block;
  margin: 15vh auto;
  padding: 40px 0px;
  border-radius: 5px;
  box-shadow: -8px 12px 20px 0 rgba(11,26,51,.63) !important;
  border-bottom: 5px solid ${palette.LightBlue};

  & label {
    display: block;
    margin: 5px 0px;
    text-align: left;
  }

  & input {
    height: 30px;
    border-radius: 8px;    
    border: 1px solid ${palette.Grey};
    margin-bottom: 10px;
    padding: 5px;
    width: 100%;
    background-color: ${palette.Dark};
    color: ${palette.LightGrey};
  }

  & input:focus {
    border: none;
    border-radius: 5px;
  }
`

export const SelectOption = styled.div `
  &.selection-name {
   & select {
      background: ${palette.Dark};;
      padding: 8px 12px;
      font-size: 18px;
      width: 73%;
      color: #fff;
      border: none;
      border-radius: 5px;
    }
  }
`

export const Table = styled.table `
  width: 100%;
  border-collapse: collapse;
  background: ${palette.LightDark};
  flex: 0 0 90.66667%;
  max-width: 90.66667%;
  box-shadow: -8px 12px 20px 0 rgba(11,26,51,.63) !important;
  margin: 0px auto;
`

export const Thead = styled.thead `
  background: ${palette.LightDark};
  border-top: 1px solid ${palette.Grey};
  border-bottom: 1px solid ${palette.Grey};
  & tr {
    & th {
      border: none;
      padding: 20px 12px;
      color: ${palette.LightBlue};
      font-weight: 500;
      letter-spacing: 1px;
      font-size: 14px;
      text-align: left;
    }
  }
`

export const Tbody = styled.tbody `
  & tr:hover {
    cursor: pointer;
  }

  & td {
    border: none;
    padding: 16px 12px;
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    color: ${palette.LightGrey};
  }
`
export const FormInputGroup = styled.div `
  text-align: left;
  margin: 20px 20% 20px 18%;
`

export const NavigationStyled = styled.nav`

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 95%;
  border-right: 2px solid ${palette.Grey};

  .avatar{
    width: 100%;
    padding: 1rem ;
    margin: 0px 10px;
    img {
      width: 70%;
    }
  }

  .nav-items{
    width: 100%;
    margin: 0 1rem;

    .icon-item {
      margin: 0px 10px;
    }

    .active-class{
      background-color: ${palette.Primary};
      color: white;
    }

    li {
      margin: 10px 0px;
      padding: 0;

        a {
          display: block;
          padding: .45rem 10px;
          position: relative;
          z-index: 10;
          text-transform: uppercase;
          text-decoration: none;
          transition: all .4s ease-in-out;
          font-weight: 600;
          letter-spacing: 1px;
          color: ${palette.LightGrey};

          &:hover{
            cursor: pointer;
            color: ${palette.Primary};
          }
          &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 50%;
            background-color: var( --primary-color);
            transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
            opacity: 0.21;
            z-index: -1;
          }
        }

        a:hover::before {
            width: 100%;
            height: 100%;
        }
      }
    }

    footer {
      width: 100%;
      p {
        padding: 1.3rem 0;
        font-size: 0.8rem;
        display: block;
        text-align: center;
        color: ${palette.LightGrey};
      }
    }
`

export const Navbar = styled.div `
  padding: 8px 0px;
  overflow: hidden;
  box-shadow: -8px 12px 20px 0 rgba(11,26,51,.63) !important;

  a {
    margin: 0px !important;
    padding: 0;
    border: none;
  }

  .left-navbar {
    float: left;
    display: flex;
    align-items: center;
    margin: 5px 20px;

    & a {
      & .navbar-icon {
        margin: 0px -5px;
      }
    }
    
  }

  .right-navbar {
    float: right;
    display: flex;
    align-self: center;
    margin: 10px 20px;

    & .admin-profile {
      display: flex;
      align-items: center;

      & .status {
        margin-right: 5px;
        & p {
          color: ${palette.LightBlue};
        }
        & h6 {
          color: ${palette.LightGrey};
          text-align: right;
        }
      }
    }
    
    & img {
      width: 40px;
      height: 40px;
      border-radius: 1.5rem;
      object-fit: cover;
    }
  }

  a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;

    &:hover {
      translate: 
      color: black;
    }
  }
` 

export const LayoutPage = styled.div `
  margin: 10px;
  
  h1 {
    color: ${palette.Primary};
  }

  & .top-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 60px;

    & .green-button {
      font-size: 14px;

      & a {
        color: #fff;
      }
    }
  }
`

export const AddTransactionPage = styled.div `
  margin: 0px 10% auto;
  h1 {
    color: ${palette.Primary};
    margin-top: 5%;
  }
`
export const FormInputTransaction = styled.div `
  width: 100%;
  background: ${palette.LightDark};
  border-radius: 5px;
  padding: 40px;
  margin-top: 2%;
  box-shadow: -8px 12px 20px 0 rgba(11,26,51,.63) !important;
  display: grid;
  grid-template-columns: minmax(auto, 33%) minmax(auto, 33%) 34%;
  grid-gap: .7rem;
  margin: 1rem auto;

  & label {
    color: ${palette.LightBlue};
  }

  & input {
    width: 100%;
    height: 40px;
    padding: 0px 15px;
    margin-top: 10px;
    border-radius: 5px;
    background: ${palette.Dark};
    font-size: 16px;
    color: ${palette.White};
  }

  & input:focus {
    border: none;
  }

  & .selection-name {
    width: 136%;
    margin-top: 10px;
  }

  & .primary-button , .danger-button {
    margin-top: 28px;
    width: 100%;
  }
`