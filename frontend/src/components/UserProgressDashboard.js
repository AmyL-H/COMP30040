// src/components/UserProgressDashboard.js
import React, { useEffect, useState } from 'react';
import './UserProgressDashboard.css';

const UserProgressDashboard = () => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));
  const [quizCount, setQuizCount] = useState(0);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.progress) {
      const completed = Object.values(storedUser.progress).filter(score => score >= 50).length;
      setQuizCount(completed);
      setUser(storedUser);
    }
  }, []);

  const totalQuizzes = 25;
  const progressPercent = Math.round((quizCount / totalQuizzes) * 100);

  if (!user) return <p>Please log in to view your dashboard.</p>;

  return (
    <div className="progress-dashboard">
      <h2>🚀 Welcome back, {user.name}!</h2>
      <br/>
      <div className="xp-box">
        <h3>⭐ Total XP</h3>
        <p className="xp-amount">{user.xp || 0} XP</p>
      </div>

      <div className="progress-box">
        <h3>📘 Course Progress</h3>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
        <p>{progressPercent}% complete — {quizCount} of {totalQuizzes} quizzes passed</p>
      </div>
    </div>
  );
};

export default UserProgressDashboard;
