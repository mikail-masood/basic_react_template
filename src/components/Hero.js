import React from 'react';
import { Button } from './Button';
import'./Hero.css';
import '../App.css';


function Hero() {
  return (
    <div className= 'hero-container'>
      <video src="../media/videos/video/video-2.mp4" autoPlay loop muted />
      <h1>
        INSERT TITLE TEXT HERE
      </h1>
      <p>insert subtitle text here if you feel like it</p>
      <div classname='hero-btns' >
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          Get Started
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          Watch Something <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  )
}

export default Hero
