import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import ContactBanner from "@/components/ContactBanner";
import ServiceGrid from "@/components/ServiceGrid";

export const metadata: Metadata = {
  title: "Escorts Services by Riya Mumbai Escorts | Luxury 24/7 Availability",
  description:
    "Explore premium escort services offered by Riya Escorts in Mumbai. Experience luxury, discretion, and sophistication with our elite 24/7 services. Call now for bookings!",
  alternates: { canonical: "https://riyamumbaiescorts.com/services" },
  openGraph: {
    title: "Escorts Services by Riya Mumbai Escorts | Premium 24/7 Service",
    description:
      "Discover exclusive escort services by Riya Escorts in Mumbai. Tailored for sophistication and privacy, available round-the-clock.",
    url: "https://riyamumbaiescorts.com/services",
    siteName: "Riya Escorts",
    images: [{ url: "https://riyamumbaiescorts.com/images/og-services-image.webp" }],
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <HeroBanner title="Riya Mumbai Escorts Services" />
      <ContactBanner location="Mumbai" />
      <ServiceGrid location="Mumbai" />
    </>
  );
}
