import React, { useEffect, useState } from 'react';
import './UserProgressDashboard.css';

const UserProgressDashboard = () => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));
  const [quizCount, setQuizCount] = useState(0);


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.progress) {
      const progress = storedUser.progress;
      const completed = Object.values(progress).filter(score => score >= 50).length;
      setQuizCount(completed);
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    const refreshUser = () => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) setUser(storedUser);
    };
  
    window.addEventListener('progressUpdated', refreshUser);
    return () => window.removeEventListener('progressUpdated', refreshUser);
  }, []);
  

  const totalQuizzes = 25;
  const progressPercent = Math.round((quizCount / totalQuizzes) * 100);

  if (!user) return <p>Please log in to view your dashboard.</p>;

  return (
    <div className="progress-dashboard">
      <h2>🚀 Welcome back, {user.name}!</h2>
      <br/>
      {/* XP Summary */}
      <div className="xp-box">
        <h3>⭐ Total XP</h3><br/>
        <p className="xp-amount">{user.xp || 0} XP</p>
      </div>

      {/* Progress Bar */}
      <div className="progress-box">
        <h3>📘 Course Progress</h3>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
        <p>{progressPercent}% complete — {quizCount} of {totalQuizzes} quizzes passed</p>

        {/* 🏆 Milestone Badges */}
        <div className="milestone-badges">
          {quizCount >= 5 && <div className="badge">🎓 Rookie Defender</div>}
          {quizCount >= 10 && <div className="badge">🔍 Cyber Scout</div>}
          {quizCount >= 15 && <div className="badge">🛡️ Security Analyst</div>}
          {quizCount >= 20 && <div className="badge">👨‍💻 Threat Hunter</div>}
          {quizCount === 25 && <div className="badge final">🏆 Master of Cyber Defense</div>}
        </div>

        {quizCount === totalQuizzes && (
          <div className="badge-complete">🏅 You’ve completed the entire journey!</div>
        )}
      </div>
    </div>
  );
};

export default UserProgressDashboard;
