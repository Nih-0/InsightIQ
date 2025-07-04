import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

console.log('BASE_URL:', BASE_URL);

export const analyzeText = (data) =>
  axios.post(`${BASE_URL}/analyze`, data).then(res => res.data);

export const transcribeAudio = (audioFile) => {
  const formData = new FormData();
  formData.append("audio", audioFile);
  return axios.post(`${BASE_URL}/transcribe`, formData).then(res => res.data);
};

export const analyzeAudio = (audioFile, questionType) => {
  const formData = new FormData();
  formData.append("audio", audioFile);
  formData.append("questionType", questionType);
  return axios.post(`${BASE_URL}/analyze-audio`, formData).then(res => res.data);
};

export const checkHealth = () =>
  axios.get(`${BASE_URL}/health`).then(res => res.data);
