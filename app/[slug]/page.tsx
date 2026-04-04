import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import ContactBanner from "@/components/ContactBanner";
import ServiceGrid from "@/components/ServiceGrid";
import LocationGrid from "@/components/LocationGrid";
import { serviceTypes } from "@/data/services";
import { locations, getLocationBySlug } from "@/data/locations";

interface Props {
  params: Promise<{ slug: string }>;
}

const LOCATION_PREFIX = "affordable-escorts-in-";

function resolveRoute(slug: string) {
  if (slug.startsWith(LOCATION_PREFIX)) {
    const locSlug = slug.slice(LOCATION_PREFIX.length);
    const location = getLocationBySlug(locSlug);
    return location ? { kind: "location" as const, location } : null;
  }
  const service = serviceTypes.find((s) => s.slug === slug);
  return service ? { kind: "service" as const, service } : null;
}

export async function generateStaticParams() {
  const serviceSlugs = serviceTypes.map((s) => ({ slug: s.slug }));
  const locationSlugs = locations.map((loc) => ({
    slug: `${LOCATION_PREFIX}${loc.slug}`,
  }));
  return [...serviceSlugs, ...locationSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const route = resolveRoute(slug);
  if (!route) return {};

  if (route.kind === "location") {
    const { name } = route.location;
    return {
      title: `Luxury Escorts in ${name} | Escorts Services ${name} | 24/7 Availability`,
      description: `Experience unmatched elegance and class with Riya Escorts in ${name}. Our elite escort services are designed for those who seek sophistication and exclusivity. Call now!`,
      keywords: `Escorts in ${name}, Luxury Escorts ${name}, Elite Escorts, Riya Escorts, ${name} Escorts Services`,
      alternates: {
        canonical: `https://riyamumbaiescorts.com/${LOCATION_PREFIX}${route.location.slug}`,
      },
      openGraph: {
        title: `Luxury Escorts in ${name} | Elite Services by Riya Escorts`,
        description: `Enjoy elite and discreet escort services with Riya Escorts in ${name}. Tailored for your desires, available round-the-clock.`,
        url: `https://riyamumbaiescorts.com/${LOCATION_PREFIX}${route.location.slug}`,
        siteName: "Riya Escorts",
        images: [{ url: "https://riyamumbaiescorts.com/images/og-image.webp" }],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `Luxury Escorts in ${name} | Elite Services by Riya Escorts`,
        description: `Discover sophisticated escort services in ${name}. Contact Riya Escorts for an exclusive experience tailored just for you. Available 24/7.`,
        images: ["https://riyamumbaiescorts.com/images/twitter-image.webp"],
      },
    };
  }

  // service
  const { service } = route;
  return {
    title: `${service.title} | Riya Mumbai Escorts`,
    description: service.description,
    alternates: {
      canonical: `https://riyamumbaiescorts.com/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Riya Mumbai Escorts`,
      description: service.description,
      url: `https://riyamumbaiescorts.com/${service.slug}`,
      siteName: "Riya Escorts",
      images: [{ url: `https://riyamumbaiescorts.com${service.image}` }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Riya Mumbai Escorts`,
      description: service.description,
      images: [`https://riyamumbaiescorts.com${service.image}`],
    },
  };
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const route = resolveRoute(slug);
  if (!route) notFound();

  if (route.kind === "location") {
    const { name, slug: locSlug, image: locImage } = route.location;

    const locationSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `https://riyamumbaiescorts.com/${LOCATION_PREFIX}${locSlug}#business`,
      name: `Riya Escorts in ${name}`,
      url: `https://riyamumbaiescorts.com/${LOCATION_PREFIX}${locSlug}`,
      telephone: "+918169808077",
      description: `Premium discreet escort services in ${name}, Mumbai. Verified companions available 24/7. Call or WhatsApp to book now.`,
      image: `https://riyamumbaiescorts.com${locImage}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: name,
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      parentOrganization: {
        "@type": "Organization",
        name: "Riya Mumbai Escorts",
        url: "https://riyamumbaiescorts.com",
      },
    };

    const locationFaqs = [
      {
        q: `How do I book an escort in ${name}?`,
        a: `Booking is simple — call or WhatsApp +91 8169808077, describe your preferences, and we will match you with the perfect companion in ${name}. Same-day and advance bookings are both available.`,
      },
      {
        q: `What types of companions are available in ${name}?`,
        a: `We offer IT Girls, College Girls, Housewife Escorts, Russian Models, South Indian, Arab, Punjabi, GFE specialists, BDSM Experts, and Role Play companions — all available in ${name}.`,
      },
      {
        q: `Are your escort services in ${name} available 24/7?`,
        a: `Yes — our ${name} escort service operates around the clock, 365 days a year. Late-night, early morning, weekdays, weekends — we are always ready to assist you.`,
      },
      {
        q: `Is my privacy protected when booking escorts in ${name}?`,
        a: `Absolutely. All bookings in ${name} are handled with complete confidentiality. Your personal details are never stored, shared, or disclosed to any third party under any circumstances.`,
      },
      {
        q: `Do you provide outcall escort services in ${name}?`,
        a: `Yes — our primary service is outcall. Our companions come directly to your hotel, apartment, or preferred location in ${name}. No need to travel anywhere.`,
      },
      {
        q: `How much do escort services cost in ${name}?`,
        a: `Rates vary based on companion, duration, and service type. We offer transparent, competitive pricing with no hidden charges. Contact us directly for a personalised rate card for ${name}.`,
      },
      {
        q: `Are the escorts listed for ${name} real and verified?`,
        a: `Every companion is rigorously screened and verified before listing. Photos are genuine, profiles are accurate, and all companions are professional. What you see is exactly who arrives — guaranteed.`,
      },
      {
        q: `What hotels in ${name} allow escort services?`,
        a: `Many 3-star, 4-star, and 5-star hotels in ${name} are discreet and guest-friendly. Our companions are experienced with hotel visits and will arrive discretely. Contact us and we will advise on a smooth arrangement.`,
      },
    ];

    const locationFaqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: locationFaqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    };

    return (
      <>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(locationFaqSchema) }}
        />

        <HeroBanner title={`Escorts In ${name}`} tall />
        <ContactBanner location={name} />

        {/* Trust Feature Strip */}
        <section className="py-10 bg-dark-surface border-y border-dark-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "🛡️", label: "100% Discreet", sub: "Privacy guaranteed" },
                { icon: "✅", label: "Verified Companions", sub: "All profiles are real" },
                { icon: "🕐", label: "24/7 Available", sub: "Round-the-clock service" },
                { icon: "🌟", label: "Premium Quality", sub: "Elite companions only" },
              ].map(({ icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <p className="text-white text-sm font-semibold">{label}</p>
                    <p className="text-gray-500 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceGrid location={name} />
        <ContactBanner location={name} />

        {/* ===== Rich SEO Section ===== */}
        <section className="relative py-24 overflow-hidden bg-dark">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_60%,rgba(212,175,55,0.04)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

            {/* Block 1: Location Image + Intro */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src={locImage}
                  alt={`Escorts in ${name}`}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
                <div className="absolute inset-0 rounded-2xl border border-gold/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-dark/80 border border-gold/30 text-gold text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full backdrop-blur-sm">
                    Escorts in {name}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                  Premium Escort Services
                </p>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                  Riya Mumbai Escorts<br />
                  <span className="text-gradient-gold">in {name}</span>
                </h2>
                <div className="h-px w-12 bg-gold mb-6" />
                <p className="text-gray-400 leading-relaxed mb-4">
                  Welcome to Riya Mumbai Escorts — {name}&apos;s most trusted premium escort service. Whether you are visiting {name} on business or for pleasure, our elite companions are available around the clock to make your stay truly extraordinary.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Every companion in our {name} roster is hand-picked, thoroughly verified, and trained in the art of hospitality and discretion. Expect nothing less than a five-star experience.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    `Instant booking via Call & WhatsApp in ${name}`,
                    "100% verified, genuine companions",
                    "Zero hidden charges — full transparency",
                    "Hotel-friendly outcall service available",
                    "All companion types available",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="w-5 h-5 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+918169808077"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-gold-dark text-black font-bold text-base px-8 py-4 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-[0_8px_30px_rgba(212,175,55,0.25)]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Book Now in {name}
                </a>
              </div>
            </div>

            {/* Block 2: 3 Topic Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ),
                  title: `Types of Escorts in ${name}`,
                  text: `From college girls and housewives to Russian models and GFE experts — our diverse roster covers every preference, all available directly in ${name}.`,
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: `How to Book in ${name}`,
                  text: `Call or WhatsApp +91 8169808077, choose your companion category, confirm time and location — we handle the rest. Booking takes under 5 minutes.`,
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: "Complete Discretion",
                  text: `Every booking in ${name} is handled in strict confidence. No names recorded, no call logs, no traces. Your privacy is our absolute priority — always.`,
                },
              ].map(({ icon, title, text }) => (
                <div key={title} className="bg-dark-card border border-dark-border rounded-2xl p-7 hover:border-gold/30 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-5">
                    {icon}
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-white mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* Block 3: Long-form Editorial */}
            <div className="bg-dark-card border border-dark-border rounded-2xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
                  Escort Services in {name} — Everything You Need to Know
                </h2>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
                  <div className="w-2 h-2 rotate-45 bg-gold" />
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-7 text-gray-400 leading-relaxed">
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-white mb-3">
                      Why Choose Riya Escorts in {name}?
                    </h3>
                    <p>
                      {name} is one of Mumbai&apos;s most vibrant and dynamic areas — home to luxury hotels, fine dining, corporate hubs, and a thriving nightlife. In this environment, Riya Mumbai Escorts has established itself as the most trusted premium escort agency, consistently delivering quality, reliability, and absolute discretion.
                    </p>
                    <p className="mt-3">
                      Unlike local or unverified escort listings, every companion in our {name} network is personally vetted for authenticity, professionalism, and presentation. Our strict selection process ensures the companion you see is exactly who arrives at your door.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-white mb-3">
                      The Riya Experience in {name}
                    </h3>
                    <p>
                      From the first call to the final farewell, our team ensures a seamless, stress-free experience in {name}. Whether it&apos;s a dinner date companion, a late-night visit, or a relaxed in-room experience at your hotel — every booking is tailored to your exact requirements.
                    </p>
                    <p className="mt-3">
                      Our companions are articulate, impeccably presented, and capable of adapting to any social or private setting. They arrive on time, dressed beautifully, and ready to make your evening unforgettable. Discretion is woven into every interaction.
                    </p>
                  </div>
                </div>
                <div className="space-y-7 text-gray-400 leading-relaxed">
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-white mb-3">
                      Our Companion Types in {name}
                    </h3>
                    <p>
                      We offer the widest selection of companion types in {name}. Whether your preference is a sophisticated IT professional, a youthful college beauty, a mature housewife, an exotic Russian model, or a specialist in GFE or role play — we have your perfect match.
                    </p>
                    <ul className="mt-4 space-y-2">
                      {[
                        "IT Girls & Corporate Companions",
                        "College Girls & Young Beauties",
                        "Housewife & Mature Escorts",
                        "Russian & International Models",
                        "South Indian, Arab & Punjabi Escorts",
                        "GFE, BDSM & Role Play Specialists",
                      ].map((type) => (
                        <li key={type} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                          {type}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-white mb-3">
                      Safety &amp; Privacy in {name}
                    </h3>
                    <p>
                      Your safety is paramount. All companions operating in {name} follow strict hygiene, safety, and conduct protocols. We maintain a zero-tolerance policy for misconduct. All companions are consenting, professional adults who have voluntarily joined our platform.
                    </p>
                    <p className="mt-3">
                      Your booking details, contact information, and personal preferences are never stored, sold, or shared. Every transaction is handled with end-to-end confidentiality. Book with complete confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 4: Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-dark-border rounded-2xl overflow-hidden border border-dark-border">
              {[
                { value: "5,000+", label: "Happy Clients" },
                { value: "80+", label: "Mumbai Locations" },
                { value: "15+", label: "Companion Types" },
                { value: "24/7", label: "Always Available" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-dark-card px-6 py-8 text-center">
                  <p className="font-playfair text-3xl font-bold text-gold mb-1">{value}</p>
                  <p className="text-gray-500 text-sm">{label}</p>
                </div>
              ))}
            </div>

            {/* Block 5: Extended SEO Content */}
            <div className="space-y-8 text-gray-400 leading-relaxed">
              <div className="border-l-4 border-gold pl-6">
                <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                  {name}&apos;s Most Trusted Escort Service
                </h2>
                <p>
                  Over the years, Riya Mumbai Escorts has built an unmatched reputation in {name} for reliability, quality, and discretion. Word-of-mouth from satisfied clients continues to make us the number-one choice for those seeking a premium companion without the worry of scams, fake profiles, or hidden charges.
                </p>
                <p className="mt-3">
                  Our {name} team operates with a single mandate: to ensure every client leaves delighted. We don&apos;t just connect you with a companion — we curate an experience. Every detail is managed with care and professionalism.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="border-l-4 border-gold/40 pl-6">
                  <h3 className="font-playfair text-xl font-semibold text-white mb-3">
                    Independent vs Agency Escorts in {name}
                  </h3>
                  <p>
                    Choosing an independent escort in {name} comes with risks — unverified identities, no accountability, and no support if something goes wrong. With Riya Mumbai Escorts, you benefit from professional agency oversight: background checks, genuine photos, consistent availability, and a dedicated team available 24/7.
                  </p>
                  <p className="mt-3">
                    Agency escorts in {name} are trained in etiquette, discretion, and client satisfaction. The difference in quality is night and day — and our repeat client rate proves it.
                  </p>
                </div>
                <div className="border-l-4 border-gold/40 pl-6">
                  <h3 className="font-playfair text-xl font-semibold text-white mb-3">
                    Best Hotels for Escort Services in {name}
                  </h3>
                  <p>
                    {name} is home to a range of 3-star to 5-star hotels known for their discreet, guest-friendly environments. Our companions are experienced with hotel visits and handle every arrival with the utmost professionalism.
                  </p>
                  <p className="mt-3">
                    If you need guidance on the best hotels to use in {name} for a discreet encounter, our team will advise you. We work across all budget ranges and accommodation types.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <LocationGrid />

        {/* ===== FAQ Section ===== */}
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
                <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Common Questions</span>
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
                Everything you need to know before booking your perfect companion in {name}.
              </p>
            </div>

            {/* Two-column FAQ grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {[
                {
                  icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>),
                  q: `How do I book an escort in ${name}?`,
                  a: locationFaqs[0].a,
                },
                {
                  icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>),
                  q: `What types of companions are available in ${name}?`,
                  a: locationFaqs[1].a,
                },
                {
                  icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
                  q: `Are your escort services in ${name} available 24/7?`,
                  a: locationFaqs[2].a,
                },
                {
                  icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>),
                  q: `Is my privacy protected when booking escorts in ${name}?`,
                  a: locationFaqs[3].a,
                },
                {
                  icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>),
                  q: `Do you provide outcall escort services in ${name}?`,
                  a: locationFaqs[4].a,
                },
                {
                  icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
                  q: `How much do escort services cost in ${name}?`,
                  a: locationFaqs[5].a,
                },
                {
                  icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
                  q: `Are the escorts listed for ${name} real and verified?`,
                  a: locationFaqs[6].a,
                },
                {
                  icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>),
                  q: `What hotels in ${name} allow escort services?`,
                  a: locationFaqs[7].a,
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
                    Still have questions about escorts in {name}?
                  </p>
                  <p className="text-gray-500 text-sm">
                    Our team replies instantly — call or message us on WhatsApp right now.
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <a
                    href="tel:+918169808077"
                    className="inline-flex items-center gap-2 border border-gold/40 text-gold hover:bg-gold/10 font-semibold text-sm px-5 py-3 rounded-full transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/918169808077"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold text-sm px-5 py-3 rounded-full transition-colors duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactBanner location={name} />
      </>
    );
  }

  // service page
  const { service } = route;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://riyamumbaiescorts.com/${service.slug}#service`,
    name: service.title,
    url: `https://riyamumbaiescorts.com/${service.slug}`,
    description: service.description,
    image: `https://riyamumbaiescorts.com${service.image}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Riya Mumbai Escorts",
      url: "https://riyamumbaiescorts.com",
      telephone: "+918169808077",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    areaServed: { "@type": "City", name: "Mumbai" },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  const serviceFaqs = [
    {
      icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>),
      q: `What makes your ${service.title} stand out in Mumbai?`,
      a: `Our ${service.title} are handpicked for beauty, elegance, and professionalism. Every companion is verified, genuine, and trained to deliver an exceptional experience that is discreet, personal, and unforgettable.`,
    },
    {
      icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>),
      q: `How do I book ${service.title} in Mumbai?`,
      a: `Simply call or WhatsApp +91 8169808077, mention your preference for ${service.title}, and our team will confirm availability and arrange everything within minutes. Advance and same-day bookings are both welcome.`,
    },
    {
      icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>),
      q: "Is your service completely discreet and confidential?",
      a: "Absolutely. All bookings are handled with complete confidentiality. Your personal details, contact information, and preferences are never stored, shared, or disclosed. Discretion is the foundation of everything we do.",
    },
    {
      icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
      q: "Are your escort services available 24/7?",
      a: "Yes — our Mumbai escort service operates around the clock, 365 days a year. Whether it is a late-night booking or an early morning arrangement, our team is always available to assist you.",
    },
    {
      icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>),
      q: "Do you provide outcall service across Mumbai?",
      a: "Yes — our primary offering is outcall. Companions come directly to your hotel, apartment, or any preferred location across Mumbai and suburbs. No commute required on your end.",
    },
    {
      icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
      q: "How is pricing structured for this service?",
      a: "Rates are transparent and vary by companion, duration, and package. We offer no hidden charges and no surprises. Contact us directly for a personalised rate card tailored to your requirements.",
    },
    {
      icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
      q: "Are the companions real and verified?",
      a: "Every companion is rigorously screened before joining our platform. Photos are genuine, profiles are accurate, and all companions are professional adults. What you see is exactly who arrives — every single time.",
    },
    {
      icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
      q: "Which areas of Mumbai do you deliver this service to?",
      a: "We cover 80+ locations across Mumbai — Andheri, Bandra, Juhu, Thane, Navi Mumbai, Borivali, Panvel, Kalyan, Mira Road, and many more. If your area is not listed, contact us and we will arrange it.",
    },
    {
      icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
      q: `What is the minimum booking duration for ${service.title}?`,
      a: `The minimum booking duration is 1 hour. We also offer 2-hour, 3-hour, half-day, and full overnight packages for ${service.title}. The longer the booking, the more relaxed and immersive the experience becomes. Contact our team to discuss the ideal duration and package for your specific requirements.`,
    },
    {
      icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>),
      q: `Can I request a specific type of companion for ${service.title}?`,
      a: `Absolutely. You can specify preferences including appearance, age range, personality type, nationality, and specialisation. Our team will match you with the most suitable companion from our ${service.title} roster. Specific requests are always treated as a priority and accommodated wherever possible.`,
    },
    {
      icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>),
      q: "What should I prepare before the companion arrives?",
      a: "Ensure a private, comfortable space and have the agreed payment ready. Be punctual — our companions are always on time and appreciate mutual courtesy. A welcoming, relaxed environment sets the ideal tone. Our team is available to guide first-time clients through every step of the preparation process.",
    },
    {
      icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>),
      q: `Do you offer overnight bookings for ${service.title}?`,
      a: `Yes — overnight and extended bookings are available and among our most requested packages for ${service.title}. These offer a relaxed, unhurried, and deeply personal experience perfect for those who want to fully savour their time with an elite companion. Contact us directly for overnight rates and same-day availability.`,
    },
  ];

  const serviceFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: serviceFaqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceFaqSchema) }}
      />

      <HeroBanner title={service.title} tall />

      {/* Trust Feature Strip */}
      <section className="py-10 bg-dark-surface border-y border-dark-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🛡️", label: "100% Discreet", sub: "Privacy guaranteed" },
              { icon: "✅", label: "Verified Companions", sub: "All profiles are real" },
              { icon: "🕐", label: "24/7 Available", sub: "Round-the-clock service" },
              { icon: "🌟", label: "Premium Quality", sub: "Elite companions only" },
            ].map(({ icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="text-white text-sm font-semibold">{label}</p>
                  <p className="text-gray-500 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner location="Mumbai" />

      {/* ===== Rich SEO Section ===== */}
      <section className="relative py-24 overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_60%,rgba(212,175,55,0.04)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Block 1: Service Image + Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              <div className="absolute inset-0 rounded-2xl border border-gold/20" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-dark/80 border border-gold/30 text-gold text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {service.title}
                </span>
              </div>
            </div>
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Exclusive Service — Mumbai
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                {service.title}
                <br />
                <span className="text-gradient-gold">in Mumbai</span>
              </h2>
              <div className="h-px w-12 bg-gold mb-6" />
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Every companion in our {service.title} roster is personally vetted, thoroughly verified, and committed to delivering a premium, discreet experience. Expect five-star quality, genuine profiles, and absolute confidentiality on every booking.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  `Premium ${service.title} — handpicked and verified`,
                  "100% Privacy & Discretion Guaranteed",
                  "24/7 availability across all of Mumbai",
                  "Instant booking via Call or WhatsApp",
                  "Hotel-friendly outcall service available",
                  "Transparent pricing — zero hidden charges",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-400 text-sm">
                    <span className="w-5 h-5 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+918169808077"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-gold-dark text-black font-bold text-base px-8 py-4 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-[0_8px_30px_rgba(212,175,55,0.25)]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Book Now — +91 8169808077
                </a>
                <a
                  href="https://wa.me/918169808077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gold/40 text-gold hover:bg-gold/10 font-semibold text-base px-6 py-4 rounded-full transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Block 2: 3 Topic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                title: `About ${service.title}`,
                text: `Our ${service.title} are selected for their beauty, intelligence, and professionalism. Each companion is unique, authentic, and fully dedicated to creating an experience that exceeds your expectations.`,
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: "How to Book",
                text: "Call or WhatsApp +91 8169808077, mention your preferred category, confirm time and location — and our team will handle everything. Booking takes under 5 minutes.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "Complete Discretion",
                text: "Every booking is managed with strict confidentiality. No names stored, no records shared. Your privacy is our absolute and non-negotiable commitment — every single time.",
              },
            ].map(({ icon, title, text }) => (
              <div key={title} className="bg-dark-card border border-dark-border rounded-2xl p-7 hover:border-gold/30 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-5">
                  {icon}
                </div>
                <h3 className="font-playfair text-lg font-semibold text-white mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Block 3: Long-form Editorial */}
          <div className="bg-dark-card border border-dark-border rounded-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
                {service.title} in Mumbai — Everything You Need to Know
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
                <div className="w-2 h-2 rotate-45 bg-gold" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-7 text-gray-400 leading-relaxed">
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-white mb-3">
                    Why Choose Riya Mumbai for {service.title}?
                  </h3>
                  <p>
                    Riya Mumbai Escorts is the city&apos;s most trusted premium escort agency — known for reliability, genuine profiles, and absolute discretion. Our {service.title} category is one of our most popular, and for good reason: every companion is hand-selected, professionally trained, and dedicated to making your experience exceptional.
                  </p>
                  <p className="mt-3">
                    Unlike random listings or unverified sources, our {service.title} are screened through a strict selection process. Every profile is authentic — what you see is exactly who arrives, every time.
                  </p>
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-white mb-3">
                    The Riya Experience
                  </h3>
                  <p>
                    From the moment you reach out, our team ensures a seamless, stress-free experience. Whether it is a dinner date, a hotel visit, or a relaxed in-room encounter — every booking is tailored to your exact preferences and executed with the highest standards of professionalism.
                  </p>
                  <p className="mt-3">
                    Our companions are articulate, impeccably presented, and capable of adapting to any setting — social or private. They arrive on time, dressed elegantly, and ready to make your time truly memorable.
                  </p>
                </div>
              </div>
              <div className="space-y-7 text-gray-400 leading-relaxed">
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-white mb-3">
                    Why Clients Choose Our {service.title}
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "All companions are 100% verified and genuine",
                      "Strict privacy — no data stored or shared ever",
                      "Available across 80+ Mumbai locations",
                      "Same-day & advance bookings accepted",
                      "No hidden charges — complete transparency",
                      "Professional, courteous, punctual companions",
                      "Hotel, residence & venue outcall available",
                      "Dedicated 24/7 customer support team",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-white mb-3">
                    Safety &amp; Privacy — Our Promise
                  </h3>
                  <p>
                    Your safety and privacy are paramount. All companions follow strict safety, hygiene, and conduct protocols. We maintain a zero-tolerance policy for misconduct, and all companions are consenting, professional adults.
                  </p>
                  <p className="mt-3">
                    Your booking details and personal information are never stored, sold, or shared with any third party — ever. Book with total confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Block 4: Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-dark-border rounded-2xl overflow-hidden border border-dark-border">
            {[
              { value: "5,000+", label: "Happy Clients" },
              { value: "80+", label: "Mumbai Locations" },
              { value: "15+", label: "Service Categories" },
              { value: "24/7", label: "Always Available" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-dark-card px-6 py-8 text-center">
                <p className="font-playfair text-3xl font-bold text-gold mb-1">{value}</p>
                <p className="text-gray-500 text-sm">{label}</p>
              </div>
            ))}
          </div>

          {/* Block 5: Extended SEO Content */}
          <div className="space-y-8 text-gray-400 leading-relaxed">
            <div className="border-l-4 border-gold pl-6">
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                Mumbai&apos;s Most Trusted {service.title} Service
              </h2>
              <p>
                Over the years, Riya Mumbai Escorts has built an unmatched reputation across Mumbai for delivering quality, reliability, and discretion. Clients return to us time and again because every companion in our {service.title} category consistently delivers — no surprises, no disappointments.
              </p>
              <p className="mt-3">
                We don&apos;t simply connect you with a companion — we curate an experience. Every detail, from companion selection to arrival logistics, is managed by our dedicated team so you can focus entirely on enjoying your time.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="border-l-4 border-gold/40 pl-6">
                <h3 className="font-playfair text-xl font-semibold text-white mb-3">
                  Independent vs Agency for {service.title}
                </h3>
                <p>
                  Choosing an independent escort comes with risks — unverified identities, no accountability, and no recourse if something goes wrong. With Riya Mumbai Escorts, you benefit from full agency oversight: background checks, genuine photos, consistent availability, and a dedicated 24/7 support team.
                </p>
                <p className="mt-3">
                  The difference in quality and peace of mind is night and day. Our repeat client rate speaks for itself.
                </p>
              </div>
              <div className="border-l-4 border-gold/40 pl-6">
                <h3 className="font-playfair text-xl font-semibold text-white mb-3">
                  Available Across All of Mumbai
                </h3>
                <p>
                  Our {service.title} are available across 80+ locations — Andheri, Bandra, Juhu, Dadar, Lower Parel, Thane, Navi Mumbai, Borivali, Panvel, Kalyan, Mira Road, and many more. We cover the entire Mumbai Metropolitan Region.
                </p>
                <p className="mt-3">
                  Wherever you are staying in Mumbai, our companions can reach you. Contact us and we will confirm availability in your area within minutes.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <ServiceGrid location="Mumbai" />
      <ContactBanner location="Mumbai" />

      {/* Locations Grid */}
      <LocationGrid />

      {/* ===== Deep SEO Content Section ===== */}
      <section className="relative py-24 overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_70%_30%,rgba(212,175,55,0.03)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Intro */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              In-Depth Guide
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              The Complete Guide to{" "}
              <span className="text-gradient-gold">{service.title}</span>{" "}
              in Mumbai
            </h2>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
              <div className="w-2 h-2 rotate-45 bg-gold" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              Mumbai is India&apos;s most cosmopolitan city — a global hub of commerce, entertainment, and refined lifestyle. Within this dynamic environment, Riya Mumbai Escorts has built the city&apos;s most trusted {service.title} platform, consistently raising the standard for quality, professionalism, and absolute discretion. Whether you are a first-time client curious about what to expect, or a seasoned visitor who demands nothing but the finest, this guide covers everything — what our {service.title} offer, how the booking process works, what to expect on the day, and why thousands of Mumbai clients return to Riya time and again for this particular service.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Read on to understand exactly why Riya Mumbai Escorts is the definitive choice for {service.title} in the city, and how a single call to +91 8169808077 is all it takes to begin an experience unlike anything else available in Mumbai.
            </p>
          </div>

          {/* Understanding the Service */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-dark-card border border-dark-border rounded-2xl p-8 space-y-5 text-gray-400 leading-relaxed">
              <h3 className="font-playfair text-2xl font-bold text-white">
                What Are {service.title} in Mumbai?
              </h3>
              <p>
                {service.title} represent one of Mumbai&apos;s most sought-after premium companionship experiences. Companions in this category are selected for their unique combination of beauty, intelligence, social grace, and professional conduct. Each undergoes a rigorous vetting process before joining the Riya platform — ensuring every client encounter is genuine, safe, and truly exceptional.
              </p>
              <p>
                The breadth of {service.title} is wide — from attending a corporate dinner or social event as a polished plus-one, to providing warm, intimate companionship in the privacy of your hotel suite or apartment. Our companions are versatile, emotionally intelligent, and skilled at personalising every interaction to your specific personality and needs — making each experience feel natural, tailored, and deeply satisfying.
              </p>
              <p>
                Unlike random directories or unverified listings, our {service.title} platform is built on authenticity, consistency, and genuine care. Every profile is real. Every companion is a vetted professional. Every booking is executed with the same high standard — whether it is your first time or your fiftieth.
              </p>
              <div className="border-t border-dark-border pt-5">
                <p className="text-sm text-gold font-semibold tracking-wide mb-3">
                  Included in this category:
                </p>
                <ul className="space-y-2">
                  {[
                    "In-room hotel and apartment visits across Mumbai",
                    "Dinner date and social event companionship",
                    "Long-duration, half-day, and overnight bookings",
                    "Same-day and advance scheduling options",
                    "Custom requests and specific companion preferences",
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-2xl p-8 space-y-5 text-gray-400 leading-relaxed">
              <h3 className="font-playfair text-2xl font-bold text-white">
                Who Books {service.title} in Mumbai?
              </h3>
              <p>
                Our {service.title} clients span every background. A large proportion are business travellers staying in Mumbai&apos;s luxury hotels — executives, entrepreneurs, and international professionals who travel frequently and understand the value of a thoroughly professional companionship service that respects their time, their preferences, and most importantly, their privacy.
              </p>
              <p>
                We also serve a significant volume of Mumbai residents — local professionals, high-net-worth individuals, and those celebrating special occasions who want a companion that truly matches their lifestyle and expectations. What unites all our clients is a shared demand for quality, authenticity, and ironclad discretion.
              </p>
              <p>
                A large share of our {service.title} bookings come from loyal repeat clients who have been with us for years. The reason is consistent delivery — no bait-and-switch, no fake profiles, no last-minute cancellations. Just genuine, premium companionship in a professional, discreet package that stands entirely apart from anything else available in Mumbai.
              </p>
              <p>
                First-time clients are always warmly welcomed with zero pressure and complete respect. Our team takes time to understand your preferences, answer any questions honestly, and guide you through the process with care. Your first experience with Riya is designed to be exceptional — and it almost always leads to many more engagements to follow.
              </p>
            </div>
          </div>

          {/* Step-by-Step Journey */}
          <div>
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
                Your {service.title} Experience — Step by Step
              </h2>
              <p className="text-gray-500 text-base max-w-2xl mx-auto">
                From first contact to a memorable evening with your chosen companion — here is exactly what the process looks like.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  step: "01",
                  title: "Get in Touch",
                  text: "Call or WhatsApp +91 8169808077. Our team is available 24/7 and responds within minutes. No complicated forms — just a simple, private, and judgment-free conversation.",
                },
                {
                  step: "02",
                  title: "Share Preferences",
                  text: "Tell us what you are looking for — companion type, duration, location, and any special requests. Everything shared is treated with the strictest confidentiality.",
                },
                {
                  step: "03",
                  title: "We Confirm",
                  text: `We confirm availability from our ${service.title} roster and share the companion profile for your approval. You decide — no pressure, no commitment until you are ready.`,
                },
                {
                  step: "04",
                  title: "Companion Arrives",
                  text: "Your companion arrives at your location punctually and impeccably presented — warm, professional, and fully ready to make your experience extraordinary from the very first moment.",
                },
                {
                  step: "05",
                  title: "Enjoy & Return",
                  text: "Enjoy an unforgettable experience. Clients return because we consistently deliver exactly what was promised — with nothing left to chance, and nothing left to be desired.",
                },
              ].map(({ step, title, text }) => (
                <div key={step} className="bg-dark-card border border-dark-border rounded-2xl p-6 text-center hover:border-gold/30 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-playfair font-bold text-lg mx-auto mb-4">
                    {step}
                  </div>
                  <h3 className="font-playfair text-sm font-semibold text-white mb-2">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Mumbai's Elite Choose Riya */}
          <div>
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
                Why Mumbai&apos;s Discerning Clients Choose Riya
              </h2>
              <p className="text-gray-500 text-base max-w-2xl mx-auto">
                For {service.title} in Mumbai, Riya is the name clients trust above all others. Here is what sets us apart.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: "🔍",
                  title: "Verified Profiles Only",
                  text: `Every companion in our ${service.title} category is personally verified before listing. Photos are genuine, profiles are completely accurate. No fake listings — ever, under any circumstances.`,
                },
                {
                  icon: "🔒",
                  title: "Ironclad Privacy",
                  text: "Your name, contact information, and preferences are never stored, sold, or shared with anyone. We operate a strict no-data-retention policy. Privacy is protected from the very first call.",
                },
                {
                  icon: "⚡",
                  title: "Same-Day Availability",
                  text: "Need a companion tonight? We confirm same-day bookings within 30–60 minutes in most cases. Our large and active roster means availability is rarely an issue — even on short notice.",
                },
                {
                  icon: "🌆",
                  title: "80+ Mumbai Locations",
                  text: "We serve more than 80 locations across Greater Mumbai, Navi Mumbai, Thane, and surrounding areas. Wherever you are in the city, our companions arrive discreetly and on time.",
                },
                {
                  icon: "💎",
                  title: "Five-Star Quality",
                  text: `Our ${service.title} are not only physically stunning — they are articulate, polished, and impeccable in every interaction. They fit seamlessly into any environment, social or private.`,
                },
                {
                  icon: "📞",
                  title: "24/7 Dedicated Support",
                  text: "Our booking team is available around the clock, every day of the year. Late-night queries, last-minute requests, preference changes — we handle everything promptly and without fuss.",
                },
              ].map(({ icon, title, text }) => (
                <div key={title} className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-gold/30 transition-colors duration-300">
                  <div className="text-3xl mb-4">{icon}</div>
                  <h3 className="font-playfair text-lg font-semibold text-white mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Tips & Riya Commitment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border-l-4 border-gold pl-6 text-gray-400 leading-relaxed space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-white">
                Tips for First-Time Clients
              </h2>
              <p>
                If this is your first time booking {service.title} in Mumbai, here is how to make the experience as seamless as possible. Be direct about your preferences when you get in touch — the more clearly we understand what you are looking for, the better matched your companion will be. There is zero judgment at Riya, only a genuine desire to help you have the best possible time.
              </p>
              <p>
                Have your preferred venue confirmed before finalising the booking. Whether it is your hotel room, a private apartment, or another location — confirm the details upfront so the companion can arrive without any complications or delays. Our team will also advise on Mumbai&apos;s most discreet, client-friendly hotels if you need guidance on where to book.
              </p>
              <p>
                Finally, relax. Our companions are skilled professionals and exceptional conversationalists who put every client at ease from the moment they arrive. Whether you are nervous, tired after a long working day, or simply want a natural and unhurried connection — they will make the entire experience comfortable, warm, and genuinely memorable from start to finish.
              </p>
            </div>
            <div className="border-l-4 border-gold/40 pl-6 text-gray-400 leading-relaxed space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-white">
                Our Commitment to {service.title}
              </h2>
              <p>
                At Riya Mumbai Escorts, our commitment to {service.title} extends far beyond simply providing a companion. We are in the business of crafting complete experiences — curated, personalised, and delivered with the highest standards of quality and professionalism that Mumbai&apos;s most demanding clients have come to expect and strongly rely upon.
              </p>
              <p>
                We continuously update and expand our {service.title} roster to ensure variety, freshness, and the widest possible choice at all times. Every companion is regularly reviewed, continuously trained in client interaction and social etiquette, and held to a strict professional code of conduct. Any companion who fails to consistently meet our standard is immediately removed from the platform — no exceptions made.
              </p>
              <p>
                This unwavering commitment to excellence is precisely why repeat clients account for the lion&apos;s share of our booking volumes. When you find a service that genuinely delivers on everything it promises — beautifully, consistently, and with complete discretion — you come back. And we will always be here when you do. Call or WhatsApp +91 8169808077 today to begin your extraordinary experience with Mumbai&apos;s finest {service.title}.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="relative py-28 overflow-hidden bg-dark-surface">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(232,25,91,0.10)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(212,175,55,0.06)_0%,transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-10 left-10 w-24 h-24 border-l border-t border-gold/10 rounded-tl-3xl" />
        <div className="absolute top-10 right-10 w-24 h-24 border-r border-t border-gold/10 rounded-tr-3xl" />
        <div className="absolute bottom-10 left-10 w-24 h-24 border-l border-b border-gold/10 rounded-bl-3xl" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-r border-b border-gold/10 rounded-br-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Common Questions</span>
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
              Everything you need to know before booking your {service.title} in Mumbai.
            </p>
          </div>

          {/* Two-column FAQ grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {serviceFaqs.map((item, i) => (
              <details
                key={i}
                className="group relative rounded-2xl bg-dark-card border border-dark-border hover:border-gold/40 open:border-gold/40 transition-all duration-400 overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gold/0 to-transparent group-open:via-gold/70 transition-all duration-500" />
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-open:via-gold/50 transition-all duration-500" />
                <summary className="flex items-start gap-4 p-6 cursor-pointer list-none select-none">
                  <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-open:bg-gold/20 group-open:border-gold/50 transition-all duration-300">
                    {item.icon}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-gold/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-1 group-open:text-gold/70 transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="block font-playfair text-[15px] font-semibold text-white group-open:text-gold leading-snug transition-colors duration-300">
                      {item.q}
                    </span>
                  </span>
                  <span className="flex-shrink-0 mt-1 w-7 h-7 rounded-full border border-dark-border flex items-center justify-center text-gray-600 group-open:border-gold/40 group-open:text-gold transition-all duration-300 group-open:rotate-180">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
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
                  Still have questions about {service.title}?
                </p>
                <p className="text-gray-500 text-sm">
                  Our team replies instantly — call or message us on WhatsApp right now.
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href="tel:+918169808077"
                  className="inline-flex items-center gap-2 border border-gold/40 text-gold hover:bg-gold/10 font-semibold text-sm px-5 py-3 rounded-full transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </a>
                <a
                  href="https://wa.me/918169808077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold text-sm px-5 py-3 rounded-full transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactBanner location="Mumbai" />
    </>
  );
}
