import Link from "next/link";

export default function Footer() {
  return (
    <footer className="page_footer ds section_padding_top_100 section_padding_bottom_65">
      <div className="container">
        <div className="row">
          {/* Female Escorts + Partner Websites */}
          <div className="col-md-3 col-sm-6">
            <div className="widget widget_nav_menu">
              <h3 className="widget-title">
                Female <span className="highlight regular">Escorts</span>
              </h3>
              <ul className="menu greylinks fontsize_16">
                <li><Link href="/mumbai-it-girls-escorts">Mumbai IT Girls</Link></li>
                <li><Link href="/busty-college-girls-escorts-mumbai">Busty College Girls</Link></li>
                <li><Link href="/gfe-experts-girls-escorts-mumbai">Girlfriend Escorts</Link></li>
                <li><Link href="/housewife-escorts-mumbai">Lovely Housewives</Link></li>
                <li><Link href="/affordable-call-girls-in-mumbai">Call Girls in Mumbai</Link></li>
                <li><Link href="/bdsm-expert-escorts-mumbai">BDSM Escorts</Link></li>
                <li><Link href="/punjabi-girls-escorts-mumbai">Punjabi Escorts</Link></li>
                <li><Link href="/hj-bj-experts-girls-escorts-mumbai">HJ BJ Escorts</Link></li>
                <li><Link href="/role-play-experts-girls-escorts-mumbai">Role Play Escorts</Link></li>
                <li><Link href="/south-indian-escorts-mumbai">South Indian Escorts</Link></li>
                <li><Link href="/unsatisfied-female-escorts-mumbai">Unsatisfied Female</Link></li>
                <li><Link href="/marathi-female-escorts-mumbai">Marathi Escorts</Link></li>
                <li><Link href="/gujarati-female-escorts-mumbai">Gujarati Escorts</Link></li>
                <li><Link href="/russian-girls-escorts-mumbai">Russian Escorts in Mumbai</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
              </ul>
              <h3 className="widget-title">
                Partner <span className="highlight regular">Website</span>
              </h3>
              <ul className="menu greylinks fontsize_16">
                <li><Link href="/">Mumbai Escorts</Link></li>
                <li><Link href="/">Escorts in Mumbai</Link></li>
                <li><Link href="/">Call Girls in Mumbai</Link></li>
                <li><Link href="/">Mumbai Call Girls</Link></li>
                <li><Link href="/">Mumbai Escorts Service</Link></li>
                <li><a href="https://hotnatasha.in/" target="_blank" rel="noopener noreferrer">Escorts in Pune</a></li>
                <li><a href="https://trykartehai.com/" target="_blank" rel="noopener noreferrer">Sex Toys In India</a></li>
                <li><Link href="/">Escorts in Mumbai</Link></li>
                <li><Link href="/">Call Girls In Mumbai</Link></li>
                <li><Link href="/">Escort In Mumbai</Link></li>
              </ul>
            </div>
          </div>

          {/* Our Location - Part 1 */}
          <div className="col-md-3 col-sm-6">
            <div className="widget widget_nav_menu">
              <h3 className="widget-title">
                Our <span className="highlight regular">Location</span>
              </h3>
              <ul className="menu greylinks fontsize_16">
                {[
                  ["airoli", "Airoli"],
                  ["ambernath", "Ambernath"],
                  ["ambivali", "Ambivali"],
                  ["andheri", "Andheri"],
                  ["asangaon", "Asangaon"],
                  ["badlapur", "Badlapur"],
                  ["bandra", "Bandra"],
                  ["bhandup", "Bhandup"],
                  ["bhayander", "Bhayander"],
                  ["boisar", "Boisar"],
                  ["borivali", "Borivali"],
                  ["byculla", "Byculla"],
                  ["cbd-belapur", "CBD Belapur"],
                  ["churchgate", "Churchgate"],
                  ["cst", "CST"],
                  ["dadar", "Dadar"],
                  ["dahisar", "Dahisar"],
                  ["diva", "Diva"],
                  ["dombivali", "Dombivali"],
                  ["ghansoli", "Ghansoli"],
                  ["ghatkopar", "Ghatkopar"],
                  ["goregaon", "Goregaon"],
                  ["govandi", "Govandi"],
                  ["grantroad", "Grantroad"],
                  ["jogeshwari", "Jogeshwari"],
                  ["juhu", "Juhu"],
                  ["juinagar", "Juinagar"],
                ].map(([slug, name]) => (
                  <li key={slug}>
                    <Link href={`/affordable-escorts-in-${slug}`}>
                      Female Escorts in {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Location - Part 2 */}
          <div className="col-md-3 col-sm-6">
            <div className="widget widget_categories">
              <h3 className="widget-title">
                Our <span className="highlight regular">Location</span>
              </h3>
              <ul className="greylinks">
                {[
                  ["kalamboli", "Kalamboli"],
                  ["kalwa", "Kalwa"],
                  ["kalyan", "Kalyan"],
                  ["kamothe", "Kamothe"],
                  ["kandivali", "Kandivali"],
                  ["kanjurmarg", "Kanjurmarg"],
                  ["karjat", "Karjat"],
                  ["kasara", "Kasara"],
                  ["khar", "Khar"],
                  ["kharghar", "Kharghar"],
                  ["khopoli", "Khopoli"],
                  ["kopar-khairane", "Kopar Khairane"],
                  ["kurla", "Kurla"],
                  ["lokhandwala", "Lokhandwala"],
                  ["lower-parel", "Lower Parel"],
                  ["mahalaxmi", "Mahalaxmi"],
                  ["malad", "Malad"],
                  ["matunga", "Matunga"],
                  ["miraroad", "Miraroad"],
                  ["mulund", "Mulund"],
                  ["mumbai-airports", "Mumbai Airports"],
                  ["mumbai-central", "Mumbai Central"],
                  ["mumbra", "Mumbra"],
                  ["nahur", "Nahur"],
                  ["naigaon", "Naigaon"],
                  ["nalasopara", "Nalasopara"],
                  ["nerul", "Nerul"],
                ].map(([slug, name]) => (
                  <li key={slug}>
                    <Link href={`/affordable-escorts-in-${slug}`}>
                      {slug === "kopar-khairane"
                        ? "Escorts in Kopar Khairane"
                        : slug === "lower-parel"
                        ? "Escorts in Lower Parel"
                        : slug === "mumbai-airports"
                        ? "Escorts in Mumbai Airports"
                        : slug === "mumbai-central"
                        ? "Escorts in Mumbai Central"
                        : `Female Escorts in ${name}`}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Location - Part 3 */}
          <div className="col-md-3 col-sm-6">
            <div className="widget widget_categories">
              <h3 className="widget-title">
                Our <span className="highlight regular">Location</span>
              </h3>
              <ul className="greylinks">
                {[
                  ["neral", "Neral"],
                  ["palghar", "Palghar"],
                  ["panvel", "Panvel"],
                  ["parel", "Parel"],
                  ["powai-hiranandani", "Powai Hiranandani"],
                  ["prabhadevi", "Prabhadevi"],
                  ["rabale", "Rabale"],
                  ["sakinaka", "Sakinaka"],
                  ["sanpada", "Sanpada"],
                  ["santacruz", "Santacruz"],
                  ["saphale", "Saphale"],
                  ["seawood", "Seawood"],
                  ["sion", "Sion"],
                  ["thakurli", "Thakurli"],
                  ["thane", "Thane"],
                  ["titwala", "Titwala"],
                  ["turbhe", "Turbhe"],
                  ["ulhasnagar", "Ulhasnagar"],
                  ["ulwe", "Ulwe"],
                  ["varsova", "Varsova"],
                  ["vasai", "Vasai"],
                  ["vashi", "Vashi"],
                  ["vidyavihar", "Vidyavihar"],
                  ["vikhroli", "Vikhroli"],
                  ["vileparle", "Vileparle"],
                  ["virar", "Virar"],
                  ["wadala", "Wadala"],
                ].map(([slug, name]) => (
                  <li key={slug}>
                    <Link href={`/affordable-escorts-in-${slug}`}>
                      {slug === "powai-hiranandani"
                        ? "Escorts in Powai Hiranandani"
                        : `Female Escorts in ${name}`}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
