import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Pre-fill email and password if provided via location state
  const [email, setEmail] = useState(location.state?.email || '');
  const [password, setPassword] = useState(location.state?.password || '');
  const [error, setError] = useState('');

  useEffect(() => {
    if (location.state) {
      if (location.state.email) setEmail(location.state.email);
      if (location.state.password) setPassword(location.state.password);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', { email, password });
      console.log('Login response:', res.data);
      // Store the token and user details in localStorage
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      // Dispatch custom event to notify Navbar (and others) that user has logged in
      window.dispatchEvent(new Event('userLoggedIn'));
      navigate('/coursepage');
    } catch (err) {
      console.error('Login error:', err.response ? err.response.data : err);
      setError(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <h1>Sign In</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="email" 
            name="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
            required 
          />
        </div>
        <div>
          <input 
            type="password" 
            name="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            required 
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
