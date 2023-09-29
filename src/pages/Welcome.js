import './welcome.css';
import React, { Component } from 'react';
import {FaHeart} from 'react-icons/fa';
import dog from "./dog.svg";
import baby from "./baby.svg";
import {Link} from "react-router-dom";

const Welcome = () => {
  return (
    <div className="App" id="App">
      <header className="App-header" id="App-header">
        <h1 class= "welcom" id="welcom">Welcome <FaHeart style={{color: 'pink'}}/></h1> 
      </header>
      <div class="app_question" id="app_question">
        <p class="owner_question" id="owner_question">What are you looking after with this application?</p>
        <div class="button_section">
          <Link to="/register_form"><button class="baby_button"><img class="baby_img"src={baby}/>Human</button></Link>
          <Link to="/register_form"><button class="dog_button"><img class="dog_img"src={dog}/>Dog</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;