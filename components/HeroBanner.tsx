interface HeroBannerProps {
  title: string;
}

export default function HeroBanner({ title }: HeroBannerProps) {
  return (
    <section
      className="page_breadcrumbs ds parallax section_padding_75"
      style={{
        backgroundImage: "url('/images/escorts-in-mumbai-banner.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
