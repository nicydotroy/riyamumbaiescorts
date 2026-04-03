import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import ContactBanner from "@/components/ContactBanner";

export const metadata: Metadata = {
  title: "Gallery | Riya Mumbai Escorts | View Our Escorts",
  description:
    "View the gallery of Riya Mumbai Escorts. Browse through images of our beautiful and elite escort companions available in Mumbai and surrounding areas.",
  alternates: { canonical: "https://riyamumbaiescorts.com/gallery" },
};

const galleryItems = [
  { slug: "miraroad", name: "Mira Road", img: "/images/location/affordable-call-girls-in-mira-road.webp" },
  { slug: "dahisar", name: "Dahisar", img: "/images/location/affordable-call-girls-in-dahisar.webp" },
  { slug: "andheri", name: "Andheri", img: "/images/location/affordable-escorts-in-andheri.webp" },
  { slug: "bandra", name: "Bandra", img: "/images/location/affordable-escorts-in-bandra.webp" },
  { slug: "borivali", name: "Borivali", img: "/images/location/affordable-escorts-in-borivali.webp" },
  { slug: "dadar", name: "Dadar", img: "/images/location/affordable-escorts-in-dadar.webp" },
  { slug: "goregaon", name: "Goregaon", img: "/images/location/affordable-escorts-in-goregaon.webp" },
  { slug: "juhu", name: "Juhu", img: "/images/location/affordable-escorts-in-juhu.webp" },
  { slug: "kalyan", name: "Kalyan", img: "/images/location/affordable-escorts-in-kalyan.webp" },
  { slug: "kandivali", name: "Kandivali", img: "/images/location/affordable-escorts-in-kandivali.webp" },
  { slug: "kurla", name: "Kurla", img: "/images/location/affordable-escorts-in-kurla.webp" },
  { slug: "malad", name: "Malad", img: "/images/location/affordable-escorts-in-malad.webp" },
  { slug: "mulund", name: "Mulund", img: "/images/location/affordable-escorts-in-mulund.webp" },
  { slug: "navi-mumbai", name: "Navi Mumbai", img: "/images/location/affordable-escorts-in-navi-mumbai.webp" },
  { slug: "panvel", name: "Panvel", img: "/images/location/affordable-escorts-in-panvel.webp" },
  { slug: "santacruz", name: "Santacruz", img: "/images/location/affordable-escorts-in-santacruz.webp" },
  { slug: "thane", name: "Thane", img: "/images/location/affordable-escorts-in-thane.webp" },
  { slug: "vasai", name: "Vasai", img: "/images/location/affordable-escorts-in-vasai.webp" },
  { slug: "vashi", name: "Vashi", img: "/images/location/affordable-escorts-in-vashi.webp" },
  { slug: "vikhroli", name: "Vikhroli", img: "/images/location/affordable-escorts-in-vikhroli.webp" },
  { slug: "vileparle", name: "Vileparle", img: "/images/location/affordable-escorts-in-vileparle.webp" },
  { slug: "virar", name: "Virar", img: "/images/location/affordable-escorts-in-virar.webp" },
  { slug: "kopar-khairane", name: "Kopar Khairane", img: "/images/location/affordable-escorts-in-kopar-khairane.webp" },
  { slug: "ulhasnagar", name: "Ulhasnagar", img: "/images/location/affordable-escorts-in-ulhasnagar.webp" },
];

export default function GalleryPage() {
  return (
    <>
      <HeroBanner title="Riya Mumbai Escorts Gallery" />
      <ContactBanner location="Mumbai" />

      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
              Browse Collection
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-5">
              Our Gallery
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
              <div className="w-2 h-2 rotate-45 bg-gold" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {galleryItems.map((item) => (
              <Link
                key={item.slug}
                href={`/affordable-escorts-in-${item.slug}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-dark-card border border-dark-border hover:border-gold/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              >
                <Image
                  src={item.img}
                  alt={`Escorts in ${item.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-6 h-0.5 bg-gold mb-2 transition-all duration-300 group-hover:w-10" />
                  <p className="font-playfair text-sm font-semibold text-white">
                    Escorts in {item.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
