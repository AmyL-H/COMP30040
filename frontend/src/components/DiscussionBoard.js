import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DiscussionBoard.css';

const DiscussionBoard = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch discussion posts
    axios.get('http://localhost:5000/api/discussion')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));

    // Get user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
  }, []);

  const handlePostSubmit = () => {
    if (!user) {
      alert('You must be logged in to post.');
      return;
    }
    
    if (!newPost.trim()) {
      alert('Post cannot be empty.');
      return;
    }

    const postData = { userId: user._id, content: newPost };
    
    axios.post('http://localhost:5000/api/discussion', postData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(response => {
        setPosts([response.data, ...posts]);
        setNewPost('');
      })
      .catch(error => console.error('Error creating post:', error));
  };

  return (
    <div className="discussion-container">
      <h2>Community Discussion Board</h2>
      
      {user ? (
        <div className="post-box">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your thoughts..."
          />
          <button onClick={handlePostSubmit}>Post</button>
        </div>
      ) : (
        <p className="login-message">Log in to participate in the discussion.</p>
      )}

      <div className="posts-list">
        {posts.map(post => (
          <div key={post._id} className="post-item">
            <p className="post-content">{post.content}</p>
            <span className="post-meta">Posted on {new Date(post.createdAt).toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionBoard;
