import React from 'react';

export default function Toolbar({ children }) {
  return (
    <header
      style={{
        width: '100%',
        background: 'rgba(255, 253, 249, 0.85)',
        backdropFilter: 'saturate(140%) blur(8px)',
        WebkitBackdropFilter: 'saturate(140%) blur(8px)',
        borderBottom: '1px solid var(--border-soft)',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        marginBottom: '2.5rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1080,
          margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', minWidth: 0, flex: '1 1 0', overflow: 'hidden' }}>
          <span
            style={{
              fontSize: 'clamp(1.05rem, 2.4vw, 1.4rem)',
              color: 'var(--text-primary)',
              fontWeight: 700,
              fontFamily: "'Cormorant Garamond', 'Merriweather', Georgia, serif",
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            <span role="img" aria-label="book">📖</span> The Reading Journal
          </span>
          <span
            className="toolbar-tag"
            style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontStyle: 'italic', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            · a quiet record of what you read
          </span>
        </div>
        <div>{children}</div>
      </div>
    </header>
  );
}
