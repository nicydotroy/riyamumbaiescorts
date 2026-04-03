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

export default function HomePage() {
  return (
    <>
      <HeroBanner title="Escorts In Mumbai" />
      <ContactBanner location="Mumbai" />
      <ServiceGrid location="Mumbai" />
      <ContactBanner location="Mumbai" />
      <section className="ds section_padding_top_130 section_padding_bottom_130">
        <div className="container">
          <hr />
          <div className="row">
            <div className="col-sm-12">
              <h2 className="text-center">Riya Mumbai Escorts in Mumbai</h2>
              <p>
                Mumbai, often referred to as the city of dreams, offers endless
                opportunities for both business and pleasure. Amidst the bustling
                streets and luxurious hotels, one can find the finest escort
                services, and Riya stands as one of the premier escorts in the city.
              </p>
              <h3>Why Choose Riya Escorts in Mumbai?</h3>
              <p>
                When it comes to high-class escort services in Mumbai, Riya is a
                name that resonates with sophistication and exclusivity. She is
                known for her breathtaking beauty, but it is her engaging
                personality, confidence, and intelligence that truly set her apart.
              </p>
              <h3>Experience the Best in Mumbai Escort Services</h3>
              <p>
                Booking an escort is not just about hiring someone for
                companionship; it&apos;s about creating an experience that enhances
                your time in the city. Riya offers a personalized experience
                designed to meet your expectations.
              </p>
              <h3>Book Riya for Exclusive and Discreet Escorts in Mumbai</h3>
              <p>
                One of the key aspects that clients appreciate about Riya is her
                professionalism and discretion. Whether you are a first-time client
                or a returning one, Riya ensures that your privacy is respected at
                all times.
              </p>
              <h3>What to Expect from Riya Escorts in Mumbai</h3>
              <p>
                Riya provides an exclusive, luxurious, and unforgettable experience
                for all of her clients. She is an expert in making her clients feel
                at ease, offering companionship that goes beyond just the physical
                aspects.
              </p>
              <h3>Book Your Luxurious Experience with Riya Today</h3>
              <p>
                If you&apos;re ready to elevate your time in Mumbai, Riya is here to
                provide you with the finest escort experience the city has to offer.
                Visit{" "}
                <Link href="/" title="Book Riya Escorts in Mumbai">
                  Riya Escorts in Mumbai
                </Link>{" "}
                to book your luxurious companion and make your stay in Mumbai truly
                unforgettable!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
