import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Leaderboard.css';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/leaderboard')
      .then(response => {
        const sortedData = response.data.sort((a, b) => b.xp - a.xp);
        setLeaderboardData(sortedData);
      })
      .catch(error => {
        console.error('Failed to fetch leaderboard data', error);
      });
  }, []);

  const getRankBadge = (index) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return "";
  };

  return (
    <div className="leaderboard-container">
      <h2>🏆 Leaderboard</h2>
      <ul className="leaderboard-list">
        {leaderboardData.map((user, index) => (
          <li 
            key={user._id} 
            className={`leaderboard-item ${index < 3 ? 'top-rank' : 'regular-rank'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="rank">{getRankBadge(index)} {index + 1}.</span>
            <span className="username">{user.name}</span>
            <span className="xp">{user.xp} XP</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
