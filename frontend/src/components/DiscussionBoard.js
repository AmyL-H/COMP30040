import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DiscussionBoard.css';

const DiscussionBoard = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ username: '', message: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  // Fetch all posts from backend
  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/discussions');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Failed to load discussion posts.');
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  // Submit new post
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPost.username || !newPost.message) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/discussions', newPost);
      setPosts([...posts, response.data]);
      setNewPost({ username: '', message: '' }); // Clear input fields
      setError('');
    } catch (error) {
      console.error('Error posting message:', error);
      setError('Failed to post message.');
    }
  };

  return (
    <div className="discussion-container">
      <h1>Community Discussion Board</h1>

      {/* New Post Form */}
      <form onSubmit={handleSubmit} className="post-form">
        <input
          type="text"
          name="username"
          placeholder="Your Name"
          value={newPost.username}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Write your message..."
          value={newPost.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Post Message</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {/* Display Posts */}
      <div className="posts-list">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={index} className="post-item">
              <strong>{post.username}</strong>
              <p>{post.message}</p>
              <small>Posted at: {new Date(post.createdAt).toLocaleString()}</small>
            </div>
          ))
        ) : (
          <p>No posts yet. Be the first to start a discussion!</p>
        )}
      </div>
    </div>
  );
};

export default DiscussionBoard;
