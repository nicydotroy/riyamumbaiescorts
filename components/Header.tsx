import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div id="canvas">
      <div id="box_wrapper">
        {/* Top Logo Bar */}
        <section className="page_toplogo table_section table_section_md ds ms">
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center text-md-left">
                <Link href="/" className="logo top_logo">
                  <Image
                    src="/images/logo.webp"
                    alt="Riya Escorts In Mumbai - Trusted Service"
                    width={200}
                    height={60}
                    priority
                  />
                </Link>
                <span className="toggle_menu">
                  <span></span>
                </span>
              </div>
              <div className="col-md-8 text-center text-md-right">
                <div className="media small-teaser">
                  <div className="media-left">
                    <div className="teaser_icon highlight fontsize_18">
                      <i className="fa fa-phone"></i>
                    </div>
                  </div>
                  <div className="media-body">
                    <h4>Phone:</h4>
                    <p>
                      <a href="tel:+918169808077">+91 8169808077</a>
                    </p>
                  </div>
                </div>
                <div className="media small-teaser">
                  <div className="media-left">
                    <div className="teaser_icon highlight fontsize_18">
                      <i className="fa fa-envelope"></i>
                    </div>
                  </div>
                  <div className="media-body">
                    <h4>Email:</h4>
                    <p>
                      <a href="mailto:sanjanadotsingh@gmail.com">
                        sanjanadotsingh@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <header className="page_header header_darkgrey bordered_items">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <nav className="mainmenu_wrapper">
                  <ul className="mainmenu nav sf-menu">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/affordable-escorts-in-navi-mumbai">
                        Navi Mumbai Escorts
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link href="/location">Location</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
