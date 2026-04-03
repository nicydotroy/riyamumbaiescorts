import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  image: string;
  alt: string;
  href: string;
  title: string;
  description: React.ReactNode;
  category?: string;
}

export default function ServiceCard({
  image,
  alt,
  href,
  title,
  description,
  category = "fashion",
}: ServiceCardProps) {
  return (
    <div className={`isotope-item col-lg-4 col-md-6 col-sm-12 ${category}`}>
      <div className="vertical-item content-padding big-padding gallery-extended-item with_background bottom_color_border text-center">
        <div className="item-media">
          <Image src={image} alt={alt} width={400} height={300} />
          <div className="media-links">
            <Link className="abs-link" title={title} href={href}></Link>
          </div>
        </div>
        <div className="item-content">
          <h3 className="item-title topmargin_0">
            <Link href={href}>{title}</Link>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
