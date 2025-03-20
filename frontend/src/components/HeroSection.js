import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing user from localStorage', error);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);

  return (
    <div className='hero-container'>
      <video src='/videos/homepagevid.mp4' autoPlay loop muted />
      <h1>YOUR CYBERSECURITY QUEST AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Link to={user ? "/coursepage" : "/sign-up"} className='btn-link'>
          <button className='btn btn--outline btn--large'>GET STARTED</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
