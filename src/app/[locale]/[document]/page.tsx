import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CookiePreferences } from "@/components/CookiePreferences";
import { TravelPage } from "@/components/TravelPage";
import { legalCopy, legalPages, type LegalPage } from "@/i18n/legal";
import { siteUrl, walkAlternates, walkLocales, type WalkLocale } from "@/i18n/walk";

type Props = { params: Promise<{ locale: string; document: string }> };

export function generateStaticParams() {
  return legalPages.map((document) => ({ document }));
}

async function getDocument(params: Props["params"]) {
  const { locale, document } = await params;
  if (!walkLocales.includes(locale as WalkLocale) || !legalPages.includes(document as LegalPage)) notFound();
  return { locale: locale as WalkLocale, document: document as LegalPage };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, document } = await getDocument(params);
  const path = `/${document}`;
  const title = legalCopy[locale][document].title;
  const canonical = `${siteUrl}/${locale}${path}`;
  return {
    title,
    description: title,
    alternates: { canonical, languages: walkAlternates(path) },
    openGraph: { title, description: title, url: canonical },
    twitter: { title, description: title },
  };
}

export default async function LegalPageContent({ params }: Props) {
  const { locale, document } = await getDocument(params);
  const copy = legalCopy[locale];
  return (
    <TravelPage locale={locale} path={`/${document}`} title={copy[document].title}
      image="/gallery/plaza-san-martin (1).jpg" tagline="Plaza San Martín" summary={copy.updated}>
      {document === "cookies" ? <CookiePreferences copy={copy.cookies} /> : copy[document].sections.map(([title, text]) => (
        <section className="nearby-panel" key={title}>
          <h2>{title}</h2>
          <p>{text}</p>
        </section>
      ))}
    </TravelPage>
  );
}
