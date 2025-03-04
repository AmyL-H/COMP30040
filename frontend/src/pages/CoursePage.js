// CoursePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CyberCityMap from '../components/CyberCityMap';
import Leaderboard from '../components/Leaderboard';
import './CoursePage.css';

const CoursePage = () => {
  const navigate = useNavigate();

  const courseSections = [
    { id: "cybersecurity", title: "Introduction to Cybersecurity", description: "Learn the basics of cybersecurity and protect your data.", progress: 100, locked: false },
    { id: "cryptography", title: "Cryptography and Encryption", description: "Understand encryption techniques and secure communications.", progress: 70, locked: false },
    { id: "network-security", title: "Network Security", description: "Explore how to secure networks from various threats.", progress: 0, locked: false },
    { id: "ethical-hacking", title: "Ethical Hacking and Penetration Testing", description: "Gain hands-on hacking experience ethically.", progress: 0, locked: false },
  ];

  // Dummy data for leaderboard
  const leaderboardData = [
    { username: "User123", xp: 1200 },
    { username: "CyberGuru", xp: 1100 },
    { username: "SecurityStar", xp: 1050 },
    { username: "HackerPro", xp: 950 },
    { username: "DataDefender", xp: 900 },
  ];

  // Function to navigate to course details page
  const goToCourseInfo = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className='coursepage-container'>
      <h1>Your Cybersecurity Journey</h1>
      <p>Progress through each stage to become a cybersecurity expert!</p>
      <br />
      {/* CyberCityMap */}
      <CyberCityMap 
        sections={courseSections} 
        onModuleClick={goToCourseInfo} 
      />
      <br />
      {/* Leaderboard */}
      <Leaderboard data={leaderboardData} />
    </div>
  );
};

export default CoursePage;
