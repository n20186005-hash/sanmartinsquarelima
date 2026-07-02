import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "sanmartinsquarelima.com"}`;

// 语言配置：HTML lang 属性 + OG locale 映射
const localeConfig: Record<string, { htmlLang: string; ogLocale: string }> = {
  es: { htmlLang: "es", ogLocale: "es_PE" },
  en: { htmlLang: "en", ogLocale: "en_US" },
  zh: { htmlLang: "zh-CN", ogLocale: "zh_CN" },
  qu: { htmlLang: "qu", ogLocale: "qu_PE" },
};

// 生成绝对 URL 的 hreflang 映射
function getHreflangAlternates(baseUrl: string) {
  return {
    es: `${baseUrl}/es`,
    en: `${baseUrl}/en`,
    zh: `${baseUrl}/zh`,
    qu: `${baseUrl}/qu`,
    "x-default": `${baseUrl}/en`,  // 默认回退页面设为英文版
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const hreflangs = getHreflangAlternates(baseUrl);
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default:
        locale === "es"
          ? "Plaza San Martín — Lima, Perú"
          : locale === "zh"
          ? "圣马丁广场 — 利马历史中心"
          : locale === "qu"
          ? "Plaza San Martín — Lima, Piruw"
          : "Plaza San Martín — Lima, Peru",
      template:
        locale === "es"
          ? "%s | Plaza San Martín"
          : locale === "zh"
          ? "%s | 圣马丁广场"
          : locale === "qu"
          ? "%s | Plaza San Martín"
          : "%s | Plaza San Martín",
    },
    description:
      locale === "es"
        ? "Guía de viaje a la Plaza San Martín en Lima. Plaza histórica con estatua ecuestre de José de San Martín."
        : locale === "zh"
        ? "圣马丁广场旅行指南——探索利马历史中心的标志性广场，欣赏圣马丁将军雕像。"
        : locale === "qu"
        ? "Plaza San Martín rikuy, Lima, Piruw. San Martin Plaza."
        : "A travel guide to Plaza San Martín in Lima, Peru. Historic square with equestrian statue of José de San Martín.",
    keywords: [
      "Plaza San Martín",
      "San Martín Square",
      "Lima tourism",
      "Peru tourism",
      "Historic square",
      "José de San Martín",
      "Lima historic center",
    ],
    authors: [{ name: "Plaza San Martín Travel Guide" }],
    creator: "Plaza San Martín Travel Guide",
    publisher: "Plaza San Martín Travel Guide",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: localeConfig[locale]?.ogLocale || "es_PE",
      alternateLocale: Object.values(localeConfig)
        .map((c) => c.ogLocale)
        .filter(
          (l) => l !== (localeConfig[locale]?.ogLocale || "es_PE")
        ),
      url: `${baseUrl}/${locale}`,
      title:
        locale === "es"
          ? "Plaza San Martín — Lima, Perú"
          : locale === "zh"
          ? "圣马丁广场 — 利马历史中心"
          : locale === "qu"
          ? "Plaza San Martín — Lima, Piruw"
          : "Plaza San Martín — Lima, Peru",
      description:
        locale === "es"
          ? "Guía de viaje a la Plaza San Martín en Lima, Perú."
          : locale === "zh"
          ? "圣马丁广场旅行指南——探索利马历史中心。"
          : locale === "qu"
          ? "Plaza San Martín rikuy, Lima."
          : "A travel guide to Plaza San Martín in Lima, Peru.",
      siteName:
        locale === "es"
          ? "Plaza San Martín Guía de Viaje"
          : locale === "zh"
          ? "圣马丁广场旅行指南"
          : locale === "qu"
          ? "Plaza San Martín rikuy"
          : "Plaza San Martín Travel Guide",
      images: [
        {
          url: "/gallery/plaza-san-martin (1).jpg",
          width: 1200,
          height: 630,
          alt:
            locale === "es"
              ? "Plaza San Martín - Lima, Perú"
              : locale === "zh"
              ? "圣马丁广场 - 利马"
              : locale === "qu"
              ? "Plaza San Martín - Lima, Piruw"
              : "Plaza San Martín - Lima, Peru",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        locale === "es"
          ? "Plaza San Martín — Lima, Perú"
          : locale === "zh"
          ? "圣马丁广场 — 利马历史中心"
          : locale === "qu"
          ? "Plaza San Martín — Lima, Piruw"
          : "Plaza San Martín — Lima, Peru",
      description:
        locale === "es"
          ? "Guía de viaje a la Plaza San Martín en Lima, Perú."
          : locale === "zh"
          ? "圣马丁广场旅行指南——探索利马历史中心。"
          : locale === "qu"
          ? "Plaza San Martín rikuy, Lima."
          : "A travel guide to Plaza San Martín in Lima, Peru.",
      images: ["/gallery/plaza-san-martin (1).jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: hreflangs,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return [
    { locale: "es" },
    { locale: "en" },
    { locale: "zh" },
    { locale: "qu" },
  ];
}

import { generateSchema } from "../schema";
import HtmlLangSetter from "@/components/HtmlLangSetter";

function SchemaScript({ locale }: { locale: string }) {
  const schema = generateSchema(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const htmlLang = localeConfig[locale]?.htmlLang || "es";

  return (
    <>
      {/* 动态设置 <html lang> 属性（客户端组件） */}
      <HtmlLangSetter htmlLang={htmlLang} />
      <SchemaScript locale={locale} />
      {children}
    </>
  );
}
