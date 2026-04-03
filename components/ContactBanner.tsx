interface ContactBannerProps {
  location?: string;
}

export default function ContactBanner({ location = "Mumbai" }: ContactBannerProps) {
  return (
    <section
      id="contacts"
      className="cs background_cover page_banner section_padding_top_65 section_padding_bottom_65"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <span className="small-text main_bg_color2">
              Premium Escorts in {location} – Riya Mumbai Escorts
            </span>
            <p className="big playfair topmargin_10">
              <a href="tel:+918169808077" title={`Contact Riya ${location} Escorts`}>
                Call Now: +91 8169808077
              </a>
            </p>
            <p>
              For exclusive and professional escort services in {location}, contact
              Riya today for a memorable experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
