// CourseCard.js
import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, description, progress, locked }) => {
  return (
    <div className={`course-card ${locked ? 'locked' : ''}`}>
      <div className="course-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p>{progress}% Completed</p>
      </div>
      {locked && <div className="lock-overlay">🔒 Locked</div>}
    </div>
  );
};

export default CourseCard;
