import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TextAnalysisPage from './pages/TextAnalysisPage';
import AudioAnalysisPage from './pages/AudioAnalysisPage';
import ResultsPage from './pages/ResultsPage';
import WelcomePage from './pages/WelcomePage';
import ConnectPage from './pages/ConnectPage';
import FormPage from './pages/FormPage';
import AboutPage from './pages/AboutPage';
import './styles/App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/text" element={<TextAnalysisPage />} />
            <Route path="/audio" element={<AudioAnalysisPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/connect" element={<ConnectPage />} />
            <Route path="/formpage" element={<FormPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
