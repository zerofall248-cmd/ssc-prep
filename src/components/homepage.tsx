"use client";

import { useMemo, useState } from "react";
import { exams, faqs, practiceSets, resources, subjects } from "@/data/homepage";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" className={diagonal ? "arrow arrow-diagonal" : "arrow"}>
      <path
        d={diagonal ? "M7 17 17 7M7 7h10v10" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="SSC Prep home">
      <span className="brand-symbol" aria-hidden="true">S<span>.</span></span>
      <span className="brand-text"><strong>ssc prep</strong><small>THE PREP ROOM</small></span>
    </a>
  );
}

export default function Homepage() {
  const [noticeVisible, setNoticeVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const matchingExams = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return exams;
    return exams.filter((exam) =>
      [exam.name, exam.level, exam.description].some((value) => value.toLowerCase().includes(term)),
    );
  }, [query]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main id="top">
      {noticeVisible && (
        <div className="announcement">
          <p>Good preparation is built one session at a time.
            <a href="#practice">Find a place to start <Arrow /></a>
          </p>
          <button type="button" className="notice-close" aria-label="Dismiss announcement" onClick={() => setNoticeVisible(false)}>×</button>
        </div>
      )}

      <header className="header">
        <div className="nav-wrap">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#exams">Exams</a>
            <a href="#practice">Practice sets</a>
            <a href="#pyq">PYQ approach</a>
            <a href="#resources">Resources</a>
          </nav>
          <div className="nav-cta">
            <a className="nav-text-link" href="#how-it-works">How it works</a>
            <a className="button button-dark button-small" href="#exams">Start practising <Arrow /></a>
          </div>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen((open) => !open)}>
            <span /><span />
          </button>
        </div>
        <nav id="mobile-nav" className={menuOpen ? "mobile-nav mobile-nav-open" : "mobile-nav"} aria-label="Mobile navigation">
          <a href="#exams" onClick={closeMenu}>Explore exams <Arrow /></a>
          <a href="#practice" onClick={closeMenu}>Practice sets <Arrow /></a>
          <a href="#pyq" onClick={closeMenu}>Previous-year questions <Arrow /></a>
          <a href="#resources" onClick={closeMenu}>Study resources <Arrow /></a>
          <a href="#how-it-works" onClick={closeMenu}>How it works <Arrow /></a>
        </nav>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> BUILT FOR THE NEXT STEP</div>
          <h1>Your next government job starts with <em>better practice.</em></h1>
          <p className="hero-description">Less scattered study. More focused preparation. Find your exam, practise with purpose, and build a routine you can actually keep.</p>
          <div className="hero-actions">
            <a className="button button-dark button-large" href="#exams">Find your exam <Arrow /></a>
            <a className="button button-outline button-large" href="#practice">Explore practice sets <Arrow /></a>
          </div>
          <p className="hero-note"><span className="check-icon">✓</span> Made for focused, everyday preparation</p>
        </div>

        <div className="hero-art" role="img" aria-label="Illustration of a sample quantitative aptitude question">
          <div className="hero-back-shape" />
          <div className="float-tag float-tag-top">YOUR DAILY<br />DOSE OF FOCUS <span>✳</span></div>
          <div className="question-sheet">
            <div className="sheet-header"><span><i /> PRACTICE DESK</span><b>01 / 10</b></div>
            <div className="sheet-subject">QUANTITATIVE APTITUDE</div>
            <h2>If 25% of a number is 180, what is the number?</h2>
            <div className="answer-options" aria-hidden="true">
              <div><b>A</b><span>450</span></div>
              <div className="answer-picked"><b>B</b><span>720</span><i /></div>
              <div><b>C</b><span>640</span></div>
              <div><b>D</b><span>540</span></div>
            </div>
            <div className="sheet-footer"><span>ILLUSTRATIVE SAMPLE</span><span>KEEP GOING <Arrow /></span></div>
          </div>
          <div className="float-tag float-tag-bottom"><b>✳</b><span>SMALL STEPS.<br />REAL PROGRESS.</span></div>
          <span className="orbit orbit-a" aria-hidden="true" />
          <span className="orbit orbit-b" aria-hidden="true" />
        </div>
      </section>

      <div className="exam-ribbon" aria-label="Supported exam categories">
        <div className="ribbon-inner">
          <span className="ribbon-label">ONE PLACE TO PREPARE</span><i />
          <span>SSC CGL</span><b>✳</b><span>SSC CHSL</span><b>✳</b><span>SSC MTS</span><b>✳</b><span>SSC GD</span><b>✳</b><span>AND MORE</span>
        </div>
      </div>

      <section className="section section-white" id="exams">
        <div className="shell">
          <div className="section-heading heading-row">
            <div><div className="eyebrow"><span className="eyebrow-dot" /> CHOOSE YOUR DIRECTION</div><h2>One goal at a time.<br /><em>Your exam, your plan.</em></h2></div>
            <p className="section-intro">Start with the exam you have in mind. Keep your next steps clear, organised and focused.</p>
          </div>
          <div className="exam-tools">
            <label className="exam-search">
              <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="none"><circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.8" /><path d="m16 16 4.3 4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by exam, level or role..." aria-label="Search SSC exams" />
              {query && <button type="button" aria-label="Clear search" onClick={() => setQuery("")}>×</button>}
            </label>
            <span className="result-count">{matchingExams.length} {matchingExams.length === 1 ? "exam" : "exams"} to explore</span>
          </div>
          {matchingExams.length ? (
            <div className="exam-grid">
              {matchingExams.map((exam, index) => (
                <article className="exam-card" key={exam.code}>
                  <div className="exam-card-top"><span className={"exam-monogram tone-" + exam.tone}>{exam.code}</span><span className="card-index">{String(index + 1).padStart(2, "0")}</span></div>
                  <div className="exam-card-copy"><span className="exam-level">{exam.level}</span><h3>{exam.name}</h3><p>{exam.description}</p></div>
                  <a className="text-link" href="#practice">Explore practice <Arrow /></a>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state"><span>?</span><h3>No matching exam found</h3><p>Try another exam name, level or role.</p><button type="button" onClick={() => setQuery("")}>Clear search</button></div>
          )}
          <p className="fine-print">Exam-specific details should always be checked against the relevant official notification. These cards are introductory examples.</p>
        </div>
      </section>

      <section className="section section-paper" id="practice">
        <div className="shell">
          <div className="section-heading heading-row">
            <div><div className="eyebrow"><span className="eyebrow-dot" /> START SMALL. STAY CONSISTENT.</div><h2>Practice that fits<br /><em>into your day.</em></h2></div>
            <p className="section-intro">You do not need a perfect timetable to begin. Choose one focused set and give yourself a place to start.</p>
          </div>
          <div className="practice-grid">
            {practiceSets.map((set) => (
              <article className={"practice-card " + set.tone} key={set.number}>
                <div className="practice-top"><span>{set.number}</span><span className="round-arrow"><Arrow diagonal /></span></div>
                <span className="practice-label">{set.category}</span><h3>{set.title}</h3><p>{set.text}</p>
                <a className="practice-link" href="#subjects">Explore {set.tag} <Arrow /></a>
              </article>
            ))}
          </div>
          <p className="fine-print">These are illustrative previews, not live tests or verified official question papers.</p>
        </div>
      </section>

      <section className="pyq-section" id="pyq">
        <div className="shell pyq-layout">
          <div className="pyq-copy">
            <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> LEARN FROM THE PATTERN</div>
            <h2>Previous-year questions.<br /><em>A clearer way to revise.</em></h2>
            <p>Understand how topics are tested, revisit concepts that need work, and turn every practice session into a useful lesson.</p>
            <a className="button button-paper button-large" href="#subjects">Explore subject practice <Arrow /></a>
            <span className="pyq-disclaimer">Preview of the planned PYQ experience.</span>
          </div>
          <div className="pyq-art" role="img" aria-label="Illustrative question review card">
            <div className="pyq-sheet">
              <div className="pyq-sheet-top"><span>QUESTION REVIEW</span><b>01</b></div><hr />
              <span className="pyq-topic">NUMBER SYSTEM · SAMPLE</span>
              <h3>Which of these numbers is divisible by 9?</h3>
              <div className="pyq-answer"><b>A</b> 4512</div>
              <div className="pyq-answer pyq-correct"><b>B</b> 5724 <strong>✓</strong></div>
              <div className="pyq-answer"><b>C</b> 6325</div>
              <div className="pyq-answer"><b>D</b> 8143</div>
              <div className="pyq-explanation"><strong>REMEMBER</strong><br />A number is divisible by 9 when the sum of its digits is divisible by 9.</div>
            </div>
            <div className="pyq-stamp">PRACTISE<br />WITH PURPOSE</div>
          </div>
        </div>
      </section>

      <section className="section section-white" id="subjects">
        <div className="shell">
          <div className="section-heading heading-row">
            <div><div className="eyebrow"><span className="eyebrow-dot" /> BUILD YOUR BASE</div><h2>Four core areas.<br /><em>One stronger you.</em></h2></div>
            <p className="section-intro">Organise your preparation by subject and build confidence through regular, targeted revision.</p>
          </div>
          <div className="subject-grid">
            {subjects.map((subject) => (
              <a className={"subject-card " + subject.tone} href="#resources" key={subject.number}>
                <span className="subject-number">{subject.number}</span><span className="subject-open"><Arrow diagonal /></span>
                <h3>{subject.name}</h3><p>{subject.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper" id="resources">
        <div className="shell">
          <div className="resources-heading"><div><div className="eyebrow"><span className="eyebrow-dot" /> YOUR STUDY COMPANION</div><h2>Useful resources.<br /><em>Less last-minute scrambling.</em></h2></div><p className="section-intro">A home for the material you return to, revise and build on.</p></div>
          <div className="resource-grid">
            {resources.map((resource) => (
              <article className="resource-card" id={resource.label === "CURRENT AFFAIRS" ? "current-affairs" : undefined} key={resource.label}>
                <span className="resource-symbol">{resource.symbol}</span><span className="resource-label">{resource.label}</span><h3>{resource.title}</h3><p>{resource.text}</p><a className="text-link" href="#subjects">Explore area <Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white" id="how-it-works">
        <div className="shell steps-layout">
          <div className="steps-heading"><div className="eyebrow"><span className="eyebrow-dot" /> SIMPLE BY DESIGN</div><h2>Make preparation<br /><em>feel manageable.</em></h2><p>Clear next steps help you spend less time deciding what to do, and more time doing it.</p></div>
          <div className="steps-list">
            <article><span>01</span><div><h3>Choose your exam</h3><p>Start with a goal that gives your study sessions direction.</p></div><Arrow diagonal /></article>
            <article><span>02</span><div><h3>Practise with purpose</h3><p>Work through focused questions, one subject at a time.</p></div><Arrow diagonal /></article>
            <article><span>03</span><div><h3>Review and repeat</h3><p>Learn from explanations and return to topics that need attention.</p></div><Arrow diagonal /></article>
          </div>
        </div>
      </section>

      <section className="section section-paper" id="faq">
        <div className="shell faq-layout">
          <div><div className="eyebrow"><span className="eyebrow-dot" /> GOOD TO KNOW</div><h2>A few things<br /><em>you might wonder.</em></h2><p className="section-intro">Clear answers about what is available today and what is still planned.</p></div>
          <div className="faq-list">
            {faqs.map((faq, index) => <details className="faq-item" key={faq.question} open={index === 0}><summary>{faq.question}<span className="faq-plus">+</span></summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner"><span className="cta-decoration cta-star" aria-hidden="true">✳</span><span className="cta-decoration cta-letter" aria-hidden="true">S.</span>
          <div><span className="cta-kicker">YOUR NEXT STEP STARTS HERE</span><h2>Show up today.<br /><em>Thank yourself later.</em></h2><p>Choose an exam and begin with one small, focused practice session.</p><a className="button button-paper button-large" href="#exams">Find your starting point <Arrow /></a></div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-top">
          <div className="footer-brand"><Brand /><p>A clearer place to prepare for your next step.</p></div>
          <div className="footer-links">
            <div><strong>EXPLORE</strong><a href="#exams">Exams</a><a href="#practice">Practice sets</a><a href="#pyq">PYQ approach</a></div>
            <div><strong>LEARN</strong><a href="#subjects">Subjects</a><a href="#resources">Resources</a><a href="#current-affairs">Current affairs</a></div>
            <div><strong>ABOUT</strong><a href="#how-it-works">How it works</a><a href="#faq">FAQs</a><a href="#top">Back to top ↑</a></div>
          </div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} SSC Prep. Built for focused preparation.</span><span>Independent project · Not affiliated with SSC</span></div>
      </footer>
    </main>
  );
}
