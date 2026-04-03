import type { Metadata } from "next";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import ContactBanner from "@/components/ContactBanner";
import ServiceGrid from "@/components/ServiceGrid";

export const metadata: Metadata = {
  title: "Luxury Escorts in Mumbai | Escorts Services Mumbai | 24/7 Availability",
  description:
    "Experience unmatched elegance and class with Riya Escorts in Mumbai. Our elite escort services are designed for those who seek sophistication and exclusivity. Call now!",
  alternates: { canonical: "https://riyamumbaiescorts.com/" },
  openGraph: {
    title: "Luxury Escorts in Mumbai | Elite Services by Riya Escorts",
    description:
      "Enjoy elite and discreet escort services with Riya Escorts in Mumbai. Tailored for your desires, available round-the-clock.",
    url: "https://riyamumbaiescorts.com/",
    siteName: "Riya Escorts",
    images: [{ url: "https://riyamumbaiescorts.com/images/og-image.webp" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Escorts in Mumbai | Elite Services by Riya Escorts",
    description:
      "Discover sophisticated and luxurious escort services in Mumbai. Contact Riya Escorts for an exclusive experience tailored just for you. Available 24/7.",
    images: ["https://riyamumbaiescorts.com/images/twitter-image.webp"],
    site: "@RiyaEscorts",
    creator: "@RiyaEscorts",
  },
};

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "100% Discreet",
    desc: "Your privacy is our highest priority. Every interaction is strictly confidential.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Elite Companions",
    desc: "Handpicked for their elegance, charm, and intelligence. Nothing but the best.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24/7 Available",
    desc: "Round-the-clock service across Mumbai and all surrounding suburbs.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Trusted Service",
    desc: "Verified profiles and professionally trained companions you can trust.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroBanner title="Escorts In Mumbai" tall />

      {/* Features Strip */}
      <section className="py-16 bg-dark-surface border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col items-center text-center gap-3 group">
                <div className="w-14 h-14 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center text-gold group-hover:border-gold/40 group-hover:bg-gold/5 transition-all duration-300">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-playfair text-sm font-semibold text-white mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner location="Mumbai" />
      <ServiceGrid location="Mumbai" />
      <ContactBanner location="Mumbai" />

      {/* SEO Content */}
      <section className="py-20 bg-dark-surface border-t border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
              Riya Mumbai Escorts
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
              <div className="w-2 h-2 rotate-45 bg-gold" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
            </div>
          </div>

          <div className="prose prose-invert prose-sm max-w-none text-gray-400 space-y-6">
            <p>
              Mumbai, often referred to as the city of dreams, offers endless
              opportunities for both business and pleasure. Amidst the bustling
              streets and luxurious hotels, one can find the finest escort
              services — and Riya stands as one of the premier escorts in the city.
            </p>

            <h3 className="font-playfair text-xl font-semibold text-white">
              Why Choose Riya Escorts in Mumbai?
            </h3>
            <p>
              When it comes to high-class escort services in Mumbai, Riya is a
              name that resonates with sophistication and exclusivity. Known for
              breathtaking beauty, engaging personality, confidence, and
              intelligence — Riya truly sets the standard.
            </p>

            <h3 className="font-playfair text-xl font-semibold text-white">
              Experience the Best in Mumbai Escort Services
            </h3>
            <p>
              Booking an escort is not just about hiring someone for
              companionship; it&apos;s about creating an experience that enhances
              your time in the city. Riya offers a personalized experience
              designed to meet your every expectation.
            </p>

            <h3 className="font-playfair text-xl font-semibold text-white">
              Book Your Luxurious Experience with Riya Today
            </h3>
            <p>
              If you&apos;re ready to elevate your time in Mumbai, Riya is here
              to provide you with the finest escort experience. Visit{" "}
              <Link href="/" title="Book Riya Escorts in Mumbai" className="text-gold hover:text-gold-light transition-colors">
                Riya Escorts in Mumbai
              </Link>{" "}
              to book your luxurious companion and make your stay truly
              unforgettable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
