import React from 'react';
import '../styles/readerProfile.css';

export default function ReaderProfile() {
  // Avatar with user headshot
  return (
    <div className="reader-profile-header card-bg">
      <div className="reader-profile-avatar">
        <img
          src="/headshot.jpeg"
          alt="User headshot"
          style={{ width: '112px', height: '112px', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
        />
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
