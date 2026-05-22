import React from 'react';
import '../styles/recentlyReadList.css';

// Example data, replace with real data as needed
const recentBooks = [
  { title: 'Atomic Habits', author: 'James Clear', rating: 5, cover: 'https://covers.openlibrary.org/b/id/10594763-S.jpg' },
  { title: 'The Midnight Library', author: 'Matt Haig', rating: 4.5, cover: 'https://covers.openlibrary.org/b/id/10594764-S.jpg' },
  { title: 'Educated', author: 'Tara Westover', rating: 4, cover: 'https://covers.openlibrary.org/b/id/10594765-S.jpg' },
  { title: 'Project Hail Mary', author: 'Andy Weir', rating: 3.5, cover: 'https://covers.openlibrary.org/b/id/10594766-S.jpg' },
  { title: 'The Silent Patient', author: 'Alex Michaelides', rating: 2, cover: 'https://covers.openlibrary.org/b/id/10594767-S.jpg' },
];

function renderStars(rating) {
  return (
    <span className="stars" aria-label={`Rating: ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        if (i + 1 <= Math.floor(rating)) {
          return <span key={i} className="star filled" aria-hidden="true">★</span>;
        } else if (i < rating && rating % 1 !== 0) {
          return <span key={i} className="star half" aria-hidden="true">★</span>;
        } else {
          return <span key={i} className="star" aria-hidden="true">★</span>;
        }
      })}
      <span className="star-rating-number" aria-hidden="true">{rating.toFixed(1)}</span>
    </span>
  );
}

export default function RecentlyReadList() {
  return (
    <div className="recently-read-card">
      <h3 className="recently-read-title">Recently Read</h3>
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
    </div>
  );
}
