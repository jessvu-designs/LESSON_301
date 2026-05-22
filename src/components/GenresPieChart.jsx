import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function getGenreCounts(data) {
  const genreMap = {};
  data.forEach(item => {
    (item.genres || []).forEach(genre => {
      genreMap[genre] = (genreMap[genre] || 0) + 1;
    });
  });
  return genreMap;
}

const pastelColors = [
  '#7B5A45', // leather brown
  '#D08B5B', // warm gold-brown
  '#A87B53', // mid tone
  '#D4B58A', // soft tan
  '#8E6B47', // espresso
  '#C9A47A', // wheat
  '#6E4F33', // dark spine
  '#E8DDCF', // muted border tan
];

export default function GenresPieChart({ data }) {
  const genreCounts = getGenreCounts(data);
  const labels = Object.keys(genreCounts);
  const values = Object.values(genreCounts);

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: pastelColors.slice(0, labels.length),
        borderColor: '#FFFDF8',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#2F2A25',
          font: { size: 14, family: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif" },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(255, 253, 248, 0.98)',
        titleColor: '#7B5A45',
        bodyColor: '#2F2A25',
        borderColor: '#E8DDCF',
        borderWidth: 1,
      },
      title: {
        display: false, // Hide Chart.js title, use visible heading instead
        text: 'Genres Read',
      },
    },
  };

  return (
    <div style={{ width: '100%' }}>
      <h3 style={{
        fontFamily: "'Cormorant Garamond', 'Merriweather', Georgia, serif",
        color: '#7B5A45',
        fontWeight: 700,
        fontSize: '1.2em',
        textAlign: 'center',
        marginBottom: '1em',
        width: '100%',
      }}>Genres Read</h3>
      <div style={{ width: '100%', height: '320px', display: 'flex', alignItems: 'center' }}>
        <Pie data={chartData} options={{...options, maintainAspectRatio: false}} />
      </div>
    </div>
  );
}
