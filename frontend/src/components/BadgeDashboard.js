// BadgeDashboard.js
import React from 'react';
import './BadgeDashboard.css';

const BadgeDashboard = () => (
  <div className="badge-dashboard">
    <h2>Your Achievements</h2>
    <div className="badge-grid">
      <div className="badge">🏆 Beginner Badge</div>
      <div className="badge">🎖️ Cyber Defender</div>
      <div className="badge">📜 Certified Pro</div>
    </div>
  </div>
);

export default BadgeDashboard;
