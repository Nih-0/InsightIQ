import React from 'react';
import './AboutPage.css';

const AboutPage = () => (
  <div className="about-container">
    <h2>About InsightIQ</h2>
    <p>
      <strong>InsightIQ</strong> leverages advanced AI models to provide instant, actionable feedback on your interview responses. Whether you submit text or audio, our system analyzes your answers for clarity, relevance, and communication skills.
    </p>
    <ul>
      <li>
        <strong>Text Analysis:</strong> We evaluate your written answers for structure, grammar, and how well you address the question.
      </li>
      <li>
        <strong>Audio Analysis:</strong> Our AI transcribes your spoken answers, then assesses your tone, fluency, and confidence.
      </li>
      <li>
        <strong>Personalized Feedback:</strong> You receive clear suggestions to improve both your technical and soft skills, helping you prepare for real interviews.
      </li>
    </ul>
    <p>
      Our goal is to make interview practice accessible, data-driven, and effective for everyone.
    </p>
  </div>
);

export default AboutPage;