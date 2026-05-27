import React from 'react';
import { buildNarrative } from '../utils/dataUtils';

export default function HeroSection({ data, selectedMonth }) {
  const { eyebrow, sentence, chips } = buildNarrative(data, selectedMonth);

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-eyebrow">{eyebrow}</div>
      <h1 id="hero-heading" className="hero-narrative">{sentence}</h1>
      {chips.length > 0 && (
        <div className="hero-meta" role="list">
          {chips.map((chip, i) => (
            <span key={i} className="hero-chip" role="listitem">
              {chip.label}: <strong>&nbsp;{chip.value}</strong>
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
