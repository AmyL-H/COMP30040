import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Community.css';

const chatRooms = [
  { name: 'General Chatroom', route: 'general', icon: '💬' },
  { name: 'Intro to Cybersecurity', route: 'cybersecurity', icon: '🔐' },
  { name: 'Cryptography & Encryption', route: 'cryptography', icon: '🔑' },
  { name: 'Network Security', route: 'network', icon: '🌐' },
  { name: 'Ethical Hacking & Penetration Testing', route: 'hacking', icon: '🕵️‍♂️' },
];

const Community = () => {
  const navigate = useNavigate();

  return (
    <div className="community-container">
      <h1 className="community-title">👥 Cyber Community</h1>
      <p className="community-intro">Join a chatroom to ask questions, share insights, or connect with others.</p>

      <div className="chatroom-grid">
        {chatRooms.map((room, index) => (
          <div
            key={index}
            className="chatroom-card"
            onClick={() => navigate(`/community/${room.route}`)}
          >
            <div className="chatroom-icon">{room.icon}</div>
            <h3 className="chatroom-name">{room.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
