import type { Metadata } from "next";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import ContactBanner from "@/components/ContactBanner";
import ServiceGrid from "@/components/ServiceGrid";
import LocationGrid from "@/components/LocationGrid";

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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://riyamumbaiescorts.com/#business",
  name: "Riya Mumbai Escorts",
  url: "https://riyamumbaiescorts.com/",
  telephone: "+918169808077",
  description:
    "Mumbai's most trusted premium escort service. Discreet, verified companions available 24/7 across 80+ Mumbai locations including Andheri, Bandra, Juhu, Thane, Navi Mumbai and more.",
  image: "https://riyamumbaiescorts.com/images/og-image.webp",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.076,
    longitude: 72.8777,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: ["https://wa.me/918169808077"],
  priceRange: "₹₹₹",
  areaServed: {
    "@type": "City",
    name: "Mumbai",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://riyamumbaiescorts.com/#website",
  url: "https://riyamumbaiescorts.com/",
  name: "Riya Mumbai Escorts",
  description: "Premium Escort Services in Mumbai — Discreet, Verified & Available 24/7",
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://riyamumbaiescorts.com/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of escort services do you offer in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a wide range of premium companions — IT Girls, Housewife Escorts, Russian Escorts, South Indian, Arab, Punjabi, BDSM Experts, Role Play specialists, GFE, and more. Every companion is handpicked for elegance and charm.",
      },
    },
    {
      "@type": "Question",
      name: "Are your escort services available 24/7?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — round-the-clock, every single day. Whether it is a late-night rendezvous or an early morning engagement, our team in Mumbai is always ready to assist you.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book an escort in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply contact us via our contact page, call, or WhatsApp. Our team will walk you through available companions and help you find your perfect match quickly and discreetly.",
      },
    },
    {
      "@type": "Question",
      name: "Is my privacy kept confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Discretion is foundational to how we operate. All personal information shared during booking is treated with the strictest confidentiality and never shared with any third party.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Mumbai do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover 80+ locations — Andheri, Bandra, Juhu, Thane, Navi Mumbai, Borivali, Panvel, Kalyan, and many more. Contact us if your area is not listed and we will arrange service at your doorstep.",
      },
    },
    {
      "@type": "Question",
      name: "Are all companions verified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — every companion is carefully screened and verified before joining our platform. We ensure they are genuine, professional, and committed to delivering a safe, enjoyable experience.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum booking duration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our minimum booking is one hour. We also offer multi-hour, overnight, and full-day packages. Rates vary by duration and companion.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer outcall and incall escort services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily offer outcall services where companions come directly to your hotel, residence, or preferred location. Incall options may be available depending on the companion.",
      },
    },
    {
      "@type": "Question",
      name: "How is pricing structured for escort services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rates depend on the companion, duration, and type of service. We offer transparent, competitive pricing with absolutely no hidden charges. Contact us directly for a personalised rate card.",
      },
    },
    {
      "@type": "Question",
      name: "Are your escort services safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your safety is our utmost priority. All companions follow strict safety and hygiene protocols, are thoroughly vetted, and operate in a professional, respectful environment at all times.",
      },
    },
    {
      "@type": "Question",
      name: "Can I request a specific type of companion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course. Browse by category or describe your ideal companion to our team. Whether you prefer a college girl, a mature housewife, an exotic Russian escort, or a GFE specialist — we will find your perfect match.",
      },
    },
    {
      "@type": "Question",
      name: "What areas near Mumbai can you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover the full Mumbai Metropolitan Region — Navi Mumbai, Thane, Mira Road, Virar, Vasai, Kalyan, Dombivali, Panvel, Kharghar, and dozens more suburbs.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

      {/* Locations Section */}
      <LocationGrid />

      {/* SEO Informational Content Section */}
      <section className="relative py-24 overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                Your Complete Guide
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Premium Escort Services in{" "}
              <span className="text-gradient-gold">Mumbai</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
              <div className="w-2 h-2 rotate-45 bg-gold" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
            </div>
            <p className="text-gray-400 text-base max-w-3xl mx-auto leading-relaxed">
              Mumbai — India&apos;s financial capital and city of dreams — is also home to the most refined and discreet escort services in the country. Whether you are a businessman visiting for meetings, a traveller seeking local companionship, or a resident looking for a premium social experience, Riya Mumbai Escorts is your trusted partner.
            </p>
          </div>

          {/* 3-col topic cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {/* Card 1 */}
            <div className="group relative p-7 rounded-2xl bg-dark-card border border-dark-border hover:border-gold/40 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/60 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold mb-5 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  Elite Companions, Curated for You
                </h3>
                <div className="w-8 h-0.5 bg-gold mb-4 transition-all duration-300 group-hover:w-14" />
                <p className="text-gray-500 text-sm leading-relaxed">
                  Every companion in our Mumbai roster is personally selected for her charm, intelligence, and elegance. From IT professionals and college graduates to experienced housewives and exotic international escorts — our collection is unmatched in quality and diversity.
                </p>
              </div>
            </div>

            {/* Card 2 — highlighted */}
            <div className="group relative p-7 rounded-2xl bg-dark-card border border-gold/25 transition-all duration-500 overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.06)]">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-transparent to-transparent rounded-2xl" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold mb-5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-bold text-gold mb-3">
                  100% Discreet &amp; Confidential
                </h3>
                <div className="w-8 h-0.5 bg-gold mb-4" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your privacy is non-negotiable. All bookings are handled with absolute confidentiality — no personal data is ever shared, stored unnecessarily, or disclosed to third parties. We operate with the discretion that high-profile clients in Mumbai demand.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-7 rounded-2xl bg-dark-card border border-dark-border hover:border-gold/40 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/60 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold mb-5 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  Serving 80+ Mumbai Locations
                </h3>
                <div className="w-8 h-0.5 bg-gold mb-4 transition-all duration-300 group-hover:w-14" />
                <p className="text-gray-500 text-sm leading-relaxed">
                  From South Mumbai&apos;s luxury hotels to the suburbs of Thane, Navi Mumbai, and beyond — we deliver premium escort services across every corner of the Mumbai Metropolitan Region, with punctual outcall service at your preferred address.
                </p>
              </div>
            </div>
          </div>

          {/* Long-form SEO content — 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
            {/* Left column */}
            <div className="space-y-7">
              <div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-3">
                  Why Riya Escorts Stands Apart in Mumbai
                </h3>
                <div className="w-10 h-0.5 bg-gold mb-4" />
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  The escort industry in Mumbai is large — but finding a genuinely reliable, safe, and high-quality service is rare. Riya Mumbai Escorts has built its reputation over years of serving discerning clients who demand nothing less than perfection. Our companions are not just beautiful; they are well-spoken, socially adept, and trained to provide an experience that goes far beyond the ordinary.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Whether you require a sophisticated companion for a corporate dinner, a travel partner to accompany you on a business trip, or an intimate encounter in the privacy of your hotel suite, we have the right escort in Mumbai for every occasion.
                </p>
              </div>

              <div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-3">
                  Types of Escort Services Available
                </h3>
                <div className="w-10 h-0.5 bg-gold mb-4" />
                <ul className="space-y-2.5">
                  {[
                    "Girlfriend Experience (GFE) — genuine warmth and emotional connection",
                    "Social & dinner companions for events and corporate gatherings",
                    "Travel companions across Mumbai and outstation",
                    "In-room and hotel escort services in all major Mumbai hotels",
                    "Roleplay and fantasy-themed experiences",
                    "BDSM and specialty services by trained professionals",
                    "International companions — Russian, Arab, and more",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-500 text-sm leading-relaxed">
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rotate-45 bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-7">
              <div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-3">
                  How to Book Escorts in Mumbai
                </h3>
                <div className="w-10 h-0.5 bg-gold mb-4" />
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Booking with Riya Mumbai Escorts is a seamless, three-step process designed to respect your time and privacy. Browse our collection of companions online, select the escort that matches your preferences, and contact our team via call or WhatsApp. We confirm your booking discreetly within minutes — no lengthy forms, no unnecessary information.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our customer service team is available around the clock to assist with last-minute bookings, special requests, and any questions you may have. We understand that spontaneity is part of the experience — which is why we maintain 24/7 availability across all of Mumbai.
                </p>
              </div>

              <div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-3">
                  Safety, Hygiene &amp; Professionalism
                </h3>
                <div className="w-10 h-0.5 bg-gold mb-4" />
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Every escort listed with Riya Mumbai Escorts undergoes thorough background verification, health screening, and professional training. We enforce strict safety standards to protect both our clients and companions. All encounters are consensual, professional, and operate within clearly defined boundaries.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our hygiene standards are aligned with five-star expectations. Whether you are visiting a luxury hotel in South Mumbai or hosting at a private residence in Bandra, you can trust that our companions arrive well-groomed, punctually, and prepared to deliver a flawless experience.
                </p>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { stat: "80+", label: "Mumbai Locations Covered" },
              { stat: "500+", label: "Verified Companions" },
              { stat: "24/7", label: "Always Available" },
              { stat: "100%", label: "Discreet & Confidential" },
            ].map((s) => (
              <div
                key={s.label}
                className="text-center p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-gold/30 transition-colors duration-300"
              >
                <div className="font-playfair text-4xl font-bold text-gold mb-2">{s.stat}</div>
                <div className="text-gray-500 text-xs font-medium tracking-wide leading-snug">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Extended SEO editorial content */}
          <div className="relative rounded-3xl border border-dark-border bg-dark-card overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_0%,rgba(212,175,55,0.04)_0%,transparent_60%)]" />

            <div className="relative z-10 p-8 md:p-12 space-y-12">

              {/* Block 1 */}
              <div>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                  Mumbai&apos;s Most Trusted Escort Service — Riya Escorts
                </h3>
                <div className="w-12 h-0.5 bg-gold mb-5" />
                <p className="text-gray-500 text-sm leading-[1.9] mb-4">
                  When it comes to finding a premium escort service in Mumbai, the options are many — but the quality varies enormously. Riya Mumbai Escorts has established itself as the most trusted name in the city precisely because we prioritise quality over quantity. Our platform is not a directory; it is a curated collection of genuine, verified, and highly professional companions who are selected for their elegance, intelligence, and ability to provide an exceptional experience.
                </p>
                <p className="text-gray-500 text-sm leading-[1.9]">
                  From the moment you contact us to the moment your experience concludes, you will notice the difference. We operate with the professionalism of a luxury concierge service — attentive, discreet, and entirely focused on exceeding your expectations. Our clients include senior executives, entrepreneurs, celebrities, and international travellers who demand nothing less than the absolute best Mumbai has to offer.
                </p>
              </div>

              {/* Block 2 — with inline highlight box */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-3">
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                    The Riya Experience — What Makes Us Different
                  </h3>
                  <div className="w-12 h-0.5 bg-gold mb-5" />
                  <p className="text-gray-500 text-sm leading-[1.9] mb-4">
                    Every escort service in Mumbai will tell you they are the best — but very few can substantiate that claim. At Riya Escorts, our reputation is backed by years of consistent service, thousands of satisfied clients, and a commitment to continuous improvement. We regularly update our companion roster to ensure freshness and variety, and every new escort joins only after passing our rigorous vetting process.
                  </p>
                  <p className="text-gray-500 text-sm leading-[1.9]">
                    We understand that every client is unique. A first-time visitor to Mumbai has very different needs from a regular business traveller. Our team takes the time to understand your specific requirements and personally recommends the companion most suited to your personality, preferences, and the occasion in question. This bespoke approach is what transforms a simple escort booking into an unforgettable memory.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <div className="rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/5 to-transparent p-6">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                    <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4">Why Clients Choose Us</p>
                    <ul className="space-y-3">
                      {[
                        "Personally handpicked companions",
                        "Verified profiles — no fake listings",
                        "Bespoke matching to your preferences",
                        "Punctual, professional outcall service",
                        "Zero hidden charges — full transparency",
                        "Complete privacy at every step",
                        "Available across 80+ Mumbai locations",
                        "24/7 responsive customer support",
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-3 text-gray-400 text-sm">
                          <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rotate-45 bg-gold" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Block 3 */}
              <div>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                  Escort Services Across All of Mumbai — South Mumbai to the Suburbs
                </h3>
                <div className="w-12 h-0.5 bg-gold mb-5" />
                <p className="text-gray-500 text-sm leading-[1.9] mb-4">
                  Mumbai is a city of contrasts — from the iconic Marine Drive and the five-star hotels of Nariman Point to the lively lanes of Andheri, the serene suburbs of Juhu, and the sprawling townships of Navi Mumbai. Riya Mumbai Escorts operates seamlessly across all these micro-markets, offering consistent quality whether you are staying at the Taj Mahal Palace or a premium service apartment in Powai.
                </p>
                <p className="text-gray-500 text-sm leading-[1.9] mb-4">
                  We cover popular hubs like Bandra, Andheri, Juhu, Borivali, Thane, Kharghar, Panvel, Kalyan, and Mira Road — as well as lesser-served areas including Churchgate, Grant Road, Mahalaxmi, Prabhadevi, Dadar, Kurla, and Ghatkopar. No matter where you are in the city, we will send a companion to your door swiftly and discreetly.
                </p>
                <p className="text-gray-500 text-sm leading-[1.9]">
                  Our deep coverage across the Mumbai Metropolitan Region means you are never far from a premium escort experience. We are available even for outstation travel arrangements when you need a companion to accompany you beyond city limits — to Pune, Lonavala, or elsewhere in Maharashtra.
                </p>
              </div>

              {/* Block 4 */}
              <div>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                  Independent Escorts vs Agency Escorts in Mumbai — Why an Agency is Safer
                </h3>
                <div className="w-12 h-0.5 bg-gold mb-5" />
                <p className="text-gray-500 text-sm leading-[1.9] mb-4">
                  Many clients in Mumbai are tempted to seek out independent escorts to save costs. While independent escorts do exist, working with a reputable agency like Riya Escorts offers significant advantages in terms of safety, reliability, and consistency. When you book through us, you deal with a professional team that has already verified the companion&apos;s identity, health, and professional conduct.
                </p>
                <p className="text-gray-500 text-sm leading-[1.9]">
                  Independent listings on social media or classifieds sites carry risks — profiles may be fake, photos misleading, or the encounter may become unsafe. With Riya Escorts, what you see is what you get. Everything is transparent, professionally managed, and backed by our commitment to your satisfaction and security. This is why repeat clients in Mumbai consistently return to Riya Escorts rather than exploring unverified alternatives.
                </p>
              </div>

              {/* Block 5 */}
              <div>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                  The Best Hotels in Mumbai to Meet Our Escorts
                </h3>
                <div className="w-12 h-0.5 bg-gold mb-5" />
                <p className="text-gray-500 text-sm leading-[1.9] mb-4">
                  Mumbai is home to some of India&apos;s most prestigious hotels — and our escorts are experienced, confident, and perfectly at ease in these environments. Whether you are staying at the Taj Mahal Palace Hotel in Colaba, the Oberoi in Nariman Point, the JW Marriott in Juhu, the Grand Hyatt in Santacruz, or a boutique luxury property in Bandra, our companions will arrive discreetly and professionally.
                </p>
                <p className="text-gray-500 text-sm leading-[1.9]">
                  We are familiar with the protocols and expectations of Mumbai&apos;s five-star hospitality circuit. Our escorts understand how to conduct themselves in premium settings — from lobby entrances to fine-dining restaurants — ensuring an experience that is seamless, natural, and entirely memorable. Just provide us with your hotel name and room details at the time of booking and we will handle the rest.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-28 overflow-hidden bg-dark-surface">
        {/* Layered background atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(232,25,91,0.10)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(212,175,55,0.06)_0%,transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        {/* Decorative corner ornaments */}
        <div className="absolute top-10 left-10 w-24 h-24 border-l border-t border-gold/10 rounded-tl-3xl" />
        <div className="absolute top-10 right-10 w-24 h-24 border-r border-t border-gold/10 rounded-tr-3xl" />
        <div className="absolute bottom-10 left-10 w-24 h-24 border-l border-b border-gold/10 rounded-bl-3xl" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-r border-b border-gold/10 rounded-br-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                Common Questions
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Got{" "}
              <span className="relative inline-block">
                <span className="text-gradient-gold">Questions?</span>
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              </span>
            </h2>
            <p className="text-gray-400 text-base max-w-lg mx-auto leading-relaxed">
              Everything you need to know before booking your perfect companion in Mumbai.
            </p>
          </div>

          {/* Two-column FAQ grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                q: "What types of escort services do you offer?",
                a: "We offer a wide range of premium companions — IT Girls, Housewife Escorts, Russian Escorts, South Indian, Arab, Punjabi, BDSM Experts, Role Play specialists, GFE, and more. Every companion is handpicked for elegance and charm.",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                q: "Are your escort services available 24/7?",
                a: "Yes — round-the-clock, every single day. Whether it's a late-night rendezvous or an early morning engagement, our team in Mumbai is always ready to assist you.",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                q: "How do I book an escort in Mumbai?",
                a: "Simply contact us via our contact page, call, or WhatsApp. Our team will walk you through available companions and help you find your perfect match — quickly and discreetly.",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                q: "Is my privacy kept confidential?",
                a: "Absolutely. Discretion is foundational to how we operate. All personal information shared during booking is treated with the strictest confidentiality and never shared with any third party.",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                q: "Which areas of Mumbai do you cover?",
                a: "We cover 80+ locations — Andheri, Bandra, Juhu, Thane, Navi Mumbai, Borivali, Panvel, Kalyan, and many more. Can't find your area? Contact us and we'll arrange service at your doorstep.",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                q: "Are all companions verified?",
                a: "Yes — every companion is carefully screened and verified before joining our platform. We ensure they are genuine, professional, and committed to delivering a safe, enjoyable experience.",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                q: "What is the minimum booking duration?",
                a: "Our minimum booking is one hour. We also offer multi-hour, overnight, and full-day packages. Rates vary by duration and companion — ask us for a tailored quote.",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                q: "Do you offer outcall and incall services?",
                a: "We primarily offer outcall — companions come directly to your hotel, residence, or preferred location. Incall options may be available depending on the companion; please enquire when booking.",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                q: "Can I request a specific type of companion?",
                a: "Of course. Browse by category or describe your ideal companion to our team. Whether you prefer a college girl, a mature housewife, an exotic Russian escort, or a GFE specialist — we'll find your perfect match.",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                q: "How is pricing structured?",
                a: "Rates depend on the companion, duration, and type of service. We offer transparent, competitive pricing with absolutely no hidden charges. Reach out directly for a personalised rate card.",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                q: "Are your services safe?",
                a: "Your safety is our utmost priority. All companions follow strict safety and hygiene protocols, are thoroughly vetted, and operate in a professional, respectful environment at all times.",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
                q: "What areas near Mumbai can you serve?",
                a: "We cover the full Mumbai Metropolitan Region — Navi Mumbai, Thane, Mira Road, Virar, Vasai, Kalyan, Dombivali, Panvel, Kharghar, and dozens more suburbs. We are the most widely available escort service in the region.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group relative rounded-2xl bg-dark-card border border-dark-border hover:border-gold/40 open:border-gold/40 transition-all duration-400 overflow-hidden"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gold/0 to-transparent group-open:via-gold/70 transition-all duration-500" />
                {/* Top shimmer on open */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-open:via-gold/50 transition-all duration-500" />

                <summary className="flex items-start gap-4 p-6 cursor-pointer list-none select-none">
                  {/* Icon badge */}
                  <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-open:bg-gold/20 group-open:border-gold/50 transition-all duration-300">
                    {item.icon}
                  </span>
                  {/* Number + Question */}
                  <span className="flex-1 min-w-0">
                    <span className="block text-gold/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-1 group-open:text-gold/70 transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="block font-playfair text-[15px] font-semibold text-white group-open:text-gold leading-snug transition-colors duration-300">
                      {item.q}
                    </span>
                  </span>
                  {/* Toggle chevron */}
                  <span className="flex-shrink-0 mt-1 w-7 h-7 rounded-full border border-dark-border flex items-center justify-center text-gray-600 group-open:border-gold/40 group-open:text-gold transition-all duration-300 group-open:rotate-180">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>

                {/* Answer */}
                <div className="px-6 pb-6 pl-[4.5rem]">
                  <p className="text-gray-400 text-sm leading-relaxed border-l border-gold/20 pl-4">
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div className="mt-14 relative rounded-2xl overflow-hidden border border-gold/25 bg-gradient-to-r from-dark-card via-dark-card to-dark-card">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,25,91,0.08)_0%,transparent_70%)]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-8">
              <div>
                <p className="font-playfair text-xl font-bold text-white mb-1">
                  Still have questions?
                </p>
                <p className="text-gray-500 text-sm">
                  Our team is available 24/7 — reach out and we&apos;ll respond instantly.
                </p>
              </div>
              <Link
                href="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gold text-dark font-bold text-sm tracking-wide hover:bg-gold-light transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0.35)]"
              >
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
