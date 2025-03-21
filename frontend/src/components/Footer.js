import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the CyberIQ newsletter to stay updated on new lessons, features, and cybersecurity tips.
        </p>
        <p className='footer-subscription-text'>Unsubscribe anytime.</p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Resources</h2>
            <Link to='/resources'>Learning Resources</Link>
            <Link to='/community'>Community</Link>
            <Link to='/about'>About CyberIQ</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Support</h2>
            <Link to='/community'>Contact Us</Link>
            <Link to='/faq'>FAQs</Link>
          </div>
        </div>
      </div>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              CyberIQ <i className='fas fa-shield-alt' />
            </Link>
          </div>
          <small className='website-rights'>CyberIQ © {new Date().getFullYear()}</small>
          <div className='social-icons'>
            <a
              className='social-icon-link linkedin'
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
            <a
              className='social-icon-link github'
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <i className='fab fa-github' />
            </a>
            <a
              className='social-icon-link twitter'
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
