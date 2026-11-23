import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TravelPage } from "@/components/TravelPage";
import { guideExtra } from "@/i18n/guide-extra";
import { guideSections, nearbyPath, nearbyPlaces, nearbyLabels } from "@/i18n/nearby";
import { siteUrl, walkAlternates, walkLocales, walkPath, type WalkLocale } from "@/i18n/walk";

const path = "/guide";
type Props = { params: Promise<{ locale: string }> };

async function getLocale(params: Props["params"]) {
  const { locale } = await params;
  if (!walkLocales.includes(locale as WalkLocale)) notFound();
  return locale as WalkLocale;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale(params);
  const { browse: title, browseIntro: description } = guideExtra[locale];
  const canonical = `${siteUrl}/${locale}${path}`;
  return {
    title, description,
    alternates: { canonical, languages: walkAlternates(path) },
    openGraph: { title, description, url: canonical },
    twitter: { title, description },
  };
}

export default async function GuideDirectory({ params }: Props) {
  const locale = await getLocale(params);
  const { browse, browseIntro } = guideExtra[locale];
  const { kinds } = guideSections[locale];
  return (
    <TravelPage locale={locale} path={path} title={browse} image="/gallery/plaza-san-martin (1).jpg"
      tagline="Lima" summary={browseIntro}
      actions={<Link className="hero-cta" href={`/${locale}${walkPath}`}>{nearbyLabels[locale].walk}</Link>}>
      <div className="nearby-index">
        {Object.entries(kinds).map(([kind, label]) => (
          <section className="nearby-panel" key={kind}>
            <h2>{label}</h2>
            <ul className="nearby-grid">
              {nearbyPlaces.filter((place) => place.kind === kind).map((place) => (
                <li key={place.slug}>
                  <Link className="info-card" href={`/${locale}${nearbyPath(place.slug)}`}>
                    {place.titles[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </TravelPage>
  );
}
