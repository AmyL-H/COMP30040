import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CyberCityMap from '../components/CyberCityMap';
import Leaderboard from '../components/Leaderboard';
import UserProgressDashboard from '../components/UserProgressDashboard';
import RevisionCards from '../components/RevisionCards';
import './CoursePage.css';
import confetti from 'canvas-confetti';

const CoursePage = () => {
  const navigate = useNavigate();
  const [userProgress, setUserProgress] = useState({});
  const [userXp, setUserXp] = useState(0);
  const [toastMessage, setToastMessage] = useState('');
  const [revisionBadge, setRevisionBadge] = useState(''); // 🧠 New state

  useEffect(() => {
    const loadUserData = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        setUserProgress(user.progress || {});
        setUserXp(user.xp || 0);
      }
    };

    loadUserData();
    window.addEventListener('progressUpdated', loadUserData);

    return () => {
      window.removeEventListener('progressUpdated', loadUserData);
    };
  }, []);

  useEffect(() => {
    if (Object.keys(userProgress).length > 0) {
      checkUnlocks();
      checkRevisionUnlocks();
    }
  }, [userProgress]);

  const checkUnlocks = () => {
    const unlocks = [
      { quizKey: 'cybersecurityquiz5', moduleName: 'Cryptography & Encryption', moduleId: 'cryptography' },
      { quizKey: 'cryptographyquiz5', moduleName: 'Network Security', moduleId: 'network-security' },
      { quizKey: 'networksecurityquiz5', moduleName: 'Ethical Hacking', moduleId: 'ethical-hacking' },
    ];

    unlocks.forEach(({ quizKey, moduleName }) => {
      if (userProgress?.[quizKey] >= 50) {
        setToastMessage(`🎉 New Module Unlocked: ${moduleName}!`);
        fireConfetti();
        setTimeout(() => setToastMessage(''), 3000);
      }
    });
  };

  const checkRevisionUnlocks = () => {
    const lessonNames = {
      lesson1: 'Lesson 1',
      lesson2: 'Lesson 2',
      lesson3: 'Lesson 3',
      lesson4: 'Lesson 4',
      lesson5: 'Lesson 5',
    };

    Object.keys(lessonNames).forEach(lessonId => {
      if (userProgress[lessonId] >= 50) {
        const badgeAlreadyShown = localStorage.getItem(`badge_${lessonId}`);
        if (!badgeAlreadyShown) {
          setRevisionBadge(`🧠 ${lessonNames[lessonId]} Revision Unlocked!`);
          localStorage.setItem(`badge_${lessonId}`, 'shown');

          setTimeout(() => setRevisionBadge(''), 3000); // Auto hide after 3s
        }
      }
    });
  };

  const fireConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.3 }
    });
  };

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
      locked: (userProgress?.['lesson1'] || 0) < 50,
    },
    {
      id: "network-security",
      title: "Network Security",
      description: "Explore how to secure networks from various threats.",
      progress: userProgress?.['lesson11'] || 0,
      locked: (userProgress?.['lesson6'] || 0) < 50,
    },
    {
      id: "ethical-hacking",
      title: "Ethical Hacking and Penetration Testing",
      description: "Gain hands-on hacking experience ethically.",
      progress: userProgress?.['lesson16'] || 0,
      locked: (userProgress?.['lesson11'] || 0) < 50,
    },
  ];

  const goToCourseInfo = (courseId) => {
    navigate(`/course/${courseId}-intro`);
  };

  return (
    <div className="coursepage-container">
      <h1>Your Cybersecurity Journey</h1>
      <p>Progress through each stage to become a cybersecurity expert!</p>

      {/* 🎉 Toast */}
      {toastMessage && (
        <div className="toast-popup">{toastMessage}</div>
      )}

      {/* 🧠 Revision Badge */}
      {revisionBadge && (
        <div className="badge-popup">{revisionBadge}</div>
      )}

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
        userProgress={userProgress}
      />

      <br />

      <Leaderboard />
    </div>
  );
};

export default CoursePage;
