import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteUrl, walkAlternates, walks, walkLocales, walkPath, type WalkLocale } from "@/i18n/walk";

const directions = "https://www.google.com/maps/dir/?api=1&origin=Plaza+San+Mart%C3%ADn%2C+Lima&destination=Plaza+Mayor+de+Lima&travelmode=walking";
const source = "https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=4356";

async function getWalk(params: Promise<{ locale: string }>) {
  const { locale } = await params;
  if (!walkLocales.includes(locale as WalkLocale)) notFound();
  return { locale, walk: walks[locale as WalkLocale] };
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, walk } = await getWalk(params);
  const canonical = `${siteUrl}/${locale}${walkPath}`;
  return {
    title: { absolute: walk.title },
    description: walk.intro,
    alternates: { canonical, languages: walkAlternates(walkPath) },
    openGraph: { title: walk.title, description: walk.intro, url: canonical },
    twitter: { card: "summary", title: walk.title, description: walk.intro },
  };
}

export default async function WalkPage({ params }: Props) {
  const { locale, walk } = await getWalk(params);
  return (
    <main className="section" lang={locale} style={{ maxWidth: "55rem", margin: "auto", padding: "3rem 1.25rem" }}>
      <Link href={`/${locale}`}>← {walk.back}</Link>
      <h1 className="section-title">{walk.title}</h1>
      <p>{walk.intro}</p>
      <p>{walk.history}</p>
      <h2 className="section-title">{walk.route}</h2>
      <ol style={{ listStyle: "decimal", paddingInlineStart: "1.5rem" }}>
        {walk.steps.map((step) => <li key={step} style={{ marginBottom: "1rem" }}>{step}</li>)}
      </ol>
      <p><a href={directions}>{walk.map}</a></p>
      <h2>{walk.question}</h2>
      <p>{walk.answer}</p>
      <p><a href={source}>{walk.source}</a></p>
      <nav aria-label="Language">
        {Object.entries({ es: "Español", en: "English", zh: "中文", qu: "Runasimi" }).map(([language, name]) => (
          <Link key={language} href={`/${language}${walkPath}`} hrefLang={language} lang={language} style={{ marginInlineEnd: "1rem" }}>{name}</Link>
        ))}
      </nav>
    </main>
  );
}
