
import React, { useState, useEffect } from 'react';
import MonthlySummary from './MonthlySummary';
import ReaderProfile from './ReaderProfile';
import ReadingChart from './ReadingChart';
import RecentlyReadList from './RecentlyReadList';
import MonthPicker from './MonthPicker';
import Toolbar from './Toolbar';
import HeroSection from './HeroSection';
import GenresPieChart from './GenresPieChart';
import { getFilteredData } from '../utils/dataUtils';

import '../styles/dashboard.css';
import '../styles/metrics-list.css';
import '../styles/recentlyReadList.css';
import '../styles/monthPicker.css';
import '../styles/readerProfile.css';

import metricsDataRaw from '../data/metrics.json';

export default function App() {
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [metricsData, setMetricsData] = useState([]);

  useEffect(() => {
    setMetricsData(metricsDataRaw);
  }, []);

  const filteredData = getFilteredData(metricsData, selectedMonth);
  const isAll = selectedMonth === 'All';
  const rhythmLabel = isAll ? 'Your Reading Rhythm' : `${selectedMonth} in Context`;
  const rhythmHint = isAll
    ? 'When reading found its way into your year \u2014 the quiet months and the immersive ones.'
    : 'How this month sits next to the rest of your year.';

  return (
    <>
      <Toolbar>
        <MonthPicker selected={selectedMonth} onChange={setSelectedMonth} />
      </Toolbar>

      <main className="dashboard-outer" role="main">
        <div className="dashboard-content">
          <ReaderProfile />

          {/* 1. Narrative anchor */}
          <HeroSection data={filteredData} selectedMonth={selectedMonth} />

          {/* 2. This Month at a Glance */}
          <section className="section" aria-labelledby="glance-heading">
            <div className="section-head">
              <span className="section-eyebrow">This Month at a Glance</span>
              <h2 id="glance-heading" className="section-title">A quiet record of your reading life</h2>
              <p className="section-subtitle">
                {isAll
                  ? 'A look across the whole year \u2014 the pages, hours, and books you sat with.'
                  : `What ${selectedMonth} held for you in books and time.`}
              </p>
            </div>
            <MonthlySummary data={filteredData} selectedMonth={selectedMonth} />
          </section>

          {/* 3. Your Reading Rhythm */}
          <section className="section" aria-labelledby="rhythm-heading">
            <div className="section-head">
              <span className="section-eyebrow">Your Reading Rhythm</span>
              <h2 id="rhythm-heading" className="section-title">{rhythmLabel}</h2>
              <p className="section-subtitle">{rhythmHint}</p>
            </div>
            <div className="panel">
              <div className="chart-frame" style={{ height: 360 }}>
                <ReadingChart data={metricsData} selectedMonth={selectedMonth} />
              </div>
            </div>
          </section>

          {/* 4. What You're Drawn To + Moments & Highlights */}
          <section className="section" aria-labelledby="drawn-heading">
            <div className="section-head">
              <span className="section-eyebrow">What You’re Drawn To</span>
              <h2 id="drawn-heading" className="section-title">What you kept reaching for</h2>
              <p className="section-subtitle">
                The shapes of stories and ideas that pulled you in this {isAll ? 'year' : 'month'}.
              </p>
            </div>
            <div className="split-grid">
              <div className="panel panel--soft">
                <GenresPieChart data={filteredData} />
              </div>
              <RecentlyReadList />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
