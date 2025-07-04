import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { analyzeAudio, transcribeAudio } from '../services/apiService';
import StatusAlert from '../components/StatusAlert';

const AudioAnalysisPage = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [audioUrl, setAudioUrl] = useState('');
  const [transcript, setTranscript] = useState('');
  const [questionType, setQuestionType] = useState('technical');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState(null);
  const recorderRef = useRef(null);
  const audioChunks = useRef([]);
  const navigate = useNavigate();

  // Auto-hide status alert after 2 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleRecord = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recorderRef.current = new MediaRecorder(stream);
    audioChunks.current = [];

    recorderRef.current.ondataavailable = (e) => {
      audioChunks.current.push(e.data);
    };

    recorderRef.current.onstop = () => {
      const blob = new Blob(audioChunks.current, { type: 'audio/wav' });
      const url = URL.createObjectURL(blob);
      setAudioFile(blob);
      setAudioUrl(url);
    };

    recorderRef.current.start();
    setStatus('recording');
  };

  const stopRecording = () => {
    recorderRef.current && recorderRef.current.stop();
    setStatus('waiting');
  };

  const handleTranscribe = async () => {
    setLoading(true);
    setError('');
    setStatus('analyzing');
    try {
      const data = await transcribeAudio(audioFile);
      setTranscript(data.transcript);
      setStatus('done');
    } catch (err) {
      setError('Transcription failed.');
      setStatus('waiting');
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyze = async () => {
    setLoading(true);
    setError('');
    setStatus('analyzing');
    try {
      const response = await analyzeAudio(audioFile, questionType);
      localStorage.setItem('analysisResults', JSON.stringify(response));
      navigate('/results');
    } catch (err) {
      setError('Analysis failed.');
      setStatus('waiting');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>🎤 Audio Interview Analysis</h2>

      <select value={questionType} onChange={(e) => setQuestionType(e.target.value)}>
        <option value="technical">Technical Question</option>
        <option value="hr">HR Question</option>
      </select>

      <div className="audio-controls">
        <button className="btn" onClick={handleRecord}>🎙️ Start Recording</button>
        <button className="btn" onClick={stopRecording}>🛑 Stop</button>
        <input type="file" accept="audio/*" onChange={(e) => {
          const file = e.target.files[0];
          setAudioFile(file);
          setAudioUrl(URL.createObjectURL(file));
        }} />
      </div>

      {audioUrl && (
        <audio controls src={audioUrl} style={{ margin: '10px 0' }} />
      )}

      <div className="navigation">
        <button className="btn" onClick={handleTranscribe} disabled={!audioFile || loading}>
          Transcribe
        </button>
        <button className="btn" onClick={handleAnalyze} disabled={!audioFile || loading}>
          Analyze
        </button>
      </div>

      {transcript && (
        <textarea rows={5} value={transcript} onChange={(e) => setTranscript(e.target.value)} />
      )}
      {error && <p className="error">{error}</p>}
      <StatusAlert status={status} />
    </div>
  );
};

export default AudioAnalysisPage;
