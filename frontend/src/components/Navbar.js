// frontend/src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    setButton(window.innerWidth > 960);
  };

  const updateUser = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing user from localStorage', error);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    updateUser();
    window.addEventListener('progressUpdated', updateUser);
    window.addEventListener('userLoggedIn', updateUser);
    window.addEventListener('streakUpdated', updateUser);
    return () => {
      window.removeEventListener('resize', showButton);
      window.removeEventListener('progressUpdated', updateUser);
      window.removeEventListener('userLoggedIn', updateUser);
      window.removeEventListener('streakUpdated', updateUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      if (window.toggleHomepageSidebar) {
        window.toggleHomepageSidebar();
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
          CIQ
          <i className="fab fa-typo3" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to={user ? "/coursepage" : "/sign-up"} className="nav-links" onClick={closeMobileMenu}>Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources" className="nav-links" onClick={closeMobileMenu}>Resources</Link>
          </li>
          <li className="nav-item">
            <Link to="/community" className="nav-links" onClick={closeMobileMenu}>Community</Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus" className="nav-links" onClick={closeMobileMenu}>About Us</Link>
          </li>
          {!user && (
            <li>
              <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>Sign Up</Link>
            </li>
          )}
        </ul>
        {button && (
          <div className="nav-buttons">
            {user ? (
              <div className="nav-profile">
                <span className="profile-info">
                  {user.name} <br />
                  <span className="xp">🔥 {user.streak || 5}-day streak | ⭐ {user.xp || 0} XP</span>
                </span>
                <button onClick={handleLogout} className="logout-button">Logout</button>
              </div>
            ) : (
              <Link to="/sign-up">
                <Button buttonStyle="btn--outline">SIGN UP</Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
