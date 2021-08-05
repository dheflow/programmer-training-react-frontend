import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 20px 0px;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  
  &:hover {
    background: palevioletred;
    color: #fff;
  }
`
export const Card = styled.div `
  width: 25%;
  height: auto;
  background: #fff;
  text-align: center;
  display: block;
  border: 1px solid palevioletred;
  margin: 15vh auto;
  padding: 50px 20px;
  border-radius: 5px;

  & label {
    display: block;
    margin: 5px 0px;
  }

  & input {
    height: 30px;
    border-radius: 5px;
    border: 2px solid palevioletred;
    margin-bottom: 10px;
    padding: 5px;
    width: 70%;
  }

  & input:focus {
    border: none;
  }
`

export const SelectOption = styled.div `
  &.selection-name {
   & select {
      background: palevioletred;
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
`

export const Thead = styled.thead `
  background: palevioletred;
  & tr {
    & th {
      border: none;
      padding: 16px 0px;
      color: #fff;
      font-weight: 500;
      letter-spacing: 0.04cm;
    }
  }
`

export const Tbody = styled.tbody `
  & tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  & tr:hover {
    background: palevioletred;
    color: #fff;
    cursor: pointer;
  }

  & td {
    border: none;
    padding: 16px 12px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
  }
`
