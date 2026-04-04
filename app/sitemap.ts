import { MetadataRoute } from "next";
import { serviceTypes } from "@/data/services";
import { locations } from "@/data/locations";

const BASE_URL = "https://riyamumbaiescorts.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Tier 1 — Homepage (priority 1.0)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
      images: [
        `${BASE_URL}/images/escorts-in-mumbai-banner.webp`,
        `${BASE_URL}/images/og-image.webp`,
      ],
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${BASE_URL}/images/og-services-image.webp`],
    },
    {
      url: `${BASE_URL}/location`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${BASE_URL}/images/og-image.webp`],
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [`${BASE_URL}/images/og-image.webp`],
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      images: [`${BASE_URL}/images/og-image.webp`],
    },
  ];

  // Tier 2 — Service pages (priority 0.85) — include service hero image
  const servicePages: MetadataRoute.Sitemap = serviceTypes.map((s) => ({
    url: `${BASE_URL}/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
    images: [`${BASE_URL}${s.image}`],
  }));

  // Tier 3 — Location escort pages (priority 0.8) — include location image
  const locationPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${BASE_URL}/affordable-escorts-in-${loc.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
    images: [`${BASE_URL}${loc.image}`],
  }));

  // Tier 3 — Location spa pages (priority 0.8) — include location image
  const spaPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${BASE_URL}/spa-center-in-${loc.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
    images: [`${BASE_URL}${loc.image}`],
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...spaPages];
}
