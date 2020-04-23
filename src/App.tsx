import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateBeerForm from './CreateBeerForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <CreateBeerForm />
    </div>
  );
}

export default App;
