import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateBeerForm from './CreateBeerFormik/CreateBeerFormik'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
        <CreateBeerForm />
      </header>
    </div>
  );
}

export default App;