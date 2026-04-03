import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import ContactBanner from "@/components/ContactBanner";
import ServiceGrid from "@/components/ServiceGrid";
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
    const { name, slug: locSlug } = route.location;
    return (
      <>
        <HeroBanner title={`Escorts In ${name}`} />
        <ContactBanner location={name} />
        <ServiceGrid location={name} />
        <ContactBanner location={name} />
        <section className="py-20 bg-dark">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* SEO content */}
            <div className="bg-dark-card border border-dark-border rounded-2xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
                  Riya Mumbai Escorts in {name}
                </h2>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
                  <div className="w-2 h-2 rotate-45 bg-gold" />
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
                </div>
              </div>
              <div className="space-y-6 text-gray-400 text-sm leading-relaxed max-w-3xl mx-auto">
                <p>
                  {name} offers endless opportunities for both business and
                  pleasure. Amidst the bustling streets and luxurious hotels,
                  one can find the finest escort services, and Riya stands as
                  one of the premier escorts in {name}. Known for her natural
                  beauty, elegance, and unparalleled charm, Riya offers a unique
                  companionship experience that caters to individuals seeking
                  luxury, relaxation, and unforgettable moments.
                </p>
                <h3 className="font-playfair text-xl font-semibold text-white">
                  Why Choose Riya Escorts in {name}?
                </h3>
                <p>
                  When it comes to high-class escort services in {name}, Riya is
                  a name that resonates with sophistication and exclusivity.
                  With Riya by your side, you can enjoy the company of someone
                  who not only understands your desires but also knows how to
                  create an atmosphere of warmth, comfort, and connection.
                </p>
                <h3 className="font-playfair text-xl font-semibold text-white">
                  Experience the Best in {name} Escort Services
                </h3>
                <p>
                  Booking an escort is not just about hiring someone for
                  companionship; it&apos;s about creating an experience that
                  enhances your time in {name}. Riya offers a personalized
                  experience designed to meet your expectations.
                </p>
                <h3 className="font-playfair text-xl font-semibold text-white">
                  Book Your Luxurious Experience with Riya Today
                </h3>
                <p>
                  Visit{" "}
                  <Link
                    href={`/${LOCATION_PREFIX}${locSlug}`}
                    title={`Book Riya Escorts in ${name}`}
                    className="text-gold hover:text-gold-light transition-colors"
                  >
                    Riya Escorts in {name}
                  </Link>{" "}
                  to book your luxurious companion and make your stay in {name}{" "}
                  truly unforgettable!
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // service page
  const { service } = route;
  return (
    <>
      <HeroBanner title={service.title} />
      <ContactBanner location="Mumbai" />
      <section className="py-20 bg-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.image}
                alt={service.alt}
                className="w-full object-cover rounded-2xl"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute inset-0 rounded-2xl border border-gold/20" />
            </div>

            {/* Content */}
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Exclusive Service
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                {service.title}
              </h2>
              <div className="h-px w-12 bg-gold mb-6" />
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {service.description}
              </p>

              <h3 className="font-playfair text-xl font-semibold text-white mb-4">
                Why Choose Our {service.title}?
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "100% Privacy & Discretion Guaranteed",
                  "Top-tier, professionally trained companions",
                  "24/7 availability across Mumbai and suburbs",
                  "Easy booking via call or WhatsApp",
                  "Flexible packages to suit your needs",
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
                className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-gold-dark text-black font-bold text-base px-8 py-4 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-[0_8px_30px_rgba(255,0,204,0.25)]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Book Now — +91 8169808077
              </a>
            </div>
          </div>
        </div>
      </section>
      <ServiceGrid location="Mumbai" />
      <ContactBanner location="Mumbai" />
    </>
  );
}
