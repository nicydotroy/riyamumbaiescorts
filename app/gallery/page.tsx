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
      <section className="ds page_portfolio section_padding_100">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="isotope_container isotope row masonry-layout columns_margin_top_0 columns_margin_bottom_30">
                {galleryItems.map((item) => (
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
                            Escorts in {item.name}
                          </Link>
                        </h3>
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
