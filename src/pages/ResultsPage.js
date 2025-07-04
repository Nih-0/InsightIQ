import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ResultsPage = () => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('analysisResults');
    if (saved) setResults(JSON.parse(saved));
  }, []);

  if (!results) {
    return (
      <div className="container">
        <h2>No Results Found</h2>
        <Link to="/" className="btn">Home</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>📊 Interview Feedback</h2>
      <h3>Score: {results.overallScore}</h3>

      <div className="feedback-section">
        <h4>Strengths</h4>
        <ul>{results.strengths?.map((s, i) => <li key={i}>{s}</li>)}</ul>
      </div>

      <div className="feedback-section">
        <h4>Improvements</h4>
        <ul>{results.weaknesses?.map((w, i) => <li key={i}>{w}</li>)}</ul>
      </div>

      <div className="feedback-section">
        <h4>Suggestions</h4>
        <ul>{results.improvements?.map((s, i) => <li key={i}>{s}</li>)}</ul>
      </div>

      <Link to="/" className="btn">🏠 Home</Link>
    </div>
  );
};

export default ResultsPage;
