import React from 'react';

const months = [
  'All',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function MonthPicker({ selected, onChange }) {
  return (
    <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
      <label htmlFor="month-picker" style={{ fontWeight: 500, color: '#B03A5B' }}>Month:</label>
      <select
        id="month-picker"
        value={selected}
        onChange={e => onChange(e.target.value)}
        style={{
          borderRadius: '999px',
          padding: '0.5em 2.2em 0.5em 1.2em', // extra right padding for chevron
          border: '1.5px solid #E8AFC3',
          backgroundColor: '#fff',
          color: '#B03A5B',
          fontWeight: 600,
          fontSize: '1em',
          outline: 'none',
          boxShadow: '0 1px 4px rgba(244,198,215,0.10)',
          transition: 'border 0.2s',
        }}
      >
        {months.map(m => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
    </div>
  );
}
