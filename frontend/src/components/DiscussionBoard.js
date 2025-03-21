import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './DiscussionBoard.css';

const DiscussionBoard = () => {
  const { room } = useParams();
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ username: '', message: '' });
  const [replyForms, setReplyForms] = useState({});
  const [replies, setReplies] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts();
  }, [room]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/discussions/${room}`);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Failed to load discussion posts.');
    }
  };

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPost.username || !newPost.message) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/api/discussions/${room}`, newPost);
      setPosts([...posts, response.data]);
      setNewPost({ username: '', message: '' });
      setError('');
    } catch (error) {
      console.error('Error posting message:', error);
      setError('Failed to post message.');
    }
  };

  const toggleReplyForm = (index) => {
    setReplyForms((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleReplyChange = (index, field, value) => {
    setReplies((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [field]: value,
      },
    }));
  };

  const submitReply = async (postId, index) => {
    const reply = replies[index];
    if (!reply?.username || !reply?.message) {
      setError('Please fill out all reply fields.');
      return;
    }

    try {
      await axios.post(`http://localhost:5000/api/discussions/${room}/${postId}/reply`, reply);
      fetchPosts();
      setReplies((prev) => ({ ...prev, [index]: { username: '', message: '' } }));
      setReplyForms((prev) => ({ ...prev, [index]: false }));
    } catch (error) {
      console.error('Error posting reply:', error);
      setError('Failed to post reply.');
    }
  };

  return (
    <div className="discussion-container">
      <h1>{room.replace('-', ' ').toUpperCase()} Room</h1>

      <form onSubmit={handleSubmit} className="post-form">
        <input type="text" name="username" placeholder="Your Name" value={newPost.username} onChange={handleChange} />
        <textarea name="message" placeholder="Write your message..." value={newPost.message} onChange={handleChange} />
        <button type="submit">Post Message</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      <div className="posts-list">
        {posts.map((post, index) => (
          <div key={post._id} className="post-item">
            <strong>{post.username}</strong>
            <p>{post.message}</p>
            <small>{new Date(post.createdAt).toLocaleString()}</small>

            <button className="reply-toggle" onClick={() => toggleReplyForm(index)}>
              {replyForms[index] ? 'Cancel' : 'Reply'}
            </button>

            {replyForms[index] && (
              <div className="reply-form">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={replies[index]?.username || ''}
                  onChange={(e) => handleReplyChange(index, 'username', e.target.value)}
                />
                <textarea
                  placeholder="Write your reply..."
                  value={replies[index]?.message || ''}
                  onChange={(e) => handleReplyChange(index, 'message', e.target.value)}
                />
                <button onClick={() => submitReply(post._id, index)}>Submit Reply</button>
              </div>
            )}

            {post.replies?.length > 0 && (
              <div className="reply-list">
                {post.replies.map((reply, rIndex) => (
                  <div key={rIndex} className="reply-item">
                    <strong>{reply.username}</strong>
                    <p>{reply.message}</p>
                    <small>{new Date(reply.createdAt).toLocaleString()}</small>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionBoard;
