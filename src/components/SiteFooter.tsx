import Link from "next/link";
import { translations, type Locale } from "@/i18n/translations";
import { legalCopy } from "@/i18n/legal";
import { walkPath, walks } from "@/i18n/walk";

export function SiteFooter({ locale }: { locale: Locale }) {
  const { footer } = translations[locale];
  return (
    <footer className="site-footer">
      <Link href={`/${locale}${walkPath}`}>{walks[locale].title}</Link>
      <div className="footer-links">
        <p className="footer-links-title">{footer.linksTitle}</p>
        <div className="footer-links-grid">
          {footer.links.map((link: { name: string; url: string }, i: number) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-link-item">
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-legal" style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 2rem 0", textAlign: "center" }}>
        <Link href={`/${locale}/privacy`} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          {legalCopy[locale].privacy.title}
        </Link>
        <Link href={`/${locale}/terms`} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          {legalCopy[locale].terms.title}
        </Link>
        <Link href={`/${locale}/cookies`} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem" }}>
          {legalCopy[locale].cookies.title}
        </Link>
      </div>
      <p className="footer-text" style={{ marginTop: "2rem", fontSize: "0.9rem", fontWeight: 600, color: "var(--color-gold)" }}>
        {footer.callToAction}
      </p>
      <p className="footer-text" style={{ marginTop: "1rem", whiteSpace: "pre-line" }}>{footer.text}</p>
    </footer>
  );
}

