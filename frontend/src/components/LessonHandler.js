import React from 'react';
import { useParams } from 'react-router-dom';
import Lesson1 from '../pages/IntroToCyberSecurity/Lesson1';
import Lesson2 from '../pages/IntroToCyberSecurity/Lesson2';
import Lesson3 from '../pages/IntroToCyberSecurity/Lesson3';
import Lesson4 from '../pages/IntroToCyberSecurity/Lesson4';
import Lesson5 from '../pages/IntroToCyberSecurity/Lesson5';

const LessonHandler = () => {
  const { lessonId } = useParams();

  switch (lessonId) {
    case 'lesson1':
      return <Lesson1 />;
    case 'lesson2':
      return <Lesson2 />;
    case 'lesson3':
      return <Lesson3 />;
    case 'lesson4':
      return <Lesson4 />;
    case 'lesson5':
      return <Lesson5 />;
    default:
      return <h2>Lesson Not Found</h2>;
  }
};

export default LessonHandler;
