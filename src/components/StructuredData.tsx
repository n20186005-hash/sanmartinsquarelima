"use client";

import React from "react";
import { useLang } from "@/components/LangProvider";

export function StructuredData() {
  const { t, locale } = useLang();

  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "sanmartinsquarelima.com"}`;

  const touristAttractionSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": locale === "es" ? "Plaza San Martín" : locale === "zh" ? "圣马丁广场" : locale === "qu" ? "Plaza San Martín" : "Plaza San Martín",
    "description": t.history.intro,
    "url": `${baseUrl}/${locale}`,
    "image": `${baseUrl}/gallery/plaza-san-martin (1).jpg`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.3",
      "reviewCount": "51442"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -12.0515,
      "longitude": -77.0346
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lima",
      "addressRegion": "Lima",
      "addressCountry": "PE"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faq.items.map((item: any) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
