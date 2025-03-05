import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson1.css';

function NetworkLesson1() {
  const [showQuestions, setShowQuestions] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 1: Introduction to Network Security</h1>
      
      {/* Text Explanation */}
      <section className="lesson-section">
        <p className="lesson-text">
          In this lesson, you'll learn the fundamentals of network security. Understand key concepts, protocols, and models that ensure secure data transmission across networks.
        </p>
      </section>
      
      {/* Animated Flowchart */}
      <section className="lesson-section">
        <h2>Animated Flowchart</h2>
        <p className="lesson-text">
          [Interactive Flowchart Placeholder: See how data flows securely through a network]
        </p>
      </section>
      
      {/* Guided Questions */}
      <section className="lesson-section">
        <h2>Guided Questions</h2>
        <button
          className={`toggle-button ${showQuestions ? "active" : ""}`}
          onClick={() => setShowQuestions(!showQuestions)}
        >
          {showQuestions ? 'Hide Questions' : 'Show Questions'}
        </button>
        <div className={`tips-container ${showQuestions ? "visible" : "hidden"}`}>
          <div className="tip-card">
            <h3>❓ Question 1</h3>
            <p>How do secure protocols protect data transmission?</p>
          </div>
          <div className="tip-card">
            <h3>❓ Question 2</h3>
            <p>What are the main components of a secure network architecture?</p>
          </div>
          <div className="tip-card">
            <h3>❓ Question 3</h3>
            <p>How can vulnerabilities in network protocols be mitigated?</p>
          </div>
        </div>
      </section>  
    </div>
  );
}

export default NetworkLesson1;