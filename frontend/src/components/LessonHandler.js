// src/components/LessonHandler.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Import all lesson components for each course
import IntroLesson1 from '../pages/IntroToCyberSecurity/Lesson1Door';
import IntroLesson2 from '../pages/IntroToCyberSecurity/Lesson2Door';
import IntroLesson3 from '../pages/IntroToCyberSecurity/Lesson3Door';
import IntroLesson4 from '../pages/IntroToCyberSecurity/Lesson4Door';
import IntroLesson5 from '../pages/IntroToCyberSecurity/Lesson5Door';

import CryptoLesson1 from '../pages/Cryptography&Encryption/CryptoLesson1';
import CryptoLesson2 from '../pages/Cryptography&Encryption/CryptoLesson2';
import CryptoLesson3 from '../pages/Cryptography&Encryption/CryptoLesson3';
import CryptoLesson4 from '../pages/Cryptography&Encryption/CryptoLesson4';
import CryptoLesson5 from '../pages/Cryptography&Encryption/CryptoLesson5';

import NetworkLesson1 from '../pages/NetworkSecurity/NetworkLesson1';
import NetworkLesson2 from '../pages/NetworkSecurity/NetworkLesson2';
import NetworkLesson3 from '../pages/NetworkSecurity/NetworkLesson3';
import NetworkLesson4 from '../pages/NetworkSecurity/NetworkLesson4';
import NetworkLesson5 from '../pages/NetworkSecurity/NetworkLesson5';

import EthicalLesson1 from '../pages/EthicalHacking&PenetrationTesting/EthicalLesson1';
import EthicalLesson2 from '../pages/EthicalHacking&PenetrationTesting/EthicalLesson2';
import EthicalLesson3 from '../pages/EthicalHacking&PenetrationTesting/EthicalLesson3';
import EthicalLesson4 from '../pages/EthicalHacking&PenetrationTesting/EthicalLesson4';
import EthicalLesson5 from '../pages/EthicalHacking&PenetrationTesting/EthicalLesson5';

const LessonHandler = () => {
  const { lessonId, courseId } = useParams();
  const navigate = useNavigate();
  // Retrieve user progress from localStorage
  const storedUser = localStorage.getItem('user');
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

  // Function to check if a lesson is unlocked
  const isLessonUnlocked = (courseId, lessonId) => {
    // Always unlock the first lesson of any course
    if (lessonId === 'lesson1') return true;

    // Extract lesson number (e.g., "lesson3" becomes 3)
    const lessonNumber = parseInt(lessonId.replace('lesson', ''));
    if (isNaN(lessonNumber) || lessonNumber <= 1) return true;

    // Determine the previous lesson's id (e.g., "lesson2" for "lesson3")
    const previousLessonId = `lesson${lessonNumber - 1}`;

    // Check if the user has a progress entry for the previous lesson with a score >= 50
    return user && user.progress && user.progress[previousLessonId] && user.progress[previousLessonId] >= 50;
  };

  // Update user state if localStorage changes (e.g., after taking a quiz)
  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  // Define lesson mapping per course
  const lessonMap = {
    "cybersecurity": {
      lesson1: <IntroLesson1 />,
      lesson2: <IntroLesson2 />,
      lesson3: <IntroLesson3 />,
      lesson4: <IntroLesson4 />,
      lesson5: <IntroLesson5 />,
    },
    "cryptography": {
      lesson1: <CryptoLesson1 />,
      lesson2: <CryptoLesson2 />,
      lesson3: <CryptoLesson3 />,
      lesson4: <CryptoLesson4 />,
      lesson5: <CryptoLesson5 />,
    },
    "network-security": {
      lesson1: <NetworkLesson1 />,
      lesson2: <NetworkLesson2 />,
      lesson3: <NetworkLesson3 />,
      lesson4: <NetworkLesson4 />,
      lesson5: <NetworkLesson5 />,
    },
    "ethical-hacking": {
      lesson1: <EthicalLesson1 />,
      lesson2: <EthicalLesson2 />,
      lesson3: <EthicalLesson3 />,
      lesson4: <EthicalLesson4 />,
      lesson5: <EthicalLesson5 />,
    }
  };

  // If the lesson is locked, show a message
  if (!isLessonUnlocked(courseId, lessonId)) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
        <h2>Lesson Locked</h2>
        <p>
          You must pass the previous lesson's quiz with a score of at least 50% to unlock this lesson.
        </p>
      </div>
    );
  }

  // Otherwise, render the lesson component
  return lessonMap[courseId]?.[lessonId] || <h2>Lesson Not Found</h2>;
};

export default LessonHandler;
