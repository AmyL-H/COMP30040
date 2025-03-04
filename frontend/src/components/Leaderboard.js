// Leaderboard.js
import React from 'react';
import './Leaderboard.css';

const Leaderboard = ({ data = [] }) => (
  <div className="leaderboard">
    <h2>Leaderboard</h2>
    <ul>
      {data.length > 0 ? (
        data.map((user, index) => (
          <li key={user.username} style={{ backgroundColor: getColor(index) }}>
            <span>{index + 1}. {user.username}</span>
            <span>{user.xp} XP</span>
          </li>
        ))
      ) : (
        <p>No leaderboard data available.</p>
      )}
    </ul>
  </div>
);

// Helper function to set background colors for top ranks
const getColor = (rank) => {
  switch (rank) {
    case 0: return '#38bdf8'; // Gold
    case 1: return '#60a5fa'; // Silver
    case 2: return '#93c5fd'; // Bronze
    default: return '#475569'; // Default
  }
};

export default Leaderboard;
