import React from 'react';
import { useParams } from 'react-router-dom';

// Intro to Cybersecurity Lessons
import IntroLesson1 from '../pages/IntroToCyberSecurity/Lesson1';
import IntroLesson2 from '../pages/IntroToCyberSecurity/Lesson2';
import IntroLesson3 from '../pages/IntroToCyberSecurity/Lesson3';
import IntroLesson4 from '../pages/IntroToCyberSecurity/Lesson4';
import IntroLesson5 from '../pages/IntroToCyberSecurity/Lesson5';

// Cryptography Lessons
import CryptoLesson1 from '../pages/Cryptography&Encryption/Lesson1';
import CryptoLesson2 from '../pages/Cryptography&Encryption/Lesson2';
import CryptoLesson3 from '../pages/Cryptography&Encryption/Lesson3';
import CryptoLesson4 from '../pages/Cryptography&Encryption/Lesson4';
import CryptoLesson5 from '../pages/Cryptography&Encryption/Lesson5';

const LessonHandler = () => {
  const { lessonId, courseId } = useParams();

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
  };

  return lessonMap[courseId]?.[lessonId] || <h2>Lesson Not Found</h2>;
};

export default LessonHandler;
