import React from 'react';
import '../styles/recentlyReadList.css';

// Example data, replace with real data as needed
const recentBooks = [
  { title: 'Atomic Habits', author: 'James Clear', rating: 5 },
  { title: 'The Midnight Library', author: 'Matt Haig', rating: 4 },
  { title: 'Educated', author: 'Tara Westover', rating: 5 },
  { title: 'Project Hail Mary', author: 'Andy Weir', rating: 4 },
  { title: 'The Silent Patient', author: 'Alex Michaelides', rating: 3 },
];

function renderStars(rating) {
  return (
    <span className="stars">
      {Array.from({ length: 5 }).map((_, i) =>
        <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
      )}
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
