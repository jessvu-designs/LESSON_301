import React from 'react';
import '../styles/readerProfile.css';

const AVATAR_SRC = '/headshot.jpeg';
const AVATAR_SIZE = 112;

export default function ReaderProfile() {
  return (
    <header className="reader-profile-header card-bg" role="region" aria-labelledby="profile-heading">
      <div className="reader-profile-avatar">
        <img
          src={AVATAR_SRC}
          alt="Portrait of Jess Vu, smiling and wearing glasses"
          style={{
            width: AVATAR_SIZE,
            height: AVATAR_SIZE,
            borderRadius: '50%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
      <div className="reader-profile-info">
        <h1 id="profile-heading" className="reader-profile-name">Jess Vu</h1>
        <p className="reader-profile-desc">Avid reader & lifelong learner</p>
        <p className="reader-profile-meta">Member since 2024 • Favorite genre: Fiction</p>
        <div className="profile-info-row">
          <div className="currently-reading-visual">
            <span className="book-cover-placeholder" aria-hidden="true">📘</span>
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
    </header>
  );
}
