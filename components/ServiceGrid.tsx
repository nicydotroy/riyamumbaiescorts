import Link from "next/link";
import Image from "next/image";
import { serviceTypes } from "@/data/services";

interface ServiceGridProps {
  location?: string;
}

export default function ServiceGrid({ location = "Mumbai" }: ServiceGridProps) {
  return (
    <section className="ds page_portfolio section_padding_100">
      <div className="container">
        <h3 className="text-center">Types of Escorts Available</h3>
        <p>
          Explore the diverse range of escorts available in {location}. Each escort
          brings their unique charm and personality, ensuring you find the perfect
          match for your desires.{" "}
          <Link href="/" title="Mumbai Escorts">
            Discover more about Mumbai Escorts
          </Link>{" "}
          on our homepage.
        </p>
        <div className="row">
          <div className="col-sm-12">
            <div className="isotope_container isotope row masonry-layout columns_margin_top_0 columns_margin_bottom_30">
              {serviceTypes.map((service) => (
                <div
                  key={service.slug}
                  className={`isotope-item col-lg-4 col-md-6 col-sm-12 ${service.category}`}
                >
                  <div className="vertical-item content-padding big-padding gallery-extended-item with_background bottom_color_border text-center">
                    <div className="item-media">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        width={400}
                        height={300}
                      />
                      <div className="media-links">
                        <Link
                          className="abs-link"
                          title={service.title}
                          href={`/${service.slug}`}
                        ></Link>
                      </div>
                    </div>
                    <div className="item-content">
                      <h3 className="item-title topmargin_0">
                        <Link href={`/${service.slug}`}>{service.title}</Link>
                      </h3>
                      <p>
                        {service.description}{" "}
                        <Link href="/" title={`Escorts in ${location}`}>
                          Escorts in {location}
                        </Link>{" "}
                        for more options.
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
  );
}
