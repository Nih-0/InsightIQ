import React from 'react';
import './StatusAlert.css';

const statusMessages = {
  waiting: 'Please wait while we are analyzing...',
  recording: 'Recording started...',
  analyzing: 'Analyzing...',
  done: 'Analysis done!',
};

const StatusAlert = ({ status }) => {
  if (!status) return null;
  return (
    <div className={`status-alert status-${status}`}>
      {statusMessages[status] || 'Status...'}
    </div>
  );
};

export default StatusAlert;