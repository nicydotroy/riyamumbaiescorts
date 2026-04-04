import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
  },
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type", value: "text/xml; charset=utf-8" },
          { key: "Cache-Control", value: "public, s-maxage=3600, stale-while-revalidate=86400" },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, s-maxage=86400, stale-while-revalidate=604800" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // ── Static pages ──────────────────────────────────────────────
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/gallery.html", destination: "/gallery", permanent: true },
      { source: "/location.html", destination: "/location", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },

      // ── Location escort pages  e.g. /affordable-escorts-in-andheri.html ──
      {
        source: "/affordable-escorts-in-:slug.html",
        destination: "/affordable-escorts-in-:slug",
        permanent: true,
      },

      // ── SPA center pages  e.g. /spa-center-in-andheri.html ───────
      {
        source: "/spa-center-in-:slug.html",
        destination: "/spa-center-in-:slug",
        permanent: true,
      },

      // ── Service pages & any other single-segment .html ────────────
      { source: "/:slug.html", destination: "/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
