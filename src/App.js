import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { FaHeart} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome <FaHeart style={{color: 'pink'}}/></h1> 
      </header>
    </div>
  );
}

export default App;