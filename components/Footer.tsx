import Link from "next/link";

const femaleEscorts = [
  ["/mumbai-it-girls-escorts", "Mumbai IT Girls"],
  ["/busty-college-girls-escorts-mumbai", "Busty College Girls"],
  ["/gfe-experts-girls-escorts-mumbai", "Girlfriend Escorts"],
  ["/housewife-escorts-mumbai", "Lovely Housewives"],
  ["/affordable-call-girls-in-mumbai", "Call Girls in Mumbai"],
  ["/bdsm-expert-escorts-mumbai", "BDSM Escorts"],
  ["/punjabi-girls-escorts-mumbai", "Punjabi Escorts"],
  ["/hj-bj-experts-girls-escorts-mumbai", "HJ BJ Escorts"],
  ["/role-play-experts-girls-escorts-mumbai", "Role Play Escorts"],
  ["/south-indian-escorts-mumbai", "South Indian Escorts"],
  ["/unsatisfied-female-escorts-mumbai", "Unsatisfied Female"],
  ["/marathi-female-escorts-mumbai", "Marathi Escorts"],
  ["/gujarati-female-escorts-mumbai", "Gujarati Escorts"],
  ["/russian-girls-escorts-mumbai", "Russian Escorts"],
  ["/gallery", "Gallery"],
];

const locationCol1 = [
  ["airoli", "Airoli"], ["ambernath", "Ambernath"], ["ambivali", "Ambivali"],
  ["andheri", "Andheri"], ["asangaon", "Asangaon"], ["badlapur", "Badlapur"],
  ["bandra", "Bandra"], ["bhandup", "Bhandup"], ["bhayander", "Bhayander"],
  ["boisar", "Boisar"], ["borivali", "Borivali"], ["byculla", "Byculla"],
  ["cbd-belapur", "CBD Belapur"], ["churchgate", "Churchgate"], ["cst", "CST"],
  ["dadar", "Dadar"], ["dahisar", "Dahisar"], ["diva", "Diva"],
  ["dombivali", "Dombivali"], ["ghansoli", "Ghansoli"], ["ghatkopar", "Ghatkopar"],
  ["goregaon", "Goregaon"], ["govandi", "Govandi"], ["grantroad", "Grantroad"],
  ["jogeshwari", "Jogeshwari"], ["juhu", "Juhu"], ["juinagar", "Juinagar"],
];

const locationCol2 = [
  ["kalamboli", "Kalamboli"], ["kalwa", "Kalwa"], ["kalyan", "Kalyan"],
  ["kamothe", "Kamothe"], ["kandivali", "Kandivali"], ["kanjurmarg", "Kanjurmarg"],
  ["karjat", "Karjat"], ["kasara", "Kasara"], ["khar", "Khar"],
  ["kharghar", "Kharghar"], ["khopoli", "Khopoli"], ["kopar-khairane", "Kopar Khairane"],
  ["kurla", "Kurla"], ["lokhandwala", "Lokhandwala"], ["lower-parel", "Lower Parel"],
  ["mahalaxmi", "Mahalaxmi"], ["malad", "Malad"], ["matunga", "Matunga"],
  ["miraroad", "Mira Road"], ["mulund", "Mulund"], ["mumbai-airports", "Mumbai Airports"],
  ["mumbai-central", "Mumbai Central"], ["mumbra", "Mumbra"], ["nahur", "Nahur"],
  ["naigaon", "Naigaon"], ["nalasopara", "Nalasopara"], ["nerul", "Nerul"],
];

const locationCol3 = [
  ["neral", "Neral"], ["palghar", "Palghar"], ["panvel", "Panvel"],
  ["parel", "Parel"], ["powai-hiranandani", "Powai"], ["prabhadevi", "Prabhadevi"],
  ["rabale", "Rabale"], ["sakinaka", "Sakinaka"], ["sanpada", "Sanpada"],
  ["santacruz", "Santacruz"], ["saphale", "Saphale"], ["seawood", "Seawood"],
  ["sion", "Sion"], ["thakurli", "Thakurli"], ["thane", "Thane"],
  ["titwala", "Titwala"], ["turbhe", "Turbhe"], ["ulhasnagar", "Ulhasnagar"],
  ["ulwe", "Ulwe"], ["varsova", "Varsova"], ["vasai", "Vasai"],
  ["vashi", "Vashi"], ["vidyavihar", "Vidyavihar"], ["vikhroli", "Vikhroli"],
  ["vileparle", "Vileparle"], ["virar", "Virar"], ["wadala", "Wadala"],
];

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Brand row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 pb-12 border-b border-dark-border">
          <div>
            <h2 className="font-playfair text-2xl font-bold text-white mb-2">
              Riya <span className="text-gold">Mumbai Escorts</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xs">
              Mumbai&apos;s premier escort service. Discreet, elegant, unforgettable.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+918169808077"
              className="flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-black font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +91 8169808077
            </a>
            <a
              href="https://wa.me/918169808077"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-dark-border text-gray-400 hover:text-gold hover:border-gold/40 text-sm px-6 py-3 rounded-full transition-all duration-200"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Services */}
          <div>
            <h3 className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Female Escorts
            </h3>
            <ul className="space-y-2.5">
              {femaleEscorts.map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-500 hover:text-gold text-xs transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location col 1 */}
          <div>
            <h3 className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Locations
            </h3>
            <ul className="space-y-2.5">
              {locationCol1.map(([slug, name]) => (
                <li key={slug}>
                  <Link
                    href={`/affordable-escorts-in-${slug}`}
                    className="text-gray-500 hover:text-gold text-xs transition-colors duration-200"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location col 2 */}
          <div>
            <h3 className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Locations
            </h3>
            <ul className="space-y-2.5">
              {locationCol2.map(([slug, name]) => (
                <li key={slug}>
                  <Link
                    href={`/affordable-escorts-in-${slug}`}
                    className="text-gray-500 hover:text-gold text-xs transition-colors duration-200"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location col 3 */}
          <div>
            <h3 className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Locations
            </h3>
            <ul className="space-y-2.5">
              {locationCol3.map(([slug, name]) => (
                <li key={slug}>
                  <Link
                    href={`/affordable-escorts-in-${slug}`}
                    className="text-gray-500 hover:text-gold text-xs transition-colors duration-200"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Riya Mumbai Escorts. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            For adults 18+ only. Content is for entertainment purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
