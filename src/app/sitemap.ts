import type { MetadataRoute } from "next";
import { siteUrl, walkAlternates, walkLocales, walkPath } from "@/i18n/walk";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", walkPath].flatMap((path) =>
    walkLocales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      alternates: { languages: walkAlternates(path) },
    })),
  );
}
