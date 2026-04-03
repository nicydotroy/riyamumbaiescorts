import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";

export const metadata: Metadata = {
  title: "Contact Riya Mumbai Escorts | Book Premium Escort Services",
  description:
    "Contact Riya Escorts in Mumbai for premium and discreet escort services. Available 24/7. Call or email us to book your exclusive experience.",
  alternates: { canonical: "https://riyamumbaiescorts.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <HeroBanner title="Contact Riya Mumbai Escorts" />
      <main>
        <section className="ds section_padding_top_75 section_padding_bottom_100">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 to_animate" data-animation="pullDown">
                <div className="teaser text-center">
                  <div className="teaser_icon highlight2 size_small">
                    <i className="rt-icon2-phone5"></i>
                  </div>
                  <p>
                    <span className="grey">Phone:</span>{" "}
                    <a href="tel:+918169808077">+91 8169808077</a>
                  </p>
                </div>
              </div>
              <div className="col-sm-4 to_animate" data-animation="pullDown">
                <div className="teaser text-center">
                  <div className="teaser_icon highlight2 size_small">
                    <i className="rt-icon2-location2"></i>
                  </div>
                  <p>
                    Lokhandwala
                    <br />
                    Andheri East,
                    <br />
                    Mumbai, Maharashtra
                  </p>
                </div>
              </div>
              <div className="col-sm-4 to_animate" data-animation="pullDown">
                <div className="teaser text-center">
                  <div className="teaser_icon highlight2 size_small">
                    <i className="rt-icon2-world"></i>
                  </div>
                  <p>sanjanadotsingh@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="row topmargin_60">
              <div className="col-sm-12">
                <form
                  className="contact-form cs main_color2 parallax columns_padding_5"
                  method="post"
                  action="./"
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="contact-form-name">
                        <label htmlFor="name">
                          Full Name <span className="required">*</span>
                        </label>
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <input
                          type="text"
                          aria-required="true"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Full Name"
                        />
                      </p>
                      <p className="contact-form-email">
                        <label htmlFor="email">
                          Email address<span className="required">*</span>
                        </label>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <input
                          type="email"
                          aria-required="true"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </p>
                      <p className="contact-form-subject">
                        <label htmlFor="subject">
                          Subject<span className="required">*</span>
                        </label>
                        <i className="fa fa-comment" aria-hidden="true"></i>
                        <input
                          type="text"
                          aria-required="true"
                          name="subject"
                          id="subject"
                          className="form-control"
                          placeholder="Subject"
                        />
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <p className="contact-form-message">
                        <label htmlFor="message">Message</label>
                        <i
                          className="fa fa-folder-open"
                          aria-hidden="true"
                        ></i>
                        <textarea
                          aria-required="true"
                          rows={6}
                          name="message"
                          id="message"
                          className="form-control"
                          placeholder="Message"
                        ></textarea>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <p className="contact-form-submit text-center topmargin_30">
                        <button
                          type="submit"
                          id="contact_form_submit"
                          name="contact_submit"
                          className="theme_button"
                        >
                          Send Message
                        </button>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
