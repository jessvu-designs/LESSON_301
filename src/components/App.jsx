

import React, { useState, useEffect } from 'react';
import MonthlySummary from './MonthlySummary';
import ReaderProfile from './ReaderProfile';
// import ReadingChart from './ReadingChart';
import RecentlyReadList from './RecentlyReadList';
import MonthPicker from './MonthPicker';
import Toolbar from './Toolbar';
import { getFilteredData } from '../utils/dataUtils';
import GenresPieChart from './GenresPieChart';
import '../styles/monthlySummary.css';
import '../styles/dashboard.css';
import '../styles/recentlyReadList.css';
import '../styles/monthPicker.css';
import '../styles/readerProfile.css';

// Load metrics.json
import metricsDataRaw from '../data/metrics.json';


export default function App() {
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [metricsData, setMetricsData] = useState([]);

  useEffect(() => {
    setMetricsData(metricsDataRaw);
  }, []);

  const filteredData = getFilteredData(metricsData, selectedMonth);

  return (
    <>
      <Toolbar selectedMonth={selectedMonth} onMonthChange={setSelectedMonth}>
        <MonthPicker selected={selectedMonth} onChange={setSelectedMonth} />
      </Toolbar>
      <div className="dashboard-outer">
        <div className="dashboard-content">
          <ReaderProfile />
          <div className="kpi-row">
            <div style={{ width: '100%' }}>
              <MonthlySummary data={filteredData} selectedMonth={selectedMonth} />
            </div>
          </div>
          <div className="chart-row">
            <RecentlyReadList />
            <div className="chart-card">
              <GenresPieChart data={filteredData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
