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

      {/* Motivational Message - Ripple #1 */}
      <div className='hero-motivation'>
        <h2>Not convinced?</h2>
        <p>Test your decryption skills and find the hidden intel that lurks upon this page.</p>
        <p>Unlock the all possibilities this course can truly offer you.</p>
        <p>All it takes is one click...</p>
        <p>Can you find it?</p>
      </div>
    </div>
  );
}

export default HeroSection;
