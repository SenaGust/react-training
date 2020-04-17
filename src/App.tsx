import React from 'react';
import logo from './logo.svg';
import './App.css';
import DogDetails from './DogDetails'
import Swal from 'sweetalert2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <DogDetails 
          name="Roberto" 
          photo='https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2019/11/Maddie-f1-600x600.jpg'
          onBark={() => {
            Swal.fire({
              title: 'Woof! Woof!'
            });
        }} />

      </header>
    </div>
  );
}

export default App;
