import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { analyzeText } from '../services/apiService';

const TextAnalysisPage = () => {
  const [answers, setAnswers] = useState(['', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const questions = [
    "1. What is a Linked List and when would you use it?",
    "2. Explain time complexity of Binary Search Tree search.",
    "3. Describe how a Hash Table works.",
    "4. Difference between Stack and Queue?",
    "5. What is Dynamic Programming with example?"
  ];

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await analyzeText({
        technicalAnswers: answers,
        questionType: 'technical',
      });
      localStorage.setItem('analysisResults', JSON.stringify(response));
      navigate('/results');
    } catch (err) {
      setError('Analysis failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>📝 Text Interview Analysis</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((q, i) => (
          <div className="form-group" key={i}>
            <label>{q}</label>
            <textarea
              rows={4}
              value={answers[i]}
              onChange={(e) => handleChange(i, e.target.value)}
              required
            />
          </div>
        ))}
        {error && <p className="error">{error}</p>}
        <button className="btn" disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze Answers'}
        </button>
      </form>
    </div>
  );
};

export default TextAnalysisPage;
