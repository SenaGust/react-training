import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateBeerFormik from './components/createBeerFormik/CreateBeerFormik'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
        <CreateBeerFormik />
      </header>
    </div>
  );
}

export default App;