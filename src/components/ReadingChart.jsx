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

// Adds vertical space between the legend and the chart area.
const legendSpacingPlugin = {
  id: 'legendSpacing',
  beforeInit(chart) {
    if (!chart.legend) return;
    const originalFit = chart.legend.fit;
    chart.legend.fit = function fit() {
      originalFit.call(this);
      this.height += 24;
    };
  },
};

export default function ReadingChart({ data, selectedMonth }) {
  const isHighlighted = (m) => selectedMonth && selectedMonth !== 'All' && m === selectedMonth;

  // Cozy palette
  const pagesBase = 'rgba(232, 183, 200, 0.85)';   // blush
  const pagesMuted = 'rgba(232, 183, 200, 0.45)';
  const booksBase = 'rgba(208, 139, 91, 0.95)';    // gold-brown
  const booksMuted = 'rgba(208, 139, 91, 0.55)';

  const anyHighlight = selectedMonth && selectedMonth !== 'All';

  const pagesColors = data.map(item =>
    !anyHighlight ? pagesBase : isHighlighted(item.month) ? pagesBase : pagesMuted
  );
  const booksColors = data.map(item =>
    !anyHighlight ? booksBase : isHighlighted(item.month) ? booksBase : booksMuted
  );

  const chartData = {
    labels: data.map((item) => item.month.slice(0, 3)),
    datasets: [
      {
        type: 'bar',
        label: 'Pages Read',
        data: data.map((item) => item.pages),
        backgroundColor: pagesColors,
        borderRadius: 10,
        borderSkipped: false,
        yAxisID: 'y',
        order: 2,
      },
      {
        type: 'bar',
        label: 'Books Finished',
        data: data.map((item) => item.books),
        backgroundColor: booksColors,
        borderRadius: 6,
        borderSkipped: false,
        yAxisID: 'yBooks',
        order: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    layout: {
      padding: { top: 0, right: 4, bottom: 4, left: 4 },
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'center',
        labels: {
          color: '#3E332D',
          usePointStyle: true,
          boxWidth: 8,
          padding: 20,
          font: { size: 13, family: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif" },
        },
      },
      title: { display: false },
      tooltip: {
        backgroundColor: 'rgba(255, 253, 249, 0.98)',
        titleColor: '#7B5A45',
        bodyColor: '#3E332D',
        borderColor: '#ECE2D3',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: '#5A4A4A', font: { size: 12 } },
        grid: { display: false },
      },
      y: {
        position: 'left',
        beginAtZero: true,
        ticks: { color: '#8A7A72', font: { size: 11 } },
        grid: { color: 'rgba(123, 90, 69, 0.06)', drawBorder: false },
        title: { display: true, text: 'Pages', color: '#8A7A72', font: { size: 11 } },
      },
      yBooks: {
        position: 'right',
        beginAtZero: true,
        ticks: { color: '#8A7A72', font: { size: 11 }, stepSize: 1 },
        grid: { display: false },
        title: { display: true, text: 'Books', color: '#8A7A72', font: { size: 11 } },
      },
    },
  };

  return (
    <Bar data={chartData} options={{ ...options, maintainAspectRatio: false }} plugins={[legendSpacingPlugin]} />
  );
}
