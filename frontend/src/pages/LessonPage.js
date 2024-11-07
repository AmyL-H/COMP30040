import React from 'react';
import Quiz from '../components/Quiz';

function LessonPage() {
  const sampleQuestions = [
    {
      questionText: 'What is cybersecurity?',
      answerOptions: [
        { answerText: 'Protecting data from threats', isCorrect: true },
        { answerText: 'Creating viruses', isCorrect: false },
        { answerText: 'Programming', isCorrect: false },
      ],
    },
    // Additional questions
  ];

  return (
    <div className="lesson-page">
      <h1>Lesson Title</h1>
      <p>Lesson content goes here...</p>
      <h2>Quiz</h2>
      <Quiz
        question="What is the primary purpose of encryption?"
        options={['To store data', 'To secure data', 'To delete data', 'To backup data']}
        correctAnswer="To secure data"
      />
    </div>
  );
}

export default LessonPage;
