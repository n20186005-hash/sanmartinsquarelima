export function generateSchema(locale: string) {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "sanmartinsquarelima.com"}`;
  const localUrl = `${baseUrl}/${locale}`;

  const name = locale === "es"
    ? "Plaza San Martín"
    : locale === "zh"
    ? "圣马丁广场"
    : locale === "qu"
    ? "Plaza San Martín"
    : "Plaza San Martín";

  const description = locale === "es"
    ? "Plaza San Martín en Lima. Plaza histórica con estatua ecuestre de José de San Martín, inaugurada en 1921."
    : locale === "zh"
    ? "利马历史中心的圣马丁广场（Plaza San Martín），1921年落成，建有圣马丁将军骑马雕像。"
    : locale === "qu"
    ? "Plaza San Martín, Lima, Piruw. San Martin Plaza."
    : "Plaza San Martín in Lima, Peru. Historic square with equestrian statue of José de San Martín, inaugurated in 1921.";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "Place"],
        "name": name,
        "alternateName": ["Plaza San Martín", "San Martín Square", "圣马丁广场", "Plaza San Martín de Lima"],
        "description": description,
        "url": localUrl,
        "image": `${baseUrl}/gallery/plaza-san-martin (1).jpg`,
        
        // 精确地理坐标
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -12.0578,
          "longitude": -77.0365
        },
        
        // 地址信息
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Nicolás de Piérola cdra. 9",
          "addressLocality": "Lima",
          "addressRegion": "Lima",
          "addressCountry": "PE",
          "postalCode": "15001"
        },
        
        // 开放时间 - 24小时
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        
        // 价格信息（免费）
        "priceRange": "Free",
        "isAccessibleForFree": true,
        
        // 广场信息
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "constructionYear",
            "value": "1921"
          },
          {
            "@type": "PropertyValue",
            "name": "inaugurationDate",
            "value": "1921-07-27"
          },
          {
            "@type": "PropertyValue",
            "name": "namedAfter",
            "value": "José de San Martín"
          },
          {
            "@type": "PropertyValue",
            "name": "monument",
            "value": "Equestrian statue of General San Martín"
          },
          {
            "@type": "PropertyValue",
            "name": "nonprofit",
            "value": "true"
          }
        ],
        
        // 社交媒体和地图链接
        "sameAs": [
          "https://maps.app.goo.gl/o9T5WR5KrPBuhN1x9",
          "https://www.gob.pe/munilima",
          "https://es.wikipedia.org/wiki/Plaza_San_Mart%C3%ADn_(Lima)"
        ]
      },
      
      // Website 结构化数据
      {
        "@type": "WebSite",
        "url": localUrl,
        "name": name,
        "inLanguage": locale === "es" ? "es-PE" : locale === "zh" ? "zh-CN" : locale === "qu" ? "qu-PE" : "en-US",
        "isAccessibleForFree": true,
        "publisher": {
          "@type": "Organization",
          "name": "Plaza San Martín Guide",
          "nonprofit": true
        }
      }
    ]
  };
}
