import React from 'react';
import '../styles/readerProfile.css';

export default function ReaderProfile() {
  // Fake avatar with initials
  return (
    <div className="reader-profile-header card-bg">
      <div className="reader-profile-avatar cartoon-avatar">
        {/* Cartoon SVG avatar with glasses and short hair, larger size */}
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="48" cy="48" r="48" fill="#B03A5B"/>
          {/* Short hair */}
          <path d="M28 38 Q36 22 48 26 Q60 22 68 38 Q62 32 48 32 Q34 32 28 38 Z" fill="#7A4A5A"/>
          <ellipse cx="48" cy="60" rx="28" ry="20" fill="#fff"/>
          <ellipse cx="48" cy="38" rx="20" ry="20" fill="#fff"/>
          {/* Eyes */}
          <ellipse cx="40" cy="40" rx="3" ry="4" fill="#B03A5B"/>
          <ellipse cx="56" cy="40" rx="3" ry="4" fill="#B03A5B"/>
          {/* Smile */}
          <path d="M40 50 Q48 58 56 50" stroke="#B03A5B" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          {/* Glasses */}
          <ellipse cx="40" cy="40" rx="7" ry="7" stroke="#B03A5B" strokeWidth="2" fill="none"/>
          <ellipse cx="56" cy="40" rx="7" ry="7" stroke="#B03A5B" strokeWidth="2" fill="none"/>
          <rect x="47" y="39" width="2" height="2" fill="#B03A5B"/>
          <line x1="33" y1="40" x2="25" y2="38" stroke="#B03A5B" strokeWidth="2"/>
          <line x1="63" y1="40" x2="71" y2="38" stroke="#B03A5B" strokeWidth="2"/>
        </svg>
      </div>
      <div className="reader-profile-info">
        <div className="reader-profile-name">Jess Vu</div>
        <div className="reader-profile-desc">Avid reader & lifelong learner</div>
        <div className="reader-profile-meta">Member since 2024 • Favorite genre: Fiction</div>
        <div className="profile-info-row">
          <div className="currently-reading-visual">
            <span className="book-cover-placeholder">📘</span>
            <span className="currently-reading-label">Currently Reading:</span>
            <span className="currently-reading-book">
              <span className="book-title">Atomic Habits</span>
              <span className="book-author">by James Clear</span>
            </span>
          </div>
          <div className="profile-metric-row">
            <span className="fire-emoji" role="img" aria-label="fire">🔥</span>
            <span className="profile-metric-label">Reading Streak:</span>
            <span className="profile-metric-value">27 days</span>
          </div>
        </div>
      </div>
    </div>
  );
}
