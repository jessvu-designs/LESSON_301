// Utility to load and filter metrics data
export function getFilteredData(data, selectedMonth) {
  if (!data) return [];
  if (selectedMonth === 'All') return data;
  return data.filter(item => item.month === selectedMonth);
}

export function getYearlyTotals(data) {
  if (!data) return {};
  return {
    books: data.reduce((sum, d) => sum + (d.books || 0), 0),
    pages: data.reduce((sum, d) => sum + (d.pages || 0), 0),
    hours: data.reduce((sum, d) => sum + (d.hours || 0), 0),
    started: data.reduce((sum, d) => sum + (d.started || 0), 0),
    finished: data.reduce((sum, d) => sum + (d.finished || 0), 0),
    toRead: data.reduce((sum, d) => sum + (d.toRead || 0), 0),
    avgReadingTime: Math.round(data.reduce((sum, d) => sum + (d.avgReadingTime || 0), 0) / data.length),
    streak: Math.max(...data.map(d => d.streak || 0)),
  };
}
