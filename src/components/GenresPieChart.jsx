import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function getGenreCounts(data) {
  const genreMap = {};
  (data || []).forEach(item => {
    (item.genres || []).forEach(genre => {
      genreMap[genre] = (genreMap[genre] || 0) + 1;
    });
  });
  return genreMap;
}

// Cozy palette inspired by blush, butter, and leather
const cozyColors = [
  '#E8B7C8', // blush
  '#F8D7E3', // soft blush
  '#FFE08A', // warm yellow
  '#D08B5B', // warm gold-brown
  '#C9A47A', // wheat
  '#A87B53', // mid tone
  '#7B5A45', // leather
  '#5A4A4A', // muted ink
];

export default function GenresPieChart({ data }) {
  const genreCounts = getGenreCounts(data);
  const labels = Object.keys(genreCounts);
  const values = Object.values(genreCounts);

  const total = values.reduce((s, v) => s + v, 0) || 1;
  const ranked = labels
    .map((label, i) => ({ label, count: values[i], color: cozyColors[i % cozyColors.length] }))
    .sort((a, b) => b.count - a.count);
  const top = ranked[0];
  const topShare = top ? Math.round((top.count / total) * 100) : 0;

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: labels.map((_, i) => cozyColors[i % cozyColors.length]),
        borderColor: '#FFFDF9',
        borderWidth: 3,
        hoverOffset: 6,
      },
    ],
  };

  const options = {
    cutout: '62%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#3E332D',
          padding: 14,
          boxWidth: 10,
          usePointStyle: true,
          font: { size: 13, family: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif" },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(255, 253, 249, 0.98)',
        titleColor: '#7B5A45',
        bodyColor: '#3E332D',
        borderColor: '#ECE2D3',
        borderWidth: 1,
      },
    },
  };

  return (
    <div style={{ width: '100%' }}>
      <h3 className="panel__title">What you kept reaching for</h3>
      <p className="panel__hint">The genres that quietly shaped your reading.</p>

      <div className="chart-frame" style={{ height: 260 }}>
        <Doughnut data={chartData} options={{ ...options, maintainAspectRatio: false, responsive: true }} />
      </div>

      {top && (
        <div className="genre-callout" role="note">
          <span className="genre-callout__eyebrow">Most reached for</span>
          <span className="genre-callout__value">
            <span className="genre-callout__dot" style={{ background: top.color }} aria-hidden="true" />
            {top.label}
          </span>
          <span className="genre-callout__hint">
            in about {topShare}% of your reading months
          </span>
        </div>
      )}

      <ul className="genre-rank" aria-label="Top genres">
        {ranked.slice(0, 5).map((g) => {
          const pct = Math.round((g.count / top.count) * 100);
          return (
            <li key={g.label} className="genre-rank__row">
              <span className="genre-rank__label">{g.label}</span>
              <span className="genre-rank__bar" aria-hidden="true">
                <span
                  className="genre-rank__fill"
                  style={{ width: `${pct}%`, background: g.color }}
                />
              </span>
              <span className="genre-rank__count">{g.count}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
