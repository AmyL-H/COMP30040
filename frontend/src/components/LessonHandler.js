import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Intro to Cybersecurity Lessons
import IntroLesson1 from '../pages/IntroToCyberSecurity/Lesson1Door';
import IntroLesson2 from '../pages/IntroToCyberSecurity/Lesson2Door';
import IntroLesson3 from '../pages/IntroToCyberSecurity/Lesson3Door';
import IntroLesson4 from '../pages/IntroToCyberSecurity/Lesson4Door';
import IntroLesson5 from '../pages/IntroToCyberSecurity/Lesson5Door';

// Cryptography & Encryption Lessons
import CryptoLesson1 from '../pages/Cryptography&Encryption/Lesson1';
import CryptoLesson2 from '../pages/Cryptography&Encryption/Lesson2';
import CryptoLesson3 from '../pages/Cryptography&Encryption/Lesson3';
import CryptoLesson4 from '../pages/Cryptography&Encryption/Lesson4';
import CryptoLesson5 from '../pages/Cryptography&Encryption/Lesson5';

// Network Security Lessons
import NetworkLesson1 from '../pages/NetworkSecurity/Lesson1';
import NetworkLesson2 from '../pages/NetworkSecurity/Lesson2';
import NetworkLesson3 from '../pages/NetworkSecurity/Lesson3';
import NetworkLesson4 from '../pages/NetworkSecurity/Lesson4';
import NetworkLesson5 from '../pages/NetworkSecurity/Lesson5';

// Ethical Hacking & Penetration Testing Lessons
import EthicalLesson1 from '../pages/EthicalHacking&PenetrationTesting/Lesson1';
import EthicalLesson2 from '../pages/EthicalHacking&PenetrationTesting/Lesson2';
import EthicalLesson3 from '../pages/EthicalHacking&PenetrationTesting/Lesson3';
import EthicalLesson4 from '../pages/EthicalHacking&PenetrationTesting/Lesson4';
import EthicalLesson5 from '../pages/EthicalHacking&PenetrationTesting/Lesson5';

const LessonHandler = () => {
  const { lessonId, courseId } = useParams();
  const [user, setUser] = useState(null);

  // Function to update user state from localStorage
  const updateUser = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('Error parsing user data:', err);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    updateUser();
    // Listen for the custom event dispatched by UniversalQuiz
    window.addEventListener('progressUpdated', updateUser);
    return () => {
      window.removeEventListener('progressUpdated', updateUser);
    };
  }, [lessonId, courseId]);

  // Check if a lesson is unlocked
  const isLessonUnlocked = (lessonId) => {
    if (lessonId === 'lesson1') return true;
    const lessonNumber = parseInt(lessonId.replace('lesson', ''), 10);
    if (isNaN(lessonNumber) || lessonNumber <= 1) return true;
    const previousLessonId = `lesson${lessonNumber - 1}`;
    return user && user.progress && Number(user.progress[previousLessonId]) >= 50;
  };

  const lessonMap = {
    cybersecurity: {
      lesson1: <IntroLesson1 />,
      lesson2: <IntroLesson2 />,
      lesson3: <IntroLesson3 />,
      lesson4: <IntroLesson4 />,
      lesson5: <IntroLesson5 />,
    },
    cryptography: {
      lesson1: <CryptoLesson1 />,
      lesson2: <CryptoLesson2 />,
      lesson3: <CryptoLesson3 />,
      lesson4: <CryptoLesson4 />,
      lesson5: <CryptoLesson5 />,
    },
    'network-security': {
      lesson1: <NetworkLesson1 />,
      lesson2: <NetworkLesson2 />,
      lesson3: <NetworkLesson3 />,
      lesson4: <NetworkLesson4 />,
      lesson5: <NetworkLesson5 />,
    },
    'ethical-hacking': {
      lesson1: <EthicalLesson1 />,
      lesson2: <EthicalLesson2 />,
      lesson3: <EthicalLesson3 />,
      lesson4: <EthicalLesson4 />,
      lesson5: <EthicalLesson5 />,
    }
  };

  if (!isLessonUnlocked(lessonId)) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
        <h2>Lesson Locked</h2>
        <p>You must pass the previous lesson's quiz with a score of at least 50% to unlock this lesson.</p>
      </div>
    );
  }

  return lessonMap[courseId]?.[lessonId] || <h2>Lesson Not Found</h2>;
};

export default LessonHandler;
