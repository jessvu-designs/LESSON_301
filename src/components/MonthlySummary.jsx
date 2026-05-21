
import { getYearlyTotals } from '../utils/dataUtils';

export default function MonthlySummary({ data, selectedMonth }) {
  let summary = null;
  if (selectedMonth === 'All') {
    const totals = getYearlyTotals(data);
    summary = (
      <div className="summary-list">
        <div className="summary-item kpi-card"><h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>Books Read</h3><p>{totals.books}</p></div>
        <div className="summary-item kpi-card"><h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>Pages Read</h3><p>{totals.pages}</p></div>
        <div className="summary-item kpi-card"><h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>Hours</h3><p>{totals.hours}</p></div>
        <div className="summary-item kpi-card"><h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>To-Read</h3><p>{totals.toRead}</p></div>
      </div>
    );
  } else if (data.length === 1) {
    const item = data[0];
    summary = (
      <div className="summary-list">
        <div className="summary-item kpi-card"><h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>Books</h3><p>{item.books}</p></div>
        <div className="summary-item kpi-card"><h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>Pages</h3><p>{item.pages}</p></div>
        <div className="summary-item kpi-card"><h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>Hours</h3><p>{item.hours}</p></div>
        <div className="summary-item kpi-card"><h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>To-Read</h3><p>{item.toRead}</p></div>
      </div>
    );
  } else {
    summary = <div className="summary-list"><div className="summary-item kpi-card">No data</div></div>;
  }

  return (
    <div className="monthly-summary">
      {summary}
    </div>
  );
}
