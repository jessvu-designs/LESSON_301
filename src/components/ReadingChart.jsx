import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ReadingChart({ data, selectedMonth }) {
  // Highlight selected month if not 'All'
  const booksHighlight = 'rgba(123, 90, 69, 0.9)';   // primary accent
  const pagesHighlight = 'rgba(208, 139, 91, 0.9)';  // secondary accent
  const booksColors = data.map(item =>
    selectedMonth && selectedMonth !== 'All' && item.month === selectedMonth
      ? booksHighlight
      : 'rgba(123, 90, 69, 0.45)'
  );
  const pagesColors = data.map(item =>
    selectedMonth && selectedMonth !== 'All' && item.month === selectedMonth
      ? pagesHighlight
      : 'rgba(208, 139, 91, 0.45)'
  );

  const chartData = {
    labels: data.map((item) => item.month),
    datasets: [
      {
        label: 'Books Read',
        data: data.map((item) => item.books),
        backgroundColor: booksColors,
        borderColor: '#7B5A45',
        borderWidth: 2,
        borderRadius: 8,
        hoverBackgroundColor: booksHighlight,
      },
      {
        label: 'Pages Read',
        data: data.map((item) => item.pages),
        backgroundColor: pagesColors,
        borderColor: '#D08B5B',
        borderWidth: 2,
        borderRadius: 8,
        hoverBackgroundColor: pagesHighlight,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#2F2A25',
          font: { size: 14, family: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif" },
        },
      },
      title: {
        display: true,
        text: 'Monthly Reading Overview',
        color: '#7B5A45',
        font: { size: 18, weight: 'bold', family: "'Cormorant Garamond', 'Merriweather', Georgia, serif" },
      },
      tooltip: {
        backgroundColor: 'rgba(255, 253, 248, 0.98)',
        titleColor: '#7B5A45',
        bodyColor: '#2F2A25',
        borderColor: '#E8DDCF',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: '#5C5148' },
        grid: { color: 'rgba(123, 90, 69, 0.08)' },
      },
      y: {
        beginAtZero: true,
        ticks: { color: '#5C5148' },
        grid: { color: 'rgba(123, 90, 69, 0.08)' },
      },
    },
  };

  return (
    <Bar data={chartData} options={{...options, maintainAspectRatio: false}} width={440} height={320} />
  );
}
