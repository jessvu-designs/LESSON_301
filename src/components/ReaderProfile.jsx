import React from 'react';
import '../styles/readerProfile.css';

const AVATAR_SRC = '/headshot.jpeg';

export default function ReaderProfile() {
  return (
    <header className="reader-profile-header" role="region" aria-labelledby="profile-heading">
      <div className="reader-profile-avatar">
        <img
          src={AVATAR_SRC}
          alt="Portrait of Jess Vu, smiling and wearing glasses"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <div className="reader-profile-info">
        <p className="reader-profile-meta">A reading journal by</p>
        <h1 id="profile-heading" className="reader-profile-name">Jess Vu</h1>
        <p className="reader-profile-desc">Quietly collecting stories since 2024 · fondest of fiction</p>
        <div className="profile-info-row">
          <span className="profile-pill">
            <span aria-hidden="true">📖</span>
            <span className="profile-pill__label">Currently with</span>
            <span className="profile-pill__value">Atomic Habits</span>
          </span>
          <span className="profile-pill profile-pill--butter">
            <span aria-hidden="true">🕯️</span>
            <span className="profile-pill__label">Reading streak</span>
            <span className="profile-pill__value">27 days</span>
          </span>
        </div>
      </div>
    </header>
  );
}
