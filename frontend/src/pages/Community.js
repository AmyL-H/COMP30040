import React from 'react';
import DiscussionBoard from '../components/DiscussionBoard'; 
import './Community.css'; 

const Community = () => {
  return (
    <div className="community-container">
      <h1 className="community-title">Welcome to the Community!</h1>
      <DiscussionBoard />
    </div>
  );
};

export default Community;
