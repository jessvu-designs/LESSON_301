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
  '#F4C6D7', // pink
  '#E8AFC3', // pink 2
  '#F6E7B2', // yellow
  '#B6E2D3', // mint
  '#C7C6F4', // lavender
  '#B2D6F6', // baby blue
  '#FFDAB9', // peach
  '#F9EFAF', // yellow 2
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
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#222',
          font: { size: 14 },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(244, 198, 215, 0.95)',
        titleColor: '#B03A5B',
        bodyColor: '#222',
      },
      title: {
        display: true,
        text: 'Genres Read',
        color: '#B03A5B',
        font: { size: 18, weight: 'bold', family: 'Lora, serif' },
      },
    },
  };

  return (
    <Pie data={chartData} options={{...options, maintainAspectRatio: false}} width={320} height={320} />
  );
}
