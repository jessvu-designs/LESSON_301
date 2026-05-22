
import { getYearlyTotals } from '../utils/dataUtils';

export default function MonthlySummary({ data, selectedMonth }) {
  let summary = null;
  if (selectedMonth === 'All') {
    const totals = getYearlyTotals(data);
    summary = (
      <div className="summary-list">
        <div className="summary-item kpi-card">
          <h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>
            <span role="img" aria-label="Books" style={{marginRight: '0.3em'}}>📚</span>Books Read
          </h3>
          <p>{totals.books}</p>
        </div>
        <div className="summary-item kpi-card">
          <h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>
            <span role="img" aria-label="Pages" style={{marginRight: '0.3em'}}>📄</span>Pages Read
          </h3>
          <p>{totals.pages}</p>
        </div>
        <div className="summary-item kpi-card">
          <h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>
            <span role="img" aria-label="Hours" style={{marginRight: '0.3em'}}>⏰</span>Hours
          </h3>
          <p>{totals.hours}</p>
        </div>
        <div className="summary-item kpi-card">
          <h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>
            <span role="img" aria-label="To-Read" style={{marginRight: '0.3em'}}>📝</span>To-Read
          </h3>
          <p>{totals.toRead}</p>
        </div>
      </div>
    );
  } else if (data.length === 1) {
    const item = data[0];
    summary = (
      <div className="summary-list">
        <div className="summary-item kpi-card">
          <h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>
            <span role="img" aria-label="Books" style={{marginRight: '0.3em'}}>📚</span>Books
          </h3>
          <p>{item.books}</p>
        </div>
        <div className="summary-item kpi-card">
          <h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>
            <span role="img" aria-label="Pages" style={{marginRight: '0.3em'}}>📄</span>Pages
          </h3>
          <p>{item.pages}</p>
        </div>
        <div className="summary-item kpi-card">
          <h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>
            <span role="img" aria-label="Hours" style={{marginRight: '0.3em'}}>⏰</span>Hours
          </h3>
          <p>{item.hours}</p>
        </div>
        <div className="summary-item kpi-card">
          <h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>
            <span role="img" aria-label="To-Read" style={{marginRight: '0.3em'}}>📝</span>To-Read
          </h3>
          <p>{item.toRead}</p>
        </div>
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
