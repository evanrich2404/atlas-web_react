import React from 'react';
import './Header.css';
import logo from '../assets/holberton_logo.png';

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="holberton_logo" alt="logo" />
      <h1>School dashboard</h1>
    </header>
  );
};

export default Header;
