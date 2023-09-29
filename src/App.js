import './App.css';
import React, { Component } from 'react';
import {FaHeart} from 'react-icons/fa';


function App() {
  return (
    <div className="App" id="App">
      <header className="App-header" id="App-header">
        <h1 class= "welcom" id="welcom">Welcome <FaHeart style={{color: 'pink'}}/></h1> 
      </header>
      <div>
        <h3 class="owner_question" id="owner_question">What are you looking after?</h3>
        <button>Human</button>
        <button>Dog</button>
      </div>
    </div>

  );
}

export default App;