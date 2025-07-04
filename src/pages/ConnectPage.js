import React from 'react';
import './ConnectPage.css';

const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/',
    icon: 'https://img.icons8.com/ios-glyphs/48/github.png',
    bg: '#24292f'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/',
    icon: 'https://img.icons8.com/ios-filled/48/25d366/whatsapp.png',
    bg: '#25d366'
  },
  {
    name: 'LinkedIn',
    url: 'https://img.icons8.com/ios-filled/48/0a66c2/linkedin.png',
    icon: 'https://img.icons8.com/ios-filled/48/0a66c2/linkedin.png',
    bg: '#0a66c2'
  }
];

const ConnectPage = () => (
  <div className="connect-page-wrapper">
    <div className="connect-container">
      <h2>Connect with Us</h2>
      <div className="connect-links">
        {links.map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="connect-link"
            style={{ background: link.bg }}
          >
            <img src={link.icon} alt={link.name} className="connect-icon" />
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default ConnectPage;