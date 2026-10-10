"use client";

import { useMemo, useState } from "react";
import { exams, practiceSets, resources, subjects } from "@/data/homepage";

type LearningTab = "practice" | "subjects" | "resources";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" className={diagonal ? "icon-arrow icon-arrow-diagonal" : "icon-arrow"}>
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
  const [activeTab, setActiveTab] = useState<LearningTab>("practice");

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

  function goToLearning(tab: LearningTab) {
    setActiveTab(tab);
    closeMenu();
  }

  return (
    <main id="top">
      <header className="site-header">
        <div className="header-inner">
          <Brand />

          <nav className="desktop-navigation" aria-label="Main navigation">
            <a href="#exams">Exams</a>
            <a href="#practice">Practice</a>
            <a href="#practice" onClick={() => goToLearning("resources")}>Resources</a>
          </nav>

          <a className="button button-primary header-action" href="#practice">Start practising <Arrow /></a>

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

        <nav id="mobile-navigation" className={menuOpen ? "mobile-navigation mobile-navigation-open" : "mobile-navigation"} aria-label="Mobile navigation">
          <a href="#exams" onClick={closeMenu}>Explore exams <Arrow /></a>
          <a href="#practice" onClick={() => goToLearning("practice")}>Practice <Arrow /></a>
          <a href="#practice" onClick={() => goToLearning("resources")}>Study resources <Arrow /></a>
          <a className="mobile-primary-link" href="#practice" onClick={() => goToLearning("practice")}>Start practising <Arrow /></a>
        </nav>
      </header>

      <section className="hero-section shell">
        <div className="hero-copy">
          <p className="eyebrow"><span /> SSC EXAM PREPARATION</p>
          <h1>Prepare with focus.<br /><em>Move with confidence.</em></h1>
          <p className="hero-description">
            Find your SSC exam, practise the right topics, and make every study session count.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#practice">Start practising <Arrow /></a>
            <a className="button button-secondary" href="#exams">Explore exams <Arrow /></a>
          </div>
          <p className="hero-meta">CGL <span>·</span> CHSL <span>·</span> MTS <span>·</span> GD <span>·</span> CPO and more</p>
        </div>
        <aside className="hero-note" aria-label="Preparation approach">
          <span className="hero-note-label">A SIMPLE ROUTINE</span>
          <div className="routine-step"><span>01</span><p>Choose what to prepare</p></div>
          <div className="routine-step"><span>02</span><p>Practise with purpose</p></div>
          <div className="routine-step"><span>03</span><p>Review and repeat</p></div>
        </aside>
      </section>

      <section className="exam-section" id="exams">
        <div className="shell">
          <div className="section-heading exam-heading">
            <div>
              <p className="eyebrow"><span /> FIND YOUR DIRECTION</p>
              <h2>Choose your exam</h2>
              <p className="section-description">Start with the exam you are working towards.</p>
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
                <a className="exam-item" href="#practice" key={exam.code} onClick={() => goToLearning("practice")}>
                  <span className={"exam-code exam-code-" + exam.tone}>{exam.code}</span>
                  <span className="exam-copy">
                    <strong>{exam.name}</strong>
                    <small>{exam.level}</small>
                  </span>
                  <Arrow diagonal />
                </a>
              ))}
            </div>
          ) : (
            <div className="search-empty">
              <p>No exams match “{query.trim()}”.</p>
              <button type="button" onClick={() => setQuery("")}>Clear search</button>
            </div>
          )}

          <p className="muted-note">Exam categories are listed for preparation purposes. Check official notices for current eligibility and exam details.</p>
        </div>
      </section>

      <section className="learning-section" id="practice">
        <div className="shell">
          <div className="learning-heading" id="resources">
            <div>
              <p className="eyebrow"><span /> YOUR NEXT STUDY SESSION</p>
              <h2>Make practice a habit.</h2>
            </div>
            <p className="section-description">Pick a starting point. Keep your preparation simple and consistent.</p>
          </div>

          <div className="learning-tabs" role="tablist" aria-label="Practice and learning options">
            <button type="button" role="tab" id="tab-practice" aria-selected={activeTab === "practice"} aria-controls="learning-panel" onClick={() => setActiveTab("practice")}>Practice sets</button>
            <button type="button" role="tab" id="tab-subjects" aria-selected={activeTab === "subjects"} aria-controls="learning-panel" onClick={() => setActiveTab("subjects")}>Subjects</button>
            <button type="button" role="tab" id="tab-resources" aria-selected={activeTab === "resources"} aria-controls="learning-panel" onClick={() => setActiveTab("resources")}>Study resources</button>
          </div>

          <div className="learning-panel" id="learning-panel" role="tabpanel" aria-labelledby={"tab-" + activeTab}>
            {activeTab === "practice" && (
              <div className="practice-list">
                {practiceSets.map((set) => (
                  <article className="practice-item" key={set.number}>
                    <span className="practice-number">{set.number}</span>
                    <div className="practice-copy">
                      <span>{set.category}</span>
                      <h3>{set.title}</h3>
                      <p>{set.text}</p>
                    </div>
                    <button className="icon-action" type="button" aria-label={"Explore " + set.tag} onClick={() => setActiveTab("subjects")}><Arrow diagonal /></button>
                  </article>
                ))}
                <div className="pyq-inline">
                  <div>
                    <strong>Previous-year questions</strong>
                    <p>Use verified papers to understand question patterns. Current previews are illustrative only.</p>
                  </div>
                  <button type="button" className="text-action" onClick={() => setActiveTab("subjects")}>Browse subjects <Arrow /></button>
                </div>
              </div>
            )}

            {activeTab === "subjects" && (
              <div className="subject-list">
                {subjects.map((subject) => (
                  <article className="subject-item" key={subject.number}>
                    <span>{subject.number}</span>
                    <div><h3>{subject.name}</h3><p>{subject.text}</p></div>
                    <Arrow diagonal />
                  </article>
                ))}
                <p className="tab-helper">Subject links are preparation categories; dedicated topic-wise question pages can be added in the next development phase.</p>
              </div>
            )}

            {activeTab === "resources" && (
              <div className="resource-list">
                {resources.map((resource) => (
                  <article className="resource-item" key={resource.label}>
                    <span className="resource-symbol" aria-hidden="true">{resource.symbol}</span>
                    <div><span>{resource.label}</span><h3>{resource.title}</h3><p>{resource.text}</p></div>
                    <button type="button" className="icon-action" aria-label={"Browse subjects for " + resource.label.toLowerCase()} onClick={() => setActiveTab("subjects")}><Arrow diagonal /></button>
                  </article>
                ))}
                <p className="tab-helper">Resource entries are previews. Full study-material pages will be developed separately.</p>
              </div>
            )}
          </div>

          <p className="learning-disclaimer">Sample practice listings are illustrative and are not represented as official SSC papers or notifications.</p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <div className="footer-brand">
            <Brand />
            <p>A clearer way to prepare.</p>
          </div>
          <nav className="footer-navigation" aria-label="Footer navigation">
            <a href="#exams">Exams</a>
            <a href="#practice" onClick={() => goToLearning("practice")}>Practice</a>
            <a href="#practice" onClick={() => goToLearning("resources")}>Resources</a>
          </nav>
          <p className="footer-disclaimer">Independent project · Not affiliated with SSC</p>
        </div>
      </footer>
    </main>
  );
}
