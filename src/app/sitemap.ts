import { legalPages } from "@/i18n/legal";
import type { MetadataRoute } from "next";
import { nearbyPath, nearbyPlaces } from "@/i18n/nearby";
import { siteUrl, walkAlternates, walkLocales, walkPath } from "@/i18n/walk";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/guide", walkPath, ...legalPages.map((page) => `/${page}`), ...nearbyPlaces.map(({ slug }) => nearbyPath(slug))].flatMap((path) =>
    walkLocales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      alternates: { languages: walkAlternates(path) },
    })),
  );
}
