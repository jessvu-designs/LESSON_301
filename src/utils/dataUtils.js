// Utility to load and filter metrics data
export function getFilteredData(data, selectedMonth) {
  if (!data) return [];
  if (selectedMonth === 'All') return data;
  return data.filter(item => item.month === selectedMonth);
}

export function getYearlyTotals(data) {
  if (!data || data.length === 0) return {};
  return {
    books: data.reduce((sum, d) => sum + (d.books || 0), 0),
    pages: data.reduce((sum, d) => sum + (d.pages || 0), 0),
    hours: data.reduce((sum, d) => sum + (d.hours || 0), 0),
    started: data.reduce((sum, d) => sum + (d.started || 0), 0),
    finished: data.reduce((sum, d) => sum + (d.finished || 0), 0),
    toRead: data.reduce((sum, d) => sum + (d.toRead || 0), 0),
    avgReadingTime: Math.round(
      data.reduce((sum, d) => sum + (d.avgReadingTime || 0), 0) / data.length
    ),
    streak: Math.max(...data.map(d => d.streak || 0)),
  };
}

// Top genre across the provided slice
export function getTopGenre(data) {
  const counts = {};
  (data || []).forEach(d => (d.genres || []).forEach(g => {
    counts[g] = (counts[g] || 0) + 1;
  }));
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return entries[0]?.[0] || null;
}

// Month with the most books read
export function getPeakMonth(data) {
  if (!data || data.length === 0) return null;
  return data.reduce((best, d) => (d.books > (best?.books ?? -1) ? d : best), null);
}

// Short, warm narrative for the hero
export function buildNarrative(data, selectedMonth) {
  if (!data || data.length === 0) {
    return {
      eyebrow: 'Your reading year',
      sentence: 'A quiet page, waiting to be turned.',
      chips: [],
    };
  }

  const totals = getYearlyTotals(data);
  const topGenre = getTopGenre(data);

  if (selectedMonth === 'All') {
    const peak = getPeakMonth(data);
    return {
      eyebrow: 'Your reading year so far',
      sentence: `You spent ${totals.hours} unhurried hours with ${totals.books} books${topGenre ? `, often returning to ${topGenre.toLowerCase()}` : ''}.`,
      chips: [
        topGenre && { label: 'Most reached for', value: topGenre },
        peak && { label: 'Most-read month', value: peak.month },
        { label: 'Longest streak', value: `${totals.streak} days` },
      ].filter(Boolean),
    };
  }

  const m = data[0];
  const tone =
    m.books >= 5 ? 'a full, immersive' :
    m.books >= 3 ? 'a steady, well-paced' :
    'a slower, more reflective';

  return {
    eyebrow: `${selectedMonth} felt\u2026`,
    sentence: `${selectedMonth} was ${tone} month \u2014 ${m.books} books, ${m.pages.toLocaleString()} pages, and quiet evenings that added up.`,
    chips: [
      topGenre && { label: 'Drawn to', value: topGenre },
      { label: 'Reading streak', value: `${m.streak} days` },
      { label: 'Usual pace', value: `${m.avgReadingTime} min / session` },
    ].filter(Boolean),
  };
}
