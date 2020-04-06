import React from 'react';
import logo from './logo.svg';
import './App.css';
import showAlert from './Exercise 1/button';
import DogDetails from './DogDetails'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => showAlert()}>
          Click here
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DogDetails name="Roberto" photo='https://img.ibxk.com.br/2019/07/16/16123213283052.jpg?w=1120&h=420&mode=crop&scale=both'/>
      </header>
    </div>
  );
}

export default App;
