import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/gallery.html", destination: "/gallery", permanent: true },
      { source: "/location.html", destination: "/location", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      {
        source: "/affordable-escorts-in-:slug.html",
        destination: "/affordable-escorts-in-:slug",
        permanent: true,
      },
      { source: "/:slug.html", destination: "/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
