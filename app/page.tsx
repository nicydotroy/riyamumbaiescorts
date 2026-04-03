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
    stat: "500+",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "100% Discreet",
    desc: "Your privacy is our highest priority. Every interaction is strictly confidential.",
  },
  {
    stat: "★★★★★",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Elite Companions",
    desc: "Handpicked for their elegance, charm, and intelligence. Nothing but the best.",
  },
  {
    stat: "24/7",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Always Available",
    desc: "Round-the-clock service across Mumbai and all surrounding suburbs.",
  },
  {
    stat: "100%",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Verified & Trusted",
    desc: "Professionally trained companions with verified profiles you can trust.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroBanner title="Escorts In Mumbai" tall />

      {/* Features Strip */}
      <section className="relative py-24 overflow-hidden">
        {/* Deep dark background with centered pink glow */}
        <div className="absolute inset-0 bg-dark-surface" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(232,25,91,0.10) 0%, transparent 65%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">Why Choose Us</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white leading-tight">
              The <span className="text-gradient-gold">Riya</span> Difference
            </h2>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
              <div className="w-2 h-2 rotate-45 bg-gold" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group relative p-8 rounded-2xl bg-dark-card border border-dark-border hover:border-gold/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,0,0,0.7),0_0_30px_rgba(232,25,91,0.12)] overflow-hidden"
              >
                {/* Hover glow layer */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Top shimmer line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/70 transition-all duration-500" />

                <div className="relative z-10">
                  {/* Big stat */}
                  <div className="font-playfair text-5xl font-bold text-gold mb-4 leading-none">
                    {f.stat}
                  </div>
                  {/* Icon pill */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 border border-gold/25 text-gold mb-6 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-300">
                    {f.icon}
                  </div>
                  {/* Text */}
                  <h3 className="font-playfair text-lg font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {f.desc}
                  </p>
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
      <section className="relative py-24 overflow-hidden bg-dark">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,25,91,0.06)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
              About Us
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Riya <span className="text-gradient-gold">Mumbai</span> Escorts
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
              <div className="w-2.5 h-2.5 rotate-45 bg-gold" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
            </div>
            <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
              Mumbai, often referred to as the city of dreams, offers endless
              opportunities for both business and pleasure. Amidst the bustling
              streets and luxurious hotels, one can find the finest escort
              services — and Riya stands as one of the premier escorts in the city.
            </p>
          </div>

          {/* Content cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative p-8 rounded-2xl bg-dark-card border border-dark-border hover:border-gold/40 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/60 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  Why Choose Riya Escorts?
                </h3>
                <div className="w-8 h-0.5 bg-gold mb-4 transition-all duration-300 group-hover:w-14" />
                <p className="text-gray-500 text-sm leading-relaxed">
                  When it comes to high-class escort services in Mumbai, Riya is a name that resonates with sophistication and exclusivity. Known for breathtaking beauty, engaging personality, confidence, and intelligence — Riya truly sets the standard.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative p-8 rounded-2xl bg-dark-card border border-gold/25 transition-all duration-500 overflow-hidden shadow-[0_0_30px_rgba(232,25,91,0.08)]">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-transparent to-transparent rounded-2xl" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-bold text-gold mb-3">
                  Best Mumbai Escort Services
                </h3>
                <div className="w-8 h-0.5 bg-gold mb-4" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Booking an escort is not just about hiring someone for companionship; it&apos;s about creating an experience that enhances your time in the city. Riya offers a personalized experience designed to meet your every expectation.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-8 rounded-2xl bg-dark-card border border-dark-border hover:border-gold/40 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/60 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  Book Your Experience Today
                </h3>
                <div className="w-8 h-0.5 bg-gold mb-4 transition-all duration-300 group-hover:w-14" />
                <p className="text-gray-500 text-sm leading-relaxed">
                  If you&apos;re ready to elevate your time in Mumbai, Riya is here to provide you with the finest escort experience. Visit{" "}
                  <Link href="/" title="Book Riya Escorts in Mumbai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">
                    Riya Escorts in Mumbai
                  </Link>{" "}
                  and make your stay truly unforgettable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
