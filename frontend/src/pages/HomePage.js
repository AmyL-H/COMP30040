// frontend/src/components/HomePage.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import a separate CSS file for styles if needed

const HomePage = () => {
    return (
        /**<div>
            <div className="container">
                <section>
                    <h2>Welcome to Your Cybersecurity Journey</h2>
                    <p>Our platform offers the best resources to help you become an expert in cybersecurity. Join our community and start learning today!</p>
                    <button className="button">Get Started</button>
                </section>

                <section className="card">
                    <h3>Why Cybersecurity?</h3>
                    <p>Cybersecurity is one of the fastest-growing fields today. Protecting digital assets is more important than ever. Our courses cover all the essential skills to help you succeed.</p>
                </section>
            </div>**/
        <div>
            <HeroSection />
            <Footer />
        </div>
    );
};

export default HomePage;
