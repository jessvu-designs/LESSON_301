import React from 'react';

const months = [
  'All', 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export default function MonthPicker({ selected, onChange }) {
  return (
    <div className="month-picker">
      <label htmlFor="month-picker" className="month-picker__label">Month</label>
      <select
        id="month-picker"
        value={selected}
        onChange={e => onChange(e.target.value)}
        aria-label="Filter by month"
      >
        {months.map(m => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
    </div>
  );
}
