import React from 'react';

export default function Toolbar({ selectedMonth, onMonthChange, children }) {
  return (
    <header
      style={{
        width: '100%',
        background: '#FFFDF8',
        borderBottom: '1px solid #E8DDCF',
        boxShadow: '0 2px 12px rgba(47, 42, 37, 0.06)',
        padding: '0.5rem 0',
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      <div style={{ width: '100%', maxWidth: 1100, margin: '0 auto', padding: '1.1rem 2rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
            <span style={{ fontSize: 28, color: '#7B5A45', fontWeight: 700, fontFamily: "'Cormorant Garamond', 'Merriweather', Georgia, serif", letterSpacing: '0.01em' }}>
              <span role="img" aria-label="book">📚</span> Reading Dashboard
            </span>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </header>
  );
}
