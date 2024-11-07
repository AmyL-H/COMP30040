import React from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = ({ toggleDarkMode }) => {
  return (
    <div className="dark-mode-toggle" onClick={toggleDarkMode}>
      <span>Toggle Dark Mode</span>
    </div>
  );
};

export default DarkModeToggle;
