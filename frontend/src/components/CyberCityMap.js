import React from 'react';
import './CyberCityMap.css';

const CyberCityMap = ({ sections, onModuleClick, userProgress }) => {

  const checkModuleUnlocked = (sectionId) => {
    if (sectionId === 'cybersecurity') return true; // Always unlocked

    const unlockRequirements = {
      "cryptography": "cybersecurityquiz5",
      "network-security": "cryptographyquiz5",
      "ethical-hacking": "networksecurityquiz5",
    };

    const requiredQuiz = unlockRequirements[sectionId];
    if (!requiredQuiz) return false;

    return userProgress?.[requiredQuiz] >= 50;
  };

  return (
    <div className="cybercity-map-container">
      <h2 className="map-title">🌐 Cyber City: Travel through the adventures of CyberSpace!</h2>
      <div className="cybercity-map-path">
        {sections.map((section, index) => {
          const unlocked = checkModuleUnlocked(section.id);

          return (
            <div
              key={section.id}
              className={`city-stop ${unlocked ? 'unlocked' : 'locked'}`}
              onClick={() => unlocked && onModuleClick(section.id)}
              style={{ cursor: unlocked ? 'pointer' : 'not-allowed' }}
            >
              <div className="building-icon">{unlocked ? '🏢' : '🔒'}</div>
              <div className="module-label">
                <span className="level-tag">Level {index + 1}</span>
                <span className="title">{section.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CyberCityMap;
