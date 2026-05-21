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
  const highlightColor = 'rgba(176, 58, 91, 0.85)';
  const booksColors = data.map(item =>
    selectedMonth && selectedMonth !== 'All' && item.month === selectedMonth
      ? highlightColor
      : 'rgba(244, 198, 215, 0.8)'
  );
  const pagesColors = data.map(item =>
    selectedMonth && selectedMonth !== 'All' && item.month === selectedMonth
      ? 'rgba(176, 155, 58, 0.85)'
      : 'rgba(246, 231, 178, 0.7)'
  );

  const chartData = {
    labels: data.map((item) => item.month),
    datasets: [
      {
        label: 'Books Read',
        data: data.map((item) => item.books),
        backgroundColor: booksColors,
        borderColor: '#B03A5B',
        borderWidth: 2,
        borderRadius: 8,
        hoverBackgroundColor: highlightColor,
      },
      {
        label: 'Pages Read',
        data: data.map((item) => item.pages),
        backgroundColor: pagesColors,
        borderColor: '#B09B3A',
        borderWidth: 2,
        borderRadius: 8,
        hoverBackgroundColor: 'rgba(249, 239, 175, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#222',
          font: { size: 14 },
        },
      },
      title: {
        display: true,
        text: 'Monthly Reading Overview',
        color: '#B03A5B',
        font: { size: 18, weight: 'bold', family: 'Lora, serif' },
      },
      tooltip: {
        backgroundColor: 'rgba(244, 198, 215, 0.95)',
        titleColor: '#B03A5B',
        bodyColor: '#222',
      },
    },
    scales: {
      x: {
        ticks: { color: '#222' },
        grid: { color: 'rgba(176, 58, 91, 0.08)' },
      },
      y: {
        beginAtZero: true,
        ticks: { color: '#222' },
        grid: { color: 'rgba(176, 58, 91, 0.08)' },
      },
    },
  };

  return (
    <Bar data={chartData} options={{...options, maintainAspectRatio: false}} width={440} height={320} />
  );
}
