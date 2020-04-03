import React from 'react';
import logo from './logo.svg';
import './App.css';
import Swal from 'sweetalert2';

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
      </header>
    </div>
  );
}

function showAlert() {
  Swal.fire({
    title: 'Success',
    text: 'You have been alerted!',
    icon: 'success',
    confirmButtonText: 'Cool'
  });
}

export default App;
