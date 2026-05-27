import React from 'react';
import '../styles/recentlyReadList.css';

const recentBooks = [
  { title: 'Atomic Habits', author: 'James Clear', rating: 5, cover: 'https://covers.openlibrary.org/b/id/10594763-S.jpg' },
  { title: 'The Midnight Library', author: 'Matt Haig', rating: 4.5, cover: 'https://covers.openlibrary.org/b/id/10594764-S.jpg' },
  { title: 'Educated', author: 'Tara Westover', rating: 4, cover: 'https://covers.openlibrary.org/b/id/10594765-S.jpg' },
  { title: 'Project Hail Mary', author: 'Andy Weir', rating: 3.5, cover: 'https://covers.openlibrary.org/b/id/10594766-S.jpg' },
];

const featuredHighlight = {
  quote: 'You do not rise to the level of your goals. You fall to the level of your systems.',
  source: 'Atomic Habits \u00b7 James Clear',
};

function renderStars(rating) {
  return (
    <span className="stars" aria-label={`Rating: ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        if (i + 1 <= Math.floor(rating)) {
          return <span key={i} className="star filled" aria-hidden="true">★</span>;
        } else if (i < rating && rating % 1 !== 0) {
          return <span key={i} className="star half" aria-hidden="true">★</span>;
        }
        return <span key={i} className="star" aria-hidden="true">★</span>;
      })}
      <span className="star-rating-number" aria-hidden="true">{rating.toFixed(1)}</span>
    </span>
  );
}

export default function RecentlyReadList() {
  return (
    <section className="moments-card" aria-labelledby="moments-heading">
      <header>
        <h3 id="moments-heading" className="panel__title">Moments &amp; Highlights</h3>
        <p className="panel__hint">A line that stayed with you, and the books you closed most recently.</p>
      </header>

      <blockquote className="highlight-quote">
        <p className="highlight-quote__text">“{featuredHighlight.quote}”</p>
        <cite className="highlight-quote__attr">— {featuredHighlight.source}</cite>
      </blockquote>

      <span className="recently-read-subhead">Recently Closed</span>
      <ul className="recently-read-list">
        {recentBooks.map((book, idx) => (
          <li key={idx} className="recently-read-item">
            <img className="book-cover" src={book.cover} alt={`Cover of ${book.title} by ${book.author}`} />
            <div className="book-info">
              <span className="book-title">{book.title}</span>
              <span className="book-author">by {book.author}</span>
            </div>
            <div className="book-rating">{renderStars(book.rating)}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
