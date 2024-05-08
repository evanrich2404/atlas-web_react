import React from 'react';
import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-header-content'>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </div>
      </header>
      <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
      </div>
      <footer className="App-footer">
        <p>
          {getFooterCopy(true)} - {getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
