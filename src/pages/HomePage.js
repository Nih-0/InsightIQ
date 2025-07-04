import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      {/* <h2>🧠 Welcome to InsightIQ</h2> */}
      <p>Sharpen your technical and communication skills with AI-powered feedback.</p>

      <div className="navigation">
        <Link to="/text" className="btn">📝 Text Analysis</Link>
        <Link to="/audio" className="btn">🎤 Audio Analysis</Link>
        <Link to="/results" className="btn">📊 Results</Link>
      </div>
    </div>
  );
};

export default HomePage;
