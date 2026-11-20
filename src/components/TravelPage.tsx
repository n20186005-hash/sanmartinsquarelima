import Image from "next/image";
import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";
import type { Locale } from "@/i18n/translations";

export function TravelPage({ locale, path, title, image, tagline, summary, actions, children }: {
  locale: Locale;
  path: string;
  title: string;
  image: string;
  tagline: string;
  summary?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <SiteNav locale={locale} path={path} />
      <main className="nearby-guide" lang={locale}>
        <header className="hero travel-hero">
          <div className="hero-bg travel-hero-bg">
            <Image src={image} alt="" fill sizes="100vw" preload unoptimized />
          </div>
          <div className="hero-texture" />
          <div className="hero-content">
            <p className="hero-tagline">{tagline}</p>
            <h1 className="hero-title">{title}</h1>
            {summary && <p className="travel-hero-summary">{summary}</p>}
            {actions && <div className="nearby-actions">{actions}</div>}
          </div>
        </header>
        <div className="nearby-body">{children}</div>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
