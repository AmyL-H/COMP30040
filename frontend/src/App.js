import logo from './logo.svg';
import './App.css';
import React from 'react';
import Register from './components/Register'; // adjust the path based on your structure


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Cybersecurity Education</h1>
      <main>
          <Register />
      </main>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
