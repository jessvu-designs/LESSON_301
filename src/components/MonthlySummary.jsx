
import { getYearlyTotals } from '../utils/dataUtils';

export default function MonthlySummary({ data, selectedMonth }) {
  let summary = null;
  if (selectedMonth === 'All') {
    const totals = getYearlyTotals(data);
    // Adding fallbacks for missing metric values
    const books = totals.books ?? 0;
    const pages = totals.pages ?? 0;
    const hours = totals.hours ?? 0;
    const toRead = totals.toRead ?? 0;
    summary = (
      <div className="metrics-list">
        <div className="metrics-item kpi-card">
          <h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>
            <span role="img" aria-label="Books" style={{marginRight: '0.3em'}}>📚</span>Books Read
          </h3>
          <p>{books}</p>
        </div>
        <div className="metrics-item kpi-card">
          <h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>
            <span role="img" aria-label="Pages" style={{marginRight: '0.3em'}}>📄</span>Pages Read
          </h3>
          <p>{pages}</p>
        </div>
        <div className="metrics-item kpi-card">
          <h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>
            <span role="img" aria-label="Hours" style={{marginRight: '0.3em'}}>⏰</span>Hours
          </h3>
          <p>{hours}</p>
        </div>
        <div className="metrics-item kpi-card">
          <h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>
            <span role="img" aria-label="To-Read" style={{marginRight: '0.3em'}}>📝</span>To-Read
          </h3>
          <p>{toRead}</p>
        </div>
      </div>
    );
  } else if (data.length === 1) {
    const item = data[0];
    summary = (
      <div className="metrics-list">
        // Adding fallbacks for missing metric values
        const books = item.books ?? 0;
        const pages = item.pages ?? 0;
        <div className="metrics-item kpi-card">
          <h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>
            <span role="img" aria-label="Books" style={{marginRight: '0.3em'}}>📚</span>Books
          </h3>
          <p>{books}</p>
        </div>
        <div className="metrics-item kpi-card">
          <h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>
            <span role="img" aria-label="Pages" style={{marginRight: '0.3em'}}>📄</span>Pages
          </h3>
          <p>{pages}</p>
        </div>
        <div className="metrics-item kpi-card">
          <h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>
            <span role="img" aria-label="Hours" style={{marginRight: '0.3em'}}>⏰</span>Hours
          </h3>
          <p>{item.hours ?? 0}</p>
        </div>
        <div className="metrics-item kpi-card">
          <h3 style={{fontFamily: 'Lora, serif', fontWeight: 700}}>
            <span role="img" aria-label="To-Read" style={{marginRight: '0.3em'}}>📝</span>To-Read
          </h3>
          <p>{item.toRead ?? 0}</p>
        </div>
      </div>
    );
  } else {
    summary = <div className="metrics-list"><div className="metrics-item kpi-card">No data</div></div>;
  }

  return (
    <div className="monthly-summary">
      {summary}
    </div>
  );
}
