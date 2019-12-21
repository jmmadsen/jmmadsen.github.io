import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Header/index.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A simple website to introduce myself
        </p>
        <a
          className="App-link"
          href="https://github.com/jmmadsen/jmmadsen.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built using React - see my code here
        </a>
      </header>
    </div>
  );
}

export default App;
