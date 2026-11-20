"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { translations, type Locale } from "@/i18n/translations";
import { interfaceCopy } from "@/i18n/interface";
import { nearbyLabels } from "@/i18n/nearby";
import { walkPath, walks } from "@/i18n/walk";

function ThemeToggle({ locale }: { locale: Locale }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{ width: "24px", height: "24px" }} />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="theme-toggle-btn"
      aria-label={interfaceCopy[locale].theme}
      style={{
        background: "none",
        border: "none",
        color: "#fff",
        cursor: "pointer",
        padding: "0.25rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {theme === "dark" ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

export function SiteNav({ locale, path = "" }: { locale: Locale; path?: string }) {
  const t = translations[locale];
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`site-nav ${path ? "site-nav-travel" : "site-nav-home"} ${scrolled || path ? "scrolled" : ""}`}>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <Link href={`/${locale}`} style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>
          Plaza San Martín
        </Link>
      </div>
      <div className="site-nav-controls">
        <div className="nav-links">{path ? <Link href={`/${locale}#nearby`}>{nearbyLabels[locale].nearby}</Link> : <>
          <a href="#history">{t.nav.history}</a>
          <a href="#architecture">{t.nav.architecture}</a>
          <a href="#monuments">{t.nav.monuments}</a>
          <a href="#visiting">{t.nav.visiting}</a>
          <a href="#transportation">{t.nav.transportation}</a>
          <a href="#gallery">{t.nav.gallery}</a>
          <a href="#reviews">{t.nav.reviews}</a>
          <a href="#nearby">{nearbyLabels[locale].nearby}</a>
          <a href="#faq">{t.nav.faq}</a>
          <a href="#location">{t.nav.location}</a>
          <Link href={`/${locale}${walkPath}`}>{walks[locale].route}</Link>
        </>}</div>
        <ThemeToggle locale={locale} />
        <LanguageSwitcher locale={locale} path={path} />
      </div>
    </nav>
  );
}

