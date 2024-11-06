// frontend/src/components/HomePage.js
import React from 'react';
import './HomePage.css'; // Import a separate CSS file for styles if needed

const HomePage = () => {
    return (
        <div>
            <header>
                <h1>Cybersecurity Education</h1>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Courses</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                </nav>
            </header>

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

                <section className="card">
                    <h3>Featured Courses</h3>
                    <p>From beginner to advanced levels, explore our wide range of courses designed to help you master cybersecurity.</p>
                </section>
            </div>

            <footer className="footer">
                <p>&copy; 2024 Cybersecurity Education. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
