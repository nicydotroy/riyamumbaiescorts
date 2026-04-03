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
      <section className="ds page_portfolio section_padding_100">
        <div className="container">
          <h3 className="text-center">Choose Your Location</h3>
          <div className="row">
            <div className="col-sm-12">
              <div className="isotope_container isotope row masonry-layout columns_margin_top_0 columns_margin_bottom_30">
                {locationItems.map((item) => (
                  <div
                    key={item.slug}
                    className="isotope-item col-lg-4 col-md-6 col-sm-12 fashion"
                  >
                    <div className="vertical-item content-padding big-padding gallery-extended-item with_background bottom_color_border text-center">
                      <div className="item-media">
                        <Image
                          src={item.img}
                          alt={`Escorts in ${item.name}`}
                          width={400}
                          height={300}
                        />
                        <div className="media-links">
                          <Link
                            className="abs-link"
                            title={`Escorts in ${item.name}`}
                            href={`/affordable-escorts-in-${item.slug}`}
                          ></Link>
                        </div>
                      </div>
                      <div className="item-content">
                        <h3 className="item-title topmargin_0">
                          <Link href={`/affordable-escorts-in-${item.slug}`}>
                            Escorts Service in {item.name}
                          </Link>
                        </h3>
                        <p>
                          Experience luxury and elegance with our premium{" "}
                          <Link href={`/affordable-escorts-in-${item.slug}`}>
                            Escorts in {item.name}
                          </Link>
                          . Our escorts offer an unforgettable experience. For
                          more options, check our{" "}
                          <Link href="/">Escorts in Mumbai</Link> page.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
