import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class = 'box'>
        <img src={require('./K.jpg')}  alt="Logo" />
        <img src={require('./G.png')} class ='App-logo' alt="Logo" />
        <img src={require('./L.jpg')} alt="Logo" />
        <img src={require('./N.png')} alt="Logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
