import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/homepagevid.mp4' autoPlay loop muted />
      <h1>YOUR CYBERSECURITY QUEST AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Link to="/coursepage" className='btn-link'>
          <button className='btn btn--outline btn--large'>GET STARTED</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;