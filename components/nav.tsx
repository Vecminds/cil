"use client";

import { useState, useEffect } from "react";
import { Arrow, Sun, Moon } from "./icons";
import { useTweaks } from "./tweaks/tweaks-context";
import CalButton from "./cal-button";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { t, setTweak } = useTweaks();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#" className="nav-logo">
          <span className="mark" aria-hidden="true" />
          Vecminds Intelligence
        </a>
        <div className="nav-links">
          <a href="#platform">Platform</a>
          <a href="#how">How it works</a>
          <a href="#industries">Industries</a>
          <a href="#faq">FAQ</a>
          <a href="/docs" className="mono" style={{ fontSize: 13 }}>
            Docs ↗
          </a>
        </div>
        <div className="nav-cta">
          <button
            className="icon-btn"
            aria-label="Toggle theme"
            onClick={() => setTweak("theme", t.theme === "dark" ? "light" : "dark")}
          >
            {t.theme === "dark" ? <Sun /> : <Moon />}
          </button>
          <a href="#" className="btn ghost" style={{ fontSize: 14 }}>
            Sign in
          </a>
          <CalButton className="btn primary">
            Book a demo <Arrow className="arrow" />
          </CalButton>
        </div>
      </div>
    </nav>
  );
}
