import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import ContactBanner from "@/components/ContactBanner";

export const metadata: Metadata = {
  title: "Escorts Locations in Mumbai | All Areas Covered | Riya Mumbai Escorts",
  description:
    "Find escort services across all major locations in Mumbai. Riya Mumbai Escorts covers Andheri, Bandra, Thane, Navi Mumbai and 80+ more areas. Call now!",
  alternates: { canonical: "https://riyamumbaiescorts.com/location" },
  openGraph: {
    title: "Escorts Locations in Mumbai | All Areas Covered | Riya Mumbai Escorts",
    description:
      "Premium escort services available across 80+ locations in Mumbai, Navi Mumbai, and Thane district. Discreet, verified, and available 24/7.",
    url: "https://riyamumbaiescorts.com/location",
    siteName: "Riya Escorts",
    images: [{ url: "https://riyamumbaiescorts.com/images/og-image.webp", width: 1200, height: 630, alt: "Escort Locations in Mumbai – Riya Mumbai Escorts" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Escorts Locations in Mumbai | All Areas Covered | Riya Mumbai Escorts",
    description: "Premium escort services available across 80+ locations in Mumbai. Discreet, verified, and available 24/7.",
    images: [{ url: "https://riyamumbaiescorts.com/images/og-image.webp", alt: "Escort Locations in Mumbai – Riya Mumbai Escorts" }],
  },
};

const locationItems = [
  { slug: "miraroad", name: "Mira Road", img: "/images/location/affordable-escorts-in-miraroad.webp" },
  { slug: "vikhroli", name: "Vikhroli", img: "/images/location/affordable-escorts-in-vikhroli.webp" },
  { slug: "vidyavihar", name: "Vidyavihar", img: "/images/location/affordable-escorts-in-vidyavihar.webp" },
  { slug: "vasai", name: "Vasai", img: "/images/location/affordable-escorts-in-vasai.webp" },
  { slug: "vashi", name: "Vashi", img: "/images/location/affordable-escorts-in-vashi.webp" },
  { slug: "ulhasnagar", name: "Ulhasnagar", img: "/images/location/affordable-escorts-in-ulhasnagar.webp" },
  { slug: "turbhe", name: "Turbhe", img: "/images/location/affordable-escorts-in-turbhe.webp" },
  { slug: "titwala", name: "Titwala", img: "/images/location/affordable-escorts-in-titwala.webp" },
  { slug: "kopar-khairane", name: "Kopar Khairane", img: "/images/location/affordable-escorts-in-kopar-khairane.webp" },
  { slug: "thane", name: "Thane", img: "/images/location/affordable-escorts-in-thane.webp" },
  { slug: "santacruz", name: "Santacruz", img: "/images/location/affordable-escorts-in-santacruz.webp" },
  { slug: "borivali", name: "Borivali", img: "/images/location/affordable-escorts-in-borivali.webp" },
  { slug: "andheri", name: "Andheri", img: "/images/location/affordable-escorts-in-andheri.webp" },
  { slug: "bandra", name: "Bandra", img: "/images/location/affordable-escorts-in-bandra.webp" },
  { slug: "navi-mumbai", name: "Navi Mumbai", img: "/images/location/affordable-escorts-in-navi-mumbai.webp" },
  { slug: "panvel", name: "Panvel", img: "/images/location/affordable-escorts-in-panvel.webp" },
  { slug: "kalyan", name: "Kalyan", img: "/images/location/affordable-escorts-in-kalyan.webp" },
  { slug: "mulund", name: "Mulund", img: "/images/location/affordable-escorts-in-mulund.webp" },
  { slug: "malad", name: "Malad", img: "/images/location/affordable-escorts-in-malad.webp" },
  { slug: "kurla", name: "Kurla", img: "/images/location/affordable-escorts-in-kurla.webp" },
  { slug: "kandivali", name: "Kandivali", img: "/images/location/affordable-escorts-in-kandivali.webp" },
  { slug: "juhu", name: "Juhu", img: "/images/location/affordable-escorts-in-juhu.webp" },
  { slug: "goregaon", name: "Goregaon", img: "/images/location/affordable-escorts-in-goregaon.webp" },
  { slug: "dadar", name: "Dadar", img: "/images/location/affordable-escorts-in-dadar.webp" },
  { slug: "virar", name: "Virar", img: "/images/location/affordable-escorts-in-virar.webp" },
  { slug: "vileparle", name: "Vileparle", img: "/images/location/affordable-escorts-in-vileparle.webp" },
  { slug: "wadala", name: "Wadala", img: "/images/location/affordable-escorts-in-wadala.webp" },
];

export default function LocationPage() {
  return (
    <>
      <HeroBanner title="Escort Locations in Mumbai" />
      <ContactBanner location="Mumbai" />

      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
              We Cover All of Mumbai
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-5">
              Choose Your Location
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
              <div className="w-2 h-2 rotate-45 bg-gold" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
            </div>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Premium escort services available across 80+ locations in Mumbai,
              Navi Mumbai, and surrounding suburbs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationItems.map((item) => (
              <Link
                key={item.slug}
                href={`/affordable-escorts-in-${item.slug}`}
                title={`Escorts in ${item.name} – Riya Mumbai Escorts`}
                className="group relative overflow-hidden rounded-2xl bg-dark-card border border-dark-border hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(0,0,0,0.6),0_0_20px_rgba(232,25,91,0.08)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={`Premium Escorts in ${item.name}, Mumbai – Riya Mumbai Escorts`}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <div className="w-8 h-0.5 bg-gold mb-3 transition-all duration-300 group-hover:w-14" />
                  <h3 className="font-playfair text-lg font-semibold text-white group-hover:text-gold transition-colors duration-300 mb-2">
                    Escorts Service in {item.name}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                    Experience luxury and elegance with our premium{" "}
                    <span className="text-gold/70">Escorts in {item.name}</span>. Unforgettable experiences await.
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-gold text-xs font-semibold tracking-wider uppercase">
                    <span>Explore</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
