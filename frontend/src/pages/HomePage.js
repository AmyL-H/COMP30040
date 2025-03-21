// frontend/src/components/HomePage.js
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import './HomePage.css';

const HomePage = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };

  // Expose toggle via window for logo click detection from Navbar
  window.toggleHomepageSidebar = toggleSidebar;

  return (
    <div className="homepage-wrapper">
      <HeroSection />
      <Sidebar show={showSidebar} />
      <Footer />
    </div>
  );
};

export default HomePage;
