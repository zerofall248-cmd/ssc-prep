"use client";

import { useEffect, useMemo, useState, type FocusEvent } from "react";
import { exams, practiceSets, resources, subjects, type ExamItem, type SubjectVisual } from "@/data/homepage";

type IconName = "home" | "exam" | "practice" | "subjects" | "library" | "search" | "menu" | "collapse" | "expand" | "arrow" | "sparkle" | "book";

const navigation = [
  { id: "top", label: "Home", icon: "home" },
  { id: "exams", label: "Exams", icon: "exam" },
  { id: "practice", label: "Practice", icon: "practice" },
  { id: "subjects", label: "Subjects", icon: "subjects" },
  { id: "library", label: "Study library", icon: "library" },
] as const;

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {name === "home" && <><path d="m3.5 10 8.5-7 8.5 7" /><path d="M5.8 9v11h12.4V9M9.5 20v-6h5v6" /></>}
      {name === "exam" && <><rect x="5" y="3.5" width="14" height="17" rx="2.2" /><path d="M9 8h6M9 12h6M9 16h3.5" /><path d="m3 6 1.5 1.5M20 16.5l1.5 1.5" /></>}
      {name === "practice" && <><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v15H6.5A2.5 2.5 0 0 0 4 21V6.5Z" /><path d="M4 6.5v14M8 8h8M8 12h6" /><path d="m15 15 2 2 3.5-4" /></>}
      {name === "subjects" && <><rect x="3" y="4" width="8" height="7" rx="1.5" /><rect x="13" y="4" width="8" height="7" rx="1.5" /><rect x="3" y="13" width="8" height="7" rx="1.5" /><rect x="13" y="13" width="8" height="7" rx="1.5" /></>}
      {name === "library" && <><path d="M4 5.5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 1-2-2v-12Z" /><path d="M4 5.5v12M8 7h7M8 11h7M8 15h5" /><path d="M16.5 3.5v16" /></>}
      {name === "search" && <><circle cx="10.7" cy="10.7" r="6.7" /><path d="m15.7 15.7 4.4 4.4" /></>}
      {name === "menu" && <><path d="M4 7h16M4 12h16M4 17h16" /></>}
      {name === "collapse" && <><rect x="3.5" y="4" width="17" height="16" rx="2" /><path d="M9 4v16M13 9l-2 3 2 3" /></>}
      {name === "expand" && <><rect x="3.5" y="4" width="17" height="16" rx="2" /><path d="M9 4v16M13 9l2 3-2 3" /></>}
      {name === "arrow" && <><path d="M4 12h15M13 6l6 6-6 6" /></>}
      {name === "sparkle" && <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" /></>}
      {name === "book" && <><path d="M3.5 5.5A2.5 2.5 0 0 1 6 3h5v17H6a2.5 2.5 0 0 0-2.5 2V5.5Z" /><path d="M20.5 5.5A2.5 2.5 0 0 0 18 3h-5v17h5a2.5 2.5 0 0 1 2.5 2V5.5Z" /></>}
    </svg>
  );
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 32 32" width="25" height="25" fill="none">
        <path d="M5 8.5c4.2-1.8 7.6-1.1 11 1.4 3.4-2.5 6.8-3.2 11-1.4v15c-4.2-1.8-7.6-1.1-11 1.4-3.4-2.5-6.8-3.2-11-1.4v-15Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M16 10v15M8.5 12.5c2-.5 3.9-.1 5.3.9M8.5 16c2-.5 3.9-.1 5.3.9M18.2 13.4c1.6-1 3.6-1.4 5.3-.9M18.2 16.9c1.6-1 3.6-1.4 5.3-.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function Brand({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <a className="brand" href="#top" aria-label="SSC Prep home" onClick={onNavigate}>
      <BrandMark />
      <span className="brand-wordmark">SSC Prep</span>
    </a>
  );
}

