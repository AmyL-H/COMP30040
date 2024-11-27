import React from 'react';
import { useParams } from 'react-router-dom';
import Lesson1 from '../pages/IntroToCyberSecurity/Lesson1';
import Lesson2 from '../pages/IntroToCyberSecurity/Lesson2';

const LessonHandler = () => {
  const { lessonId } = useParams();

  switch (lessonId) {
    case 'lesson1':
      return <Lesson1 />;
    case 'lesson2':
      return <Lesson2 />;
    default:
      return <h2>Lesson Not Found</h2>;
  }
};

export default LessonHandler;
