import './welcome.css';
import './RegisterForm.js'
import React, { Component } from 'react';
import {FaHeart} from 'react-icons/fa';
import dog from "./dog.svg";
import baby from "./baby.svg";
import {Link} from "react-router-dom";

const Welcome = () => {
  return (
    <div className="Welcome" id="Welcome">
      <header className="Welcome-header" id="Welcome-header">
        <h1 class= "welcome" id="welcome">Welcome <FaHeart style={{color: 'pink'}}/></h1> 
      </header>
      <div class="welcome_question" id="welcome_question">
        <p class="owner_question" id="owner_question">What are you looking after with this application?</p>
        <div class="button_section">
          <Link to="/RegisterForm/human"><button class="baby_button"><img class="baby_img"src={baby}/>Human</button></Link>
          <Link to="/RegisterForm/dog"><button class="dog_button"><img class="dog_img"src={dog}/>Dog</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;