function HeroBooks({ side }: { side: "left" | "right" }) {
  if (side === "left") {
    return (
      <svg aria-hidden="true" className="hero-books hero-books-left" viewBox="0 0 190 142" fill="none">
        <ellipse cx="96" cy="126" rx="66" ry="7" fill="#3E38A6" opacity=".24" />
        <g transform="rotate(-4 93 110)">
          <rect x="28" y="103" width="126" height="18" rx="5" fill="#EF875A" />
          <path d="M39 106h8v12h-8z" fill="#F7C3A6" />
          <path d="M52 108h85" stroke="#FFB494" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g transform="rotate(3 93 88)">
          <rect x="37" y="83" width="122" height="20" rx="5" fill="#F8F5FF" />
          <rect x="37" y="83" width="122" height="7" rx="4" fill="#BDE5D6" />
          <path d="M48 93h98" stroke="#C8C3F4" strokeWidth="1.7" />
        </g>
        <g transform="rotate(-2 94 68)">
          <rect x="24" y="62" width="139" height="21" rx="6" fill="#5543C7" />
          <rect x="31" y="63" width="124" height="6" rx="3" fill="#8B79F6" />
          <path d="M43 74h99" stroke="#9487F6" strokeWidth="1.7" />
        </g>
        <g>
          <rect x="43" y="42" width="99" height="21" rx="6" fill="#FFD46F" />
          <rect x="43" y="42" width="99" height="6" rx="3" fill="#FFE7A7" />
          <path d="M54 54h76" stroke="#E6B84E" strokeWidth="1.6" />
        </g>
        <g stroke="#FFDC8E" strokeWidth="3" fill="none">
          <circle cx="67" cy="32" r="12" />
          <circle cx="103" cy="32" r="12" />
          <path d="M79 32h12M55 31l-5-3M115 31l6-3" strokeLinecap="round" />
        </g>
        <circle cx="153" cy="43" r="4" stroke="#FFDC8E" strokeWidth="2" />
        <circle cx="24" cy="45" r="3" fill="#9FE7E1" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="hero-books hero-books-right" viewBox="0 0 190 142" fill="none">
      <ellipse cx="98" cy="129" rx="70" ry="7" fill="#3E38A6" opacity=".24" />
      <g transform="rotate(3 100 116)">
        <rect x="33" y="107" width="122" height="17" rx="4" fill="#E9A36E" />
        <rect x="33" y="107" width="122" height="5" rx="3" fill="#FFD19E" />
      </g>
      <g transform="rotate(-2 100 97)">
        <rect x="26" y="86" width="135" height="21" rx="5" fill="#F7F1FF" />
        <rect x="26" y="86" width="135" height="7" rx="4" fill="#A9E4D2" />
        <path d="M41 98h100" stroke="#D3C9F7" strokeWidth="1.6" />
      </g>
      <g transform="rotate(2 101 77)">
        <rect x="43" y="66" width="116" height="20" rx="5" fill="#FDBF70" />
        <rect x="43" y="66" width="116" height="6" rx="3" fill="#FFE1A6" />
      </g>
      <rect x="63" y="43" width="29" height="25" rx="4" fill="#E6D7FF" />
      <rect x="96" y="31" width="30" height="37" rx="4" fill="#A18AF6" />
      <rect x="130" y="22" width="25" height="46" rx="4" fill="#725FE1" />
      <path d="M68 48h19M68 53h15M101 37h20M101 43h20M135 30h15M135 36h15" stroke="#F7F2FF" strokeWidth="2" strokeLinecap="round" opacity=".85" />
      <path d="M15 70c8-1 11-5 12-12 1 7 4 11 12 12-8 1-11 5-12 12-1-7-4-11-12-12Z" fill="#F9D27B" />
      <circle cx="164" cy="45" r="4" stroke="#B9F1E1" strokeWidth="2" />
    </svg>
  );
}

function LearningArtwork({ variant }: { variant: SubjectVisual }) {
  return (
    <div className={"learning-artwork artwork-" + variant} aria-hidden="true">
      <svg viewBox="0 0 180 102" fill="none">
        {variant === "quantitative" && (
          <>
            <rect x="48" y="19" width="88" height="64" rx="10" fill="#FFFFFF" opacity=".88" transform="rotate(5 48 19)" />
            <rect x="60" y="30" width="18" height="17" rx="4" fill="#D7CEFF" />
            <rect x="85" y="30" width="18" height="17" rx="4" fill="#F9C4D6" />
            <rect x="110" y="30" width="18" height="17" rx="4" fill="#B7E9D9" />
            <rect x="60" y="54" width="18" height="17" rx="4" fill="#B7E9D9" />
            <rect x="85" y="54" width="18" height="17" rx="4" fill="#D7CEFF" />
            <rect x="110" y="54" width="18" height="17" rx="4" fill="#F7D78F" />
            <circle cx="37" cy="35" r="12" fill="#FFFFFF" opacity=".72" />
            <path d="M31 35h12M37 29v12" stroke="#8A77E5" strokeWidth="2.4" strokeLinecap="round" />
            <circle cx="145" cy="77" r="5" fill="#F5C0D4" />
          </>
        )}
        {variant === "reasoning" && (
          <>
            <rect x="48" y="30" width="70" height="48" rx="10" fill="#FFFFFF" opacity=".75" transform="rotate(-7 48 30)" />
            <circle cx="66" cy="47" r="10" fill="#A99AF4" />
            <rect x="82" y="38" width="19" height="19" rx="5" fill="#F9C4D8" />
            <path d="M63 65h37" stroke="#8674DF" strokeWidth="3" strokeLinecap="round" />
            <path d="M118 22 132 36 118 50 104 36 118 22Z" fill="#FFFFFF" opacity=".85" />
            <circle cx="141" cy="62" r="11" fill="#B3E6D8" />
            <circle cx="141" cy="62" r="4" fill="#60BFA6" />
            <path d="m30 74 9-9 9 9-9 9-9-9Z" fill="#FFD77C" />
            <circle cx="48" cy="21" r="3" fill="#AA9AF4" />
          </>
        )}
        {variant === "english" && (
          <>
            <ellipse cx="93" cy="81" rx="55" ry="7" fill="#D6B9EF" opacity=".45" />
            <g transform="rotate(-7 89 72)">
              <rect x="41" y="62" width="97" height="17" rx="4" fill="#7965E5" />
              <rect x="41" y="62" width="97" height="5" rx="2.5" fill="#A99AF6" />
              <path d="M51 72h77" stroke="#DCD4FF" strokeWidth="1.6" />
            </g>
            <g transform="rotate(5 91 55)">
              <rect x="35" y="43" width="102" height="20" rx="4" fill="#F39FC8" />
              <rect x="35" y="43" width="102" height="6" rx="3" fill="#FFC8DF" />
            </g>
            <g transform="rotate(-4 91 34)">
              <rect x="47" y="25" width="84" height="19" rx="4" fill="#B2E4D4" />
              <rect x="47" y="25" width="84" height="6" rx="3" fill="#D8F5EA" />
            </g>
            <rect x="119" y="18" width="22" height="26" rx="5" fill="#FFFFFF" />
            <path d="M125 25h10M125 30h10M125 35h7" stroke="#8A77E5" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="31" cy="36" r="6" fill="#FFD77C" />
          </>
        )}
        {variant === "awareness" && (
          <>
            <circle cx="91" cy="52" r="32" fill="#FFFFFF" opacity=".8" />
            <circle cx="91" cy="52" r="24" stroke="#7D71E8" strokeWidth="2" />
            <path d="M67 52h48M91 28c-8 8-11 16-11 24s3 16 11 24M91 28c8 8 11 16 11 24s-3 16-11 24M73 38h36M73 66h36" stroke="#7D71E8" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M35 74h25l-5-19H40l-5 19Z" fill="#F2B8D2" />
            <path d="M39 55c0-7 4-12 9-12s9 5 9 12" stroke="#F2B8D2" strokeWidth="3" strokeLinecap="round" />
            <circle cx="133" cy="28" r="8" fill="#FFD77C" />
            <path d="m130 28 2 2 4-5" stroke="#986E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m129 76 7-7 7 7-7 7-7-7Z" fill="#A9DCCD" />
          </>
        )}
      </svg>
    </div>
  );
}

export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [query, setQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const matchingExams = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return exams;
    return exams.filter((exam) =>
      [exam.name, exam.level, exam.description, exam.code].some((value) =>
        value.toLowerCase().includes(term),
      ),
    );
  }, [query]);

  const suggestedExams = matchingExams.slice(0, 5);
  const searchPanelOpen = searchFocused && query.trim().length > 0;
  const visiblePractice = useMemo(
    () => selectedSubject ? practiceSets.filter((item) => item.tag === selectedSubject) : practiceSets,
    [selectedSubject],
  );

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.id).filter((id) => id !== "top");
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    if (sections.length === 0) return;

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
        else visible.delete(entry.target.id);
      });
      if (window.scrollY < 140) {
        setActiveSection("top");
        return;
      }
      const candidate = [...visible.entries()]
        .filter(([, top]) => top > -80)
        .sort((a, b) => a[1] - b[1])[0];
      if (candidate) setActiveSection(candidate[0]);
    }, { rootMargin: "-90px 0px -58% 0px", threshold: 0 });
    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY < 140) setActiveSection("top");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  function navigateTo(id: string) {
    setActiveSection(id);
    closeMenu();
  }

  function selectExam(exam: ExamItem) {
    setQuery(exam.name);
    setSearchFocused(false);
    setActiveSection("exams");
    closeMenu();
    document.getElementById("exams")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function focusPractice(tag: string) {
    setSelectedSubject((current) => current === tag ? null : tag);
    setActiveSection("practice");
    document.getElementById("practice")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleSearchBlur(event: FocusEvent<HTMLDivElement>) {
    const next = event.relatedTarget as Node | null;
    if (!next || !event.currentTarget.contains(next)) setSearchFocused(false);
  }

  return (
    <div className={"app-frame" + (sidebarCollapsed ? " sidebar-collapsed" : "")}>
      {menuOpen && <button className="drawer-backdrop" type="button" aria-label="Close navigation menu" onClick={closeMenu} />}
      <aside id="primary-sidebar" className={"sidebar" + (menuOpen ? " sidebar-open" : "")} aria-label="Primary navigation">
        <div className="sidebar-brand-row">
          <Brand onNavigate={() => navigateTo("top")} />
          <button className="sidebar-collapse" type="button" aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"} onClick={() => setSidebarCollapsed((collapsed) => !collapsed)} title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}>
            <Icon name={sidebarCollapsed ? "expand" : "collapse"} size={17} />
          </button>
        </div>

        <nav className="sidebar-navigation" aria-label="Main navigation">
          <p className="navigation-label">STUDY SPACE</p>
          {navigation.map((item) => (
            <a
              key={item.id}
              className={"sidebar-link" + (activeSection === item.id ? " sidebar-link-active" : "")}
              href={"#" + item.id}
              aria-label={item.label}
              aria-current={activeSection === item.id ? "location" : undefined}
              title={item.label}
              onClick={() => navigateTo(item.id)}
            >
              <span className="sidebar-link-icon"><Icon name={item.icon} size={18} /></span>
              <span className="nav-label">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-bottom-icon"><Icon name="sparkle" size={18} /></div>
          <p>One session at a time.</p>
          <span>Build consistency with small, focused steps.</span>
        </div>
      </aside>

      <main id="top" className="workspace">
        <header className="toolbar">
          <button className="mobile-menu-button" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="primary-sidebar" onClick={() => setMenuOpen((open) => !open)}>
            <Icon name="menu" size={21} />
          </button>
          <div className="toolbar-search-wrap" onBlur={handleSearchBlur}>
            <Icon name="search" size={18} />
            <label className="sr-only" htmlFor="exam-search">Search SSC exams</label>
            <input
              id="exam-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onFocus={() => setSearchFocused(true)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setQuery("");
                  setSearchFocused(false);
                } else if (event.key === "Enter" && matchingExams[0]) {
                  event.preventDefault();
                  selectExam(matchingExams[0]);
                }
              }}
              placeholder="Search SSC exams..."
              autoComplete="off"
              aria-controls="exam-search-results"
              aria-expanded={searchPanelOpen}
            />
            {query && <button type="button" className="search-clear" aria-label="Clear search" onClick={() => { setQuery(""); setSearchFocused(true); }}><span aria-hidden="true">×</span></button>}
            {searchPanelOpen && (
              <div id="exam-search-results" className="search-results">
                <p className="search-results-heading">{matchingExams.length ? "MATCHING EXAMS" : "NO MATCHES"}</p>
                {suggestedExams.length ? suggestedExams.map((exam) => (
                  <button type="button" className="search-result" key={exam.code} onClick={() => selectExam(exam)}>
                    <span className="exam-monogram">{exam.code}</span>
                    <span className="search-result-copy"><strong>{exam.name}</strong><small>{exam.level}</small></span>
                    <Icon name="arrow" size={15} />
                  </button>
                )) : (
                  <div className="search-no-results">
                    <span>No exam matched “{query.trim()}”.</span>
                    <button type="button" onClick={() => { setQuery(""); setSearchFocused(true); }}>Clear search</button>
                  </div>
                )}
                {matchingExams.length > 5 && <p className="search-results-footer">Keep typing to narrow the list.</p>}
              </div>
            )}
          </div>
          <div className="toolbar-context">
            <span>SSC preparation workspace</span>
          </div>
        </header>

        <div className="workspace-content">
          <div className="dashboard-grid">
            <div className="primary-column">
              <section className="hero-banner" aria-labelledby="hero-heading">
                <div className="hero-banner-glow" aria-hidden="true" />
                <HeroBooks side="left" />
                <HeroBooks side="right" />
                <div className="hero-content">
                  <p className="hero-eyebrow">WELCOME TO SSC PREP</p>
                  <h1 id="hero-heading">Your next SSC milestone starts here.</h1>
                  <p>Choose your exam, build your skills, and make every practice session count.</p>
                  <a className="hero-cta" href="#exams" onClick={() => navigateTo("exams")}>Explore exams <Icon name="arrow" size={16} /></a>
                </div>
              </section>

              <section id="subjects" className="content-section subjects-section" aria-labelledby="subjects-heading">
                <div className="content-section-heading">
                  <div>
                    <p className="section-kicker">BUILD YOUR FOUNDATION</p>
                    <h2 id="subjects-heading">Popular subjects</h2>
                  </div>
                  <span className="section-count">04 subjects</span>
                </div>
                <div className="subject-grid">
                  {subjects.map((subject) => (
                    <button
                      type="button"
                      key={subject.id}
                      className={"subject-card" + (selectedSubject === subject.practiceTag ? " subject-card-selected" : "")}
                      onClick={() => focusPractice(subject.practiceTag)}
                      aria-pressed={selectedSubject === subject.practiceTag}
                      aria-label={"Show sample practice for " + subject.name}
                    >
                      <LearningArtwork variant={subject.visual} />
                      <span className="subject-card-copy">
                        <strong>{subject.name}</strong>
                        <span className="subject-description">{subject.text}</span>
                      </span>
                      <span className="subject-card-footer">
                        <span>{selectedSubject === subject.practiceTag ? "Selected" : "See practice"}</span>
                        <Icon name="arrow" size={14} />
                      </span>
                    </button>
                  ))}
                </div>
              </section>

              <section id="practice" className="content-section practice-section" aria-labelledby="practice-heading">
                <div className="content-section-heading">
                  <div>
                    <p className="section-kicker">A GOOD PLACE TO BEGIN</p>
                    <h2 id="practice-heading">Recommended practice</h2>
                  </div>
                  {selectedSubject ? (
                    <button type="button" className="clear-filter" onClick={() => setSelectedSubject(null)}>Show all <span aria-hidden="true">↗</span></button>
                  ) : (
                    <span className="preview-count">Sample previews</span>
                  )}
                </div>
                {selectedSubject && <p className="practice-filter-note">Showing sample previews for <strong>{selectedSubject}</strong>.</p>}
                {visiblePractice.length ? (
                  <div className="practice-grid">
                    {visiblePractice.map((item) => (
                      <article className="practice-card" key={item.number}>
                        <div className={"practice-artwork practice-artwork-" + item.visual}>
                          <LearningArtwork variant={item.visual} />
                          <span className="preview-stamp">PREVIEW</span>
                        </div>
                        <div className="practice-card-copy">
                          <span className="practice-tag">{item.tag}</span>
                          <h3>{item.title}</h3>
                          <p>{item.text}</p>
                        </div>
                        <div className="practice-card-footer"><span>Sample listing · Not playable</span><span>{item.number}</span></div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="empty-practice" role="status">
                    <div className="empty-practice-icon"><Icon name="book" size={20} /></div>
                    <div>
                      <strong>No sample set listed yet</strong>
                      <p>There is no General Awareness practice preview in this version. The subject remains available as a study category.</p>
                    </div>
                    <button type="button" className="clear-filter" onClick={() => setSelectedSubject(null)}>Show all previews</button>
                  </div>
                )}
                <p className="practice-disclaimer">These sample listings are illustrative. Interactive questions, timed tests, and official previous-year papers are not available yet.</p>
              </section>
            </div>

            <aside className="utility-rail" aria-label="Study shortcuts">
              <section id="exams" className="rail-panel exam-panel" aria-labelledby="exams-heading">
                <div className="rail-heading">
                  <div>
                    <p className="section-kicker">FIND YOUR DIRECTION</p>
                    <h2 id="exams-heading">Explore exams</h2>
                  </div>
                  <span className="rail-small-count">{matchingExams.length}</span>
                </div>
                <p className="rail-description">Search above to filter the supported categories.</p>
                {matchingExams.length ? (
                  <div className="exam-directory">
                    {matchingExams.map((exam) => (
                      <div className="exam-directory-item" key={exam.code}>
                        <span className="exam-monogram">{exam.code}</span>
                        <span className="exam-directory-copy"><strong>{exam.name}</strong><small>{exam.level}</small></span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="exam-directory-empty" role="status">
                    <p>No exam categories match this search.</p>
                    <button type="button" onClick={() => setQuery("")}>Clear search</button>
                  </div>
                )}
                <p className="exam-panel-footnote">Use official SSC notices for current eligibility and dates.</p>
              </section>

              <section id="library" className="rail-panel library-panel" aria-labelledby="library-heading">
                <div className="rail-heading">
                  <div>
                    <p className="section-kicker">COMING TO THE LIBRARY</p>
                    <h2 id="library-heading">Study library</h2>
                  </div>
                  <Icon name="book" size={19} />
                </div>
                <div className="resource-preview-list">
                  {resources.map((resource) => (
                    <div className="resource-preview" key={resource.id}>
                      <span className={"resource-icon resource-icon-" + resource.id}>
                        {resource.symbol === "notes" ? "N" : resource.symbol === "vocabulary" ? "V" : "CA"}
                      </span>
                      <span className="resource-copy"><strong>{resource.title}</strong><small>{resource.text}</small></span>
                      <span className="resource-status">Preview</span>
                    </div>
                  ))}
                </div>
                <p className="library-note">Study-material pages are not available in this version.</p>
              </section>
            </aside>
          </div>

          <footer className="workspace-footer">
            <Brand onNavigate={() => navigateTo("top")} />
            <p>Independent study project · Not affiliated with the Staff Selection Commission.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
