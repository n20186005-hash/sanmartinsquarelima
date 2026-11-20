import { TravelPage } from "@/components/TravelPage";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  guideRules, guideSections, locationLinks, managers, nearbyLabels, nearbyPath, nearbyPlaces, siteContext, siteSource, transitDetails, transitStation, visitDetails, venueInformation, visitorPlanning,
} from "@/i18n/nearby";
import { siteUrl, walkAlternates, walkLocales, walkPath, type WalkLocale } from "@/i18n/walk";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamic = "force-dynamic";

async function getPlace(params: Props["params"]) {
  const { locale: language, slug } = await params;
  const locale = language as WalkLocale;
  const place = nearbyPlaces.find((entry) => entry.slug === slug);
  if (!place || !walkLocales.includes(locale)) notFound();
  return { locale, place };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, place } = await getPlace(params);
  const path = nearbyPath(place.slug);
  const canonical = `${siteUrl}/${locale}${path}`;
  const title = place.titles[locale];
  const description = place.description[locale];
  const images = place.image ? [{ url: place.image.src, alt: title }] : [];
  return {
    title,
    description,
    alternates: { canonical, languages: walkAlternates(path) },
    openGraph: { title, description, url: canonical, images },
    twitter: { title, description, images: images.map(({ url }) => url) },
  };
}

export default async function NearbyPlacePage({ params }: Props) {
  const { locale, place } = await getPlace(params);
  const labels = nearbyLabels[locale];
  const planning = visitorPlanning[locale];
  const sections = guideSections[locale];
  const transit = transitDetails[locale];
  const kind = sections.kinds[place.kind as keyof typeof sections.kinds];
  const manager = managers[place.manager as keyof typeof managers];
  const links = locationLinks(place);
  const title = place.titles[locale];
  const path = nearbyPath(place.slug);
  const venue = venueInformation[place.slug];
  const [hours, fees, time] = visitDetails(place, locale);
  const next = nearbyPlaces.find(({ slug }) => slug === place.next);
  const related = [
    ...nearbyPlaces.filter(({ slug }) => slug === place.next),
    ...nearbyPlaces.filter((entry) => entry.next === place.slug && entry.slug !== place.next),
  ].slice(0, 4);
  return (
    <TravelPage locale={locale} path={path} title={title} image={place.image.src}
      tagline={`${kind} · Lima`} summary={hours}
      actions={<>
        <a className="hero-cta" href={links.map}>{labels.map}</a>
        <a href={links.map}>{labels.rating}</a>
      </>}>
        <section className="nearby-panel">
          <h2>{sections.introduction}</h2>
          <p>{place.description[locale]}</p>
        </section>
        <section className="nearby-panel">
          <h2>{planning.tips}</h2>
          <p>{place.visitTip[locale]}</p>
        </section>
        <section className="nearby-panel">
          <h2>{sections.highlights}</h2>
          <p>{place.detail[locale]}</p>
        </section>
        <section className="info-card nearby-panel">
          <h2>{labels.about} · {title}</h2>
          <p><strong lang="es">{manager}</strong></p>
        </section>
        {place.image && (
          <figure className="nearby-figure">
            <Image src={place.image.src} alt={title} width={1200} height={780} sizes="(max-width: 900px) 100vw, 860px" unoptimized />
            <figcaption>
              {place.image.author && <span>{place.image.author} · </span>}
              {place.image.license && <span>{place.image.license} · </span>}
              <a href={place.image.source}>{labels.image}</a>
            </figcaption>
          </figure>
        )}
        <section className="info-card nearby-panel">
          <h2>{labels.info}</h2>
          <dl className="nearby-facts">
            <dt>{sections.name}</dt><dd lang="es">{place.name}</dd>
            <dt>{sections.kind}</dt><dd>{kind}</dd>
            <dt>{labels.address}</dt><dd lang="es">{place.address}, Lima, Perú</dd>
            <dt>{sections.manager}</dt><dd lang="es">{manager}</dd>
            <dt>{labels.duration}</dt><dd>{time}</dd>
          </dl>
        </section>
        <section className="nearby-panel">
          <h2>{labels.hours}</h2>
          <p>{hours}</p>
          <a href={venue?.source ?? siteSource}>{sections.sources}</a>
        </section>
        <section className="nearby-panel">
          <h2>{labels.fees}</h2>
          <p>{fees}</p>
        </section>
        <section className="nearby-panel">
          <h2>{labels.transport}</h2>
          <p>{transit.station} <strong lang="es">{transitStation(place.slug)}</strong>. {transit.verify}</p>
          <p>{planning.access}</p>
          <a href={links.transit}>{transit.map}</a>
        </section>
        <section className="nearby-panel">
          <h2>{labels.history}</h2>
          <p>{siteContext[place.kind as keyof typeof siteContext][locale]}</p>
        </section>
        <section className="nearby-panel">
          <h2>{sections.route}</h2>
          <ol>
            <li>{labels.starting}</li>
            <li><a href={links.walk}>{labels.directions}</a> <span lang="es">· {place.address}</span></li>
            <li>{place.visitTip[locale]}</li>
            {next && <li>{labels.nearbyStop} <Link href={`/${locale}${nearbyPath(next.slug)}`}>{next.titles[locale]}</Link>.</li>}
          </ol>
        </section>
        <section className="nearby-panel">
          <h2>{sections.rules}</h2>
          <p>{guideRules[locale]}</p>
        </section>
        <section className="nearby-panel">
          <h2>{labels.photo}</h2>
          <p>{place.photo[locale]}</p>
        </section>
        <section className="nearby-panel">
          <h2>{labels.faq}</h2>
          <details><summary>{labels.question}</summary><p>{hours} <a href={venue?.source ?? siteSource}>{venue ? managers[place.manager as keyof typeof managers] : labels.source}</a></p></details>
        </section>
        <section className="nearby-panel">
          <h2>{planning.lodging}</h2>
          <p>{planning.stay}</p>
        </section>
        <section className="nearby-panel">
          <h2>{labels.reviews}</h2>
          <p><a href={links.map}>{labels.rating}</a></p>
        </section>
        <section className="nearby-panel">
          <h2>{sections.directions}</h2>
          <p lang="es">{place.address}, Lima, Perú</p>
          <a href={links.map}>{labels.map}</a>
        </section>
        {related.length > 0 && (
          <section className="nearby-panel nearby-index">
            <h2>{labels.nearby}</h2>
            <ul className="nearby-grid">{related.map((entry) => (
              <li key={entry.slug}>
                <Link className="info-card" href={`/${locale}${nearbyPath(entry.slug)}`}>
                  {entry.titles[locale]}
                </Link>
              </li>
            ))}</ul>
          </section>
        )}
        <nav className="nearby-bottom">
          <Link href={`/${locale}#nearby`}>{labels.nearby}</Link>
          <Link href={`/${locale}${walkPath}`}>{labels.walk}</Link>
        </nav>
    </TravelPage>
  );
}
