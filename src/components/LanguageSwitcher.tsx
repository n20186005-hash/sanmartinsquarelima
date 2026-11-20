"use client";

import Link from "next/link";
import { interfaceCopy } from "@/i18n/interface";
import type { Locale } from "@/i18n/translations";

const names = { zh: "中文", en: "English", es: "Español", qu: "Runasimi" };
const labels = { zh: "中文", en: "EN", es: "ES", qu: "QU" };
const languages = ["zh", "en", "es", "qu"] as const;

export function LanguageSwitcher({ locale, path }: { locale: Locale; path: string }) {
  return (
    <div className="lang-switcher" aria-label={interfaceCopy[locale].languages}>
      {languages.map((language) => (
        <Link key={language} className={`lang-btn ${locale === language ? "active" : ""}`}
          href={`/${language}${path}`} hrefLang={language} lang={language}
          aria-label={names[language]} aria-current={locale === language ? "page" : undefined}
          onClick={(event) => {
            if (!path && window.location.hash && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
              event.preventDefault();
              window.location.assign(`/${language}${window.location.hash}`);
            }
          }}>
          {labels[language]}
        </Link>
      ))}
    </div>
  );
}
