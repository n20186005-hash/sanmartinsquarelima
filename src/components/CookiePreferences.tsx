"use client";

import { useEffect, useState } from "react";
import type { legalCopy } from "@/i18n/legal";

const defaultSettings = { analytics: false, preferences: true, marketing: false };
const storageKey = "sanmartinsquarelima:cookie-preferences";
const categories = ["analytics", "preferences", "marketing"] as const;

export function CookiePreferences({ copy }: { copy: (typeof legalCopy)[keyof typeof legalCopy]["cookies"] }) {
  const [settings, setSettings] = useState(defaultSettings);
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    const raw = window.localStorage.getItem(storageKey);
    if (raw) {
      try {
        const stored = JSON.parse(raw);
        setSettings({
          analytics: stored.analytics === true,
          preferences: stored.preferences === true,
          marketing: stored.marketing === true,
        });
      } catch {
        setSettings(defaultSettings);
      }
    }
  }, []);

  function save(next: typeof defaultSettings) {
    window.localStorage.setItem(storageKey, JSON.stringify(next));
    setSettings(next);
    setSaved(true);
  }

  return (
    <section className="nearby-panel">
      <p>{copy.intro}</p>
      <div className="info-card cookie-options">
        <label><input type="checkbox" checked disabled /> {copy.required}</label>
        {categories.map((category) => (
          <label key={category}>
            <input type="checkbox" checked={settings[category]} onChange={(event) => {
              setSettings({ ...settings, [category]: event.target.checked });
              setSaved(false);
            }} /> {copy[category]}
          </label>
        ))}
      </div>
      <p>{copy.note}</p>
      <div className="nearby-actions">
        <button className="google-maps-btn" type="button" onClick={() => save(settings)}>{copy.save}</button>
        <button className="google-maps-btn" type="button" onClick={() => save({ analytics: false, preferences: false, marketing: false })}>{copy.reject}</button>
      </div>
      <p role="status">{saved ? copy.saved : ""}</p>
    </section>
  );
}
