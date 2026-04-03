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
        <section className="ds section_padding_top_130 section_padding_bottom_130">
          <div className="container">
            <hr />
            <div className="row">
              <div className="col-sm-12">
                <h2 className="text-center">Riya Mumbai Escorts in {name}</h2>
                <p>
                  {name} offers endless opportunities for both business and
                  pleasure. Amidst the bustling streets and luxurious hotels,
                  one can find the finest escort services, and Riya stands as
                  one of the premier escorts in {name}. Known for her natural
                  beauty, elegance, and unparalleled charm, Riya offers a unique
                  companionship experience that caters to individuals seeking
                  luxury, relaxation, and unforgettable moments.
                </p>
                <h3>Why Choose Riya Escorts in {name}?</h3>
                <p>
                  When it comes to high-class escort services in {name}, Riya is
                  a name that resonates with sophistication and exclusivity. She
                  is known for her breathtaking beauty, but it is her engaging
                  personality, confidence, and intelligence that truly set her
                  apart. With Riya by your side, you can enjoy the company of
                  someone who not only understands your desires but also knows
                  how to create an atmosphere of warmth, comfort, and
                  connection.
                </p>
                <h3>Experience the Best in {name} Escort Services</h3>
                <p>
                  Booking an escort is not just about hiring someone for
                  companionship; it&apos;s about creating an experience that
                  enhances your time in {name}. Riya offers a personalized
                  experience designed to meet your expectations.
                </p>
                <h3>
                  Book Riya for Exclusive and Discreet Escorts in {name}
                </h3>
                <p>
                  One of the key aspects that clients appreciate about Riya is
                  her professionalism and discretion. Whether you are a
                  first-time client or a returning one, Riya ensures that your
                  privacy is respected at all times.
                </p>
                <h3>Book Your Luxurious Experience with Riya Today</h3>
                <p>
                  Visit{" "}
                  <Link
                    href={`/${LOCATION_PREFIX}${locSlug}`}
                    title={`Book Riya Escorts in ${name}`}
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
      <section className="ds section_padding_top_130 section_padding_bottom_130">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8 col-md-offset-2 text-center">
              <h2>{service.title}</h2>
              <p className="lead">{service.description}</p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-sm-12 col-md-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.image}
                alt={service.alt}
                className="img-responsive"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <h3>About Our {service.title} Service</h3>
              <p>
                Riya Mumbai Escorts offers an exclusive and discreet{" "}
                {service.title.toLowerCase()} experience, tailored for the
                discerning individual. Our models are handpicked for their
                elegance, charm, and professionalism. Whether you are looking
                for a companion for a social event, dinner, or a private
                encounter, we ensure complete satisfaction and confidentiality.
              </p>
              <h3>Why Choose Riya {service.title}?</h3>
              <ul>
                <li>100% Privacy &amp; Discretion Guaranteed</li>
                <li>Top-tier, professionally trained companions</li>
                <li>24/7 availability across Mumbai and suburbs</li>
                <li>Easy booking via call or WhatsApp</li>
                <li>Flexible packages to suit your needs</li>
              </ul>
              <a
                href="tel:+918169808077"
                className="btn btn-primary"
                style={{ marginTop: "20px" }}
              >
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
