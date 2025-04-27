import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, description, progress, locked, onClick }) => {
  return (
    <div className={`course-card ${locked ? 'locked' : ''}`} onClick={locked ? undefined : onClick}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        <p>{progress}% Completed</p>
      </div>
      <br/><br/>
      {locked && <p className="locked-message">🔒This course is locked. Complete previous courses to unlock.</p>}
    </div>
  );
};

export default CourseCard;
