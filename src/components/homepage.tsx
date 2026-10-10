"use client";

import { useMemo, useState } from "react";
import { exams, practiceSets } from "@/data/homepage";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      className={diagonal ? "icon-arrow icon-arrow-diagonal" : "icon-arrow"}
    >
      <path
        d={diagonal ? "M7 17 17 7M7 7h10v10" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="SSC Prep home">
      <span className="brand-mark" aria-hidden="true">S</span>
      <span className="brand-wordmark">ssc prep</span>
    </a>
  );
}

export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const matchingExams = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return exams;

    return exams.filter((exam) =>
      [exam.name, exam.level, exam.description].some((value) =>
        value.toLowerCase().includes(term),
      ),
    );
  }, [query]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main id="top">
      <header className="site-header">
        <div className="header-inner">
          <Brand />

          <nav className="desktop-navigation" aria-label="Main navigation">
            <a href="#exams">Exams</a>
            <a href="#practice">Practice</a>
          </nav>

          <a className="button button-primary header-action" href="#exams">
            Choose your exam <Arrow />
          </a>

          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>

        <nav
          id="mobile-navigation"
          className={menuOpen ? "mobile-navigation mobile-navigation-open" : "mobile-navigation"}
          aria-label="Mobile navigation"
          hidden={!menuOpen}
        >
          <a href="#exams" onClick={closeMenu}>Explore exams <Arrow /></a>
          <a href="#practice" onClick={closeMenu}>Practice options <Arrow /></a>
          <a className="mobile-primary-link" href="#exams" onClick={closeMenu}>Choose your exam <Arrow /></a>
        </nav>
      </header>

      <section className="hero-section shell" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="hero-kicker"><span aria-hidden="true" /> A FOCUSED SPACE FOR SSC PREPARATION</p>
          <h1 id="hero-heading">Prepare with focus.<br /><em>Make every session count.</em></h1>
          <p className="hero-description">
            Find your exam and build a steady practice routine, one subject at a time.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#exams">Choose your exam <Arrow /></a>
            <a className="hero-secondary-link" href="#practice">Explore practice options <Arrow /></a>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>SSC</span>
          <strong>PREP</strong>
          <span className="hero-index-line" />
          <span className="hero-index-caption">STUDY WITH INTENT</span>
        </div>
      </section>

      <section className="exam-section" id="exams" aria-labelledby="exam-heading">
        <div className="shell">
          <div className="section-heading exam-heading">
            <div>
              <p className="section-index">01 <span /> EXAM DIRECTORY</p>
              <h2 id="exam-heading">Choose your exam</h2>
              <p className="section-description">Browse the supported SSC exam categories.</p>
            </div>
            <label className="exam-search">
              <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none">
                <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.7" />
                <path d="m16 16 4.3 4.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search exams"
                aria-label="Search SSC exams"
              />
              {query && (
                <button type="button" onClick={() => setQuery("")} aria-label="Clear exam search">×</button>
              )}
            </label>
          </div>

          {matchingExams.length > 0 ? (
            <div className="exam-list">
              {matchingExams.map((exam) => (
                <article className="exam-item" key={exam.code}>
                  <span className={"exam-code exam-code-" + exam.tone} aria-hidden="true">{exam.code}</span>
                  <div className="exam-copy">
                    <h3>{exam.name}</h3>
                    <p>{exam.level}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="search-empty" role="status">
              <p>No exams match “{query.trim()}”.</p>
              <button type="button" onClick={() => setQuery("")}>Clear search</button>
            </div>
          )}

          <p className="muted-note">Exam-specific eligibility and dates should be checked in the relevant official SSC notice.</p>
        </div>
      </section>

      <section className="practice-section" id="practice" aria-labelledby="practice-heading">
        <div className="shell">
          <div className="practice-heading-row">
            <div>
              <p className="section-index">02 <span /> PRACTICE</p>
              <h2 id="practice-heading">Start practising</h2>
            </div>
            <p className="section-description">
              A few starting points for your next study session.
            </p>
          </div>

          <div className="practice-list">
            {practiceSets.map((set) => (
              <article className="practice-item" key={set.number}>
                <span className="practice-number">{set.number}</span>
                <div className="practice-copy">
                  <h3>{set.title}</h3>
                  <p>{set.text}</p>
                </div>
                <span className="practice-type">{set.tag}</span>
                <span className="preview-label">Preview</span>
              </article>
            ))}
          </div>

          <p className="practice-note">
            These are sample listings only. Interactive questions and timed tests are not available yet.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <div className="footer-brand">
            <Brand />
            <p>Prepare with purpose.</p>
          </div>
          <nav className="footer-navigation" aria-label="Footer navigation">
            <a href="#exams">Exams</a>
            <a href="#practice">Practice</a>
            <a href="#top">Back to top ↑</a>
          </nav>
          <p className="footer-disclaimer">Independent project · Not affiliated with the Staff Selection Commission.</p>
        </div>
      </footer>
    </main>
  );
}
