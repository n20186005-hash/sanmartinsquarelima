import { TravelPage } from "@/components/TravelPage";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locationLinks, nearbyLabels, nearbyPlaces, visitorPlanning } from "@/i18n/nearby";
import { siteUrl, walkAlternates, walks, walkLocales, walkPath, type WalkLocale } from "@/i18n/walk";

const directions = "https://www.google.com/maps/dir/?api=1&origin=Plaza+San+Mart%C3%ADn%2C+Lima&destination=Plaza+Mayor+de+Lima&travelmode=walking";
const source = "https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=4356";

async function getWalk(params: Promise<{ locale: string }>) {
  const { locale } = await params;
  if (!walkLocales.includes(locale as WalkLocale)) notFound();
  return { locale: locale as WalkLocale, walk: walks[locale as WalkLocale] };
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
  const labels = nearbyLabels[locale];
  const stops = nearbyPlaces.filter(({ slug }) => ["plaza-mayor", "jiron-union"].includes(slug));
  return (
    <TravelPage locale={locale} path={walkPath} title={walk.title}
      image="/nearby/plaza-mayor.jpg" tagline={walk.route}
      actions={<a className="hero-cta" href={directions}>{walk.map}</a>}>
      <Link href={`/${locale}#nearby`}>← {walk.back}</Link>
      <p>{walk.intro}</p>
      <section className="info-card nearby-panel">
        <h2>{labels.about}</h2>
        <p>{visitorPlanning[locale].walkManagement}</p>
      </section>
      <p>{walk.history}</p>
      <h2 className="section-title">{walk.route}</h2>
      <ol style={{ listStyle: "decimal", paddingInlineStart: "1.5rem" }}>
        {walk.steps.map((step) => <li key={step} style={{ marginBottom: "1rem" }}>{step}</li>)}
      </ol>
      <p><a href={directions}>{walk.map}</a></p>
      <section className="nearby-panel">
        <h2>{labels.info}</h2>
        <ul>{stops.map((stop) => (
          <li key={stop.slug}>
            <Link href={`/${locale}/guide/${stop.slug}`}>{stop.titles[locale]}</Link>
            <span lang="es"> · {stop.address} · </span>
            <a href={locationLinks(stop).map}>{labels.rating}</a>
          </li>
        ))}</ul>
      </section>
      <h2>{walk.question}</h2>
      <p>{walk.answer}</p>
      <p><a href={source}>{walk.source}</a></p>
      <section className="nearby-panel nearby-index">
        <h2>{labels.nearby}</h2>
        <ul className="nearby-grid">
          {nearbyPlaces.filter(({ slug }) => ["la-merced", "catedral", "palacio-gobierno", "casa-aliaga"].includes(slug)).map((place) => (
            <li key={place.slug}>
              <Link className="info-card" href={`/${locale}/guide/${place.slug}`}>{place.titles[locale]}</Link>
            </li>
          ))}
        </ul>
      </section>
    </TravelPage>
  );
}
