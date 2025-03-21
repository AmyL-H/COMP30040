import React from 'react';
import { useNavigate } from 'react-router-dom';
import CyberCityMap from '../components/CyberCityMap';
import Leaderboard from '../components/Leaderboard';
import UserProgressDashboard from '../components/UserProgressDashboard';
import './CoursePage.css';

const CoursePage = () => {
  const navigate = useNavigate();

  const courseSections = [
    { id: "cybersecurity", title: "Introduction to Cybersecurity", description: "Learn the basics of cybersecurity and protect your data.", progress: 100, locked: false },
    { id: "cryptography", title: "Cryptography and Encryption", description: "Understand encryption techniques and secure communications.", progress: 70, locked: false },
    { id: "network-security", title: "Network Security", description: "Explore how to secure networks from various threats.", progress: 0, locked: false },
    { id: "ethical-hacking", title: "Ethical Hacking and Penetration Testing", description: "Gain hands-on hacking experience ethically.", progress: 0, locked: false },
  ];

  // Function to navigate to the module intro page
  const goToCourseInfo = (courseId) => {
    navigate(`/course/${courseId}-intro`);
  };

  return (
    <div className='coursepage-container'>
      <h1>Your Cybersecurity Journey</h1>
      <p>Progress through each stage to become a cybersecurity expert!</p>

      {/* 🧠 Add Progress Summary */}
      <UserProgressDashboard />

      <br />
      {/* Render the module overview map */}
      <CyberCityMap 
        sections={courseSections} 
        onModuleClick={goToCourseInfo} 
      />
      <br />
      {/* Render the leaderboard fetched from the backend */}
      <Leaderboard />
    </div>
  );
};

export default CoursePage;
