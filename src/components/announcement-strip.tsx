"use client";

import { useState } from "react";

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

export default function AnnouncementStrip() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="announcement">
      <p>
        Good preparation is built one session at a time.
        <a href="#practice">Find a place to start <Arrow /></a>
      </p>
      <button
        type="button"
        className="notice-close"
        aria-label="Dismiss announcement"
        onClick={() => setVisible(false)}
      >
        ×
      </button>
    </div>
  );
}
