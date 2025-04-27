import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CyberCityMap from '../components/CyberCityMap';
import Leaderboard from '../components/Leaderboard';
import UserProgressDashboard from '../components/UserProgressDashboard';
import RevisionCards from '../components/RevisionCards';
import './CoursePage.css';

const CoursePage = () => {
  const navigate = useNavigate();
  const [userProgress, setUserProgress] = useState({});
  const [userXp, setUserXp] = useState(0);

  useEffect(() => {
    const loadUserData = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        setUserProgress(user.progress || {});
        setUserXp(user.xp || 0);
      }
    };

    loadUserData(); // Initial load

    window.addEventListener('progressUpdated', loadUserData);

    return () => {
      window.removeEventListener('progressUpdated', loadUserData);
    };
  }, []);

  // Define courseSections based on real user progress
  const courseSections = [
    {
      id: "cybersecurity",
      title: "Introduction to Cybersecurity",
      description: "Learn the basics of cybersecurity and protect your data.",
      progress: userProgress?.['lesson1'] || 0,
      locked: false,
    },
    {
      id: "cryptography",
      title: "Cryptography and Encryption",
      description: "Understand encryption techniques and secure communications.",
      progress: userProgress?.['lesson6'] || 0,
      locked: (userProgress?.['lesson1'] || 0) < 50, // Unlocks after finishing lesson1
    },
    {
      id: "network-security",
      title: "Network Security",
      description: "Explore how to secure networks from various threats.",
      progress: userProgress?.['lesson11'] || 0,
      locked: (userProgress?.['lesson6'] || 0) < 50, // Unlocks after finishing lesson6
    },
    {
      id: "ethical-hacking",
      title: "Ethical Hacking and Penetration Testing",
      description: "Gain hands-on hacking experience ethically.",
      progress: userProgress?.['lesson16'] || 0,
      locked: (userProgress?.['lesson11'] || 0) < 50, // Unlocks after finishing lesson11
    },
  ];

  const goToCourseInfo = (courseId) => {
    navigate(`/course/${courseId}-intro`);
  };

  return (
    <div className='coursepage-container'>
      <h1>Your Cybersecurity Journey</h1>
      <p>Progress through each stage to become a cybersecurity expert!</p>

      <div className="dashboard-section">
        <div className="left-panel">
          <UserProgressDashboard userXp={userXp} userProgress={userProgress} />
        </div>
        <div className="right-panel">
          <RevisionCards />
        </div>
      </div>

      <br />

      <CyberCityMap
        sections={courseSections}
        onModuleClick={goToCourseInfo}
      />

      <br />

      <Leaderboard />
    </div>
  );
};

export default CoursePage;
