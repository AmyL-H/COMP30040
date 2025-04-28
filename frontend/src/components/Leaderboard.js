import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Leaderboard.css';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const localUser = JSON.parse(localStorage.getItem('user')); // <-- bring local user

  useEffect(() => {
    axios.get('http://localhost:5000/api/leaderboard')
      .then(response => {
        let data = response.data;

        // Inject local user's XP update if they exist
        if (localUser) {
          const found = data.find(entry => entry.name === localUser.name);
          if (found) {
            found.xp = localUser.xp; // Update XP
          } else {
            // If not found, optionally push (optional)
            data.push({ name: localUser.name, xp: localUser.xp, _id: 'local-user' });
          }
        }

        const sortedData = data.sort((a, b) => b.xp - a.xp);
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
            key={user._id || `${user.name}-${index}`} 
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
