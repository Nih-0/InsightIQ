import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => (
  <div className="welcome-container">
    <div className="welcome-header">
      {/* App logo image */}
      <img
        src="https://img.icons8.com/color/96/artificial-intelligence.png"
        alt="InsightIQ Logo"
        className="welcome-logo"
        style={{ width: 64, height: 64, marginBottom: 12 }}
      />
      <h1>InsightIQ</h1>
      <p className="welcome-tagline">
        Your AI-powered Interview Feedback Analyzer
      </p>
    </div>
    <div className="welcome-flex">
      <div className="welcome-card">
        <img src="https://img.icons8.com/color/96/document--v1.png" alt="Text Analysis" />
        <h3>Text Analysis</h3>
        <p>Get instant feedback on your written interview answers.</p>
        <Link to="/text" className="btn">Try Text Analysis</Link>
      </div>
      <div className="welcome-card">
        <img src="https://img.icons8.com/color/96/000000/microphone.png" alt="Audio Analysis" />
        <h3>Audio Analysis</h3>
        <p>Practice speaking and receive AI-driven feedback on your answers.</p>
        <Link to="/audio" className="btn">Try Audio Analysis</Link>
      </div>
      <div className="welcome-card">
        <img src="https://img.icons8.com/color/96/000000/combo-chart--v1.png" alt="Results" />
        <h3>Results</h3>
        <p>Review your previous feedback and track your progress.</p>
        <Link to="/results" className="btn">View Results</Link>
      </div>
    </div>
  </div>
);

export default WelcomePage;