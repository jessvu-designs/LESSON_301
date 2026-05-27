import React from 'react';
import { getYearlyTotals } from '../utils/dataUtils';

function Stat({ label, value, unit }) {
  return (
    <div className="stat-strip__item">
      <span className="stat-strip__label">{label}</span>
      <span className="stat-strip__value">
        {value}
        {unit ? <span className="stat-strip__unit"> {unit}</span> : null}
      </span>
    </div>
  );
}

export default function MonthlySummary({ data, selectedMonth }) {
  if (!data || data.length === 0) {
    return (
      <div className="stat-strip" role="group" aria-label="Monthly summary">
        <Stat label="No reading recorded yet" value="\u2014" />
      </div>
    );
  }

  const source = selectedMonth === 'All' ? getYearlyTotals(data) : data[0];
  const books = source.books ?? 0;
  const pages = source.pages ?? 0;
  const hours = source.hours ?? 0;
  const pace = source.avgReadingTime ?? 0;

  return (
    <div className="stat-strip" role="group" aria-label="Monthly summary">
      <Stat label="Books You Traveled Through" value={books} />
      <Stat label="Pages You Sat With" value={pages.toLocaleString()} />
      <Stat label="Hours You Gave Yourself" value={hours} unit="hrs" />
      <Stat label="Your Usual Reading Pace" value={pace} unit="min / session" />
    </div>
  );
}
