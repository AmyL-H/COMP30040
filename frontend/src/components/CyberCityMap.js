import React from 'react';
import './CyberCityMap.css';

const CyberCityMap = ({ sections, onModuleClick }) => {
  return (
    <div className="cybercity-map-container">
      <h2 className="map-title">🌐 Cyber City: Travel through the adventures of CyberSpace!</h2>
      <div className="cybercity-map-path">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`city-stop ${section.locked ? 'locked' : 'unlocked'}`}
            onClick={() => !section.locked && onModuleClick(section.id)}
          >
            <div className="building-icon">{section.locked ? '🔒' : '🏢'}</div>
            <div className="module-label">
              <span className="level-tag">Level {index + 1}</span>
              <span className="title">{section.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CyberCityMap;
