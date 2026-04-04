import Link from "next/link";

const femaleEscorts = [
  ["/mumbai-it-girls-escorts", "IT Girls Escorts in Mumbai"],
  ["/busty-college-girls-escorts-mumbai", "Busty College Girl Escorts Mumbai"],
  ["/gfe-experts-girls-escorts-mumbai", "Girlfriend Experience Escorts Mumbai"],
  ["/housewife-escorts-mumbai", "Housewife Escorts in Mumbai"],
  ["/affordable-call-girls-in-mumbai", "Affordable Call Girls in Mumbai"],
  ["/bdsm-expert-escorts-mumbai", "BDSM Expert Escorts Mumbai"],
  ["/punjabi-girls-escorts-mumbai", "Punjabi Escorts in Mumbai"],
  ["/hj-bj-experts-girls-escorts-mumbai", "HJ BJ Escorts Mumbai"],
  ["/role-play-experts-girls-escorts-mumbai", "Role Play Escorts Mumbai"],
  ["/south-indian-escorts-mumbai", "South Indian Escorts Mumbai"],
  ["/unsatisfied-female-escorts-mumbai", "Unsatisfied Female Escorts Mumbai"],
  ["/arab-escorts-mumbai", "Arab Escorts in Mumbai"],
  ["/marathi-female-escorts-mumbai", "Marathi Girl Escorts Mumbai"],
  ["/gujarati-female-escorts-mumbai", "Gujarati Escorts in Mumbai"],
  ["/russian-girls-escorts-mumbai", "Russian Escorts in Mumbai"],
];

const quickLinks = [
  ["/", "Escorts in Mumbai"],
  ["/services", "Escort Services Mumbai"],
  ["/location", "Mumbai Escort Locations"],
  ["/gallery", "Escorts Gallery Mumbai"],
  ["/contact", "Book Escorts in Mumbai"],
];

const locationCol1 = [
  ["airoli", "Escorts in Airoli"],
  ["ambernath", "Escorts in Ambernath"],
  ["ambivali", "Escorts in Ambivali"],
  ["andheri", "Escorts in Andheri"],
  ["asangaon", "Escorts in Asangaon"],
  ["badlapur", "Escorts in Badlapur"],
  ["bandra", "Escorts in Bandra"],
  ["bhandup", "Escorts in Bhandup"],
  ["bhayander", "Escorts in Bhayander"],
  ["boisar", "Escorts in Boisar"],
  ["borivali", "Escorts in Borivali"],
  ["byculla", "Escorts in Byculla"],
  ["cbd-belapur", "Escorts in CBD Belapur"],
  ["churchgate", "Escorts in Churchgate"],
  ["cst", "Escorts near CST Mumbai"],
  ["dadar", "Escorts in Dadar"],
  ["dahisar", "Escorts in Dahisar"],
  ["diva", "Escorts in Diva"],
  ["dombivali", "Escorts in Dombivali"],
  ["ghansoli", "Escorts in Ghansoli"],
  ["ghatkopar", "Escorts in Ghatkopar"],
  ["goregaon", "Escorts in Goregaon"],
  ["govandi", "Escorts in Govandi"],
  ["grantroad", "Escorts in Grant Road"],
  ["jogeshwari", "Escorts in Jogeshwari"],
  ["juhu", "Escorts in Juhu"],
  ["juinagar", "Escorts in Juinagar"],
];

const locationCol2 = [
  ["kalamboli", "Escorts in Kalamboli"],
  ["kalwa", "Escorts in Kalwa"],
  ["kalyan", "Escorts in Kalyan"],
  ["kamothe", "Escorts in Kamothe"],
  ["kandivali", "Escorts in Kandivali"],
  ["kanjurmarg", "Escorts in Kanjurmarg"],
  ["karjat", "Escorts in Karjat"],
  ["kasara", "Escorts in Kasara"],
  ["khar", "Escorts in Khar"],
  ["kharghar", "Escorts in Kharghar"],
  ["khopoli", "Escorts in Khopoli"],
  ["kopar-khairane", "Escorts in Kopar Khairane"],
  ["kurla", "Escorts in Kurla"],
  ["lokhandwala", "Escorts in Lokhandwala"],
  ["lower-parel", "Escorts in Lower Parel"],
  ["mahalaxmi", "Escorts in Mahalaxmi"],
  ["malad", "Escorts in Malad"],
  ["matunga", "Escorts in Matunga"],
  ["miraroad", "Escorts in Mira Road"],
  ["mulund", "Escorts in Mulund"],
  ["mumbai-airports", "Escorts near Mumbai Airport"],
  ["mumbai-central", "Escorts in Mumbai Central"],
  ["mumbra", "Escorts in Mumbra"],
  ["nahur", "Escorts in Nahur"],
  ["naigaon", "Escorts in Naigaon"],
  ["nalasopara", "Escorts in Nalasopara"],
  ["nerul", "Escorts in Nerul"],
];

const locationCol3 = [
  ["neral", "Escorts in Neral"],
  ["palghar", "Escorts in Palghar"],
  ["panvel", "Escorts in Panvel"],
  ["parel", "Escorts in Parel"],
  ["powai-hiranandani", "Escorts in Powai Hiranandani"],
  ["prabhadevi", "Escorts in Prabhadevi"],
  ["rabale", "Escorts in Rabale"],
  ["sakinaka", "Escorts in Sakinaka"],
  ["sanpada", "Escorts in Sanpada"],
  ["santacruz", "Escorts in Santacruz"],
  ["saphale", "Escorts in Saphale"],
  ["seawood", "Escorts in Seawood"],
  ["sion", "Escorts in Sion"],
  ["thakurli", "Escorts in Thakurli"],
  ["thane", "Escorts in Thane"],
  ["titwala", "Escorts in Titwala"],
  ["turbhe", "Escorts in Turbhe"],
  ["ulhasnagar", "Escorts in Ulhasnagar"],
  ["ulwe", "Escorts in Ulwe"],
  ["varsova", "Escorts in Varsova"],
  ["vasai", "Escorts in Vasai"],
  ["vashi", "Escorts in Vashi"],
  ["vidyavihar", "Escorts in Vidyavihar"],
  ["vikhroli", "Escorts in Vikhroli"],
  ["vileparle", "Escorts in Vile Parle"],
  ["virar", "Escorts in Virar"],
  ["wadala", "Escorts in Wadala"],
];

export default function Footer() {
  return (
    <footer className="relative bg-dark overflow-hidden">
      {/* Top gold gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* CTA Banner */}
      <div className="relative bg-dark-surface border-b border-dark-border overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,rgba(232,25,91,0.08)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand block */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/25 bg-gold/5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-gold text-[10px] font-semibold tracking-[0.3em] uppercase">Available 24/7</span>
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                Riya <span className="text-gradient-gold">Mumbai Escorts</span>
              </h2>
              <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                Mumbai&apos;s most trusted premium escort service. Discreet, verified, and available wherever you are in the city.
              </p>
            </div>

            {/* Contact actions */}
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <a
                href="tel:+918169808077"
                title="Call Riya Mumbai Escorts"
                aria-label="Call us at +91 8169808077"
                className="group flex items-center gap-3 bg-gradient-to-r from-gold to-amber-500 text-dark font-bold text-sm px-7 py-3.5 rounded-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now — +91 8169808077
              </a>
              <a
                href="https://wa.me/918169808077?text=Hi%2C%20I%27d%20like%20to%20book%20an%20escort%20in%20Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Riya Mumbai Escorts"
                aria-label="WhatsApp Riya Mumbai Escorts"
                className="flex items-center gap-3 border border-dark-border bg-dark-card hover:border-gold/40 hover:bg-dark-card text-gray-300 hover:text-gold text-sm px-7 py-3.5 rounded-xl transition-all duration-300"
              >
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                title="Book Escorts in Mumbai — Contact Riya Escorts"
                className="flex items-center gap-2 border border-gold/30 text-gold hover:bg-gold/10 text-sm px-7 py-3.5 rounded-xl transition-all duration-300"
              >
                Book Now
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main link grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* Quick navigation + services */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            {/* Quick Links */}
            <div className="mb-8">
              <h3 className="flex items-center gap-2 text-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-5">
                <span className="w-3 h-px bg-gold" />
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map(([href, label]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      title={label}
                      className="group flex items-center gap-2 text-gray-500 hover:text-gold text-xs transition-colors duration-200"
                    >
                      <span className="w-1 h-1 rotate-45 bg-gray-700 group-hover:bg-gold transition-colors duration-200 flex-shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust badges */}
            <div className="space-y-2">
              {[
                { icon: "🔒", text: "100% Discreet Service" },
                { icon: "✓", text: "Verified Companions" },
                { icon: "⏰", text: "24/7 Availability" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2.5 text-gray-600 text-xs">
                  <span className="text-gold text-xs">{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>
          </div>

          {/* Escort types */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="flex items-center gap-2 text-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-5">
              <span className="w-3 h-px bg-gold" />
              Escort Types
            </h3>
            <ul className="space-y-2.5">
              {femaleEscorts.map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    title={label}
                    className="group flex items-center gap-2 text-gray-500 hover:text-gold text-xs transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rotate-45 bg-gray-700 group-hover:bg-gold transition-colors duration-200 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location col 1 */}
          <div>
            <h3 className="flex items-center gap-2 text-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-5">
              <span className="w-3 h-px bg-gold" />
              Mumbai Escorts
            </h3>
            <ul className="space-y-2.5">
              {locationCol1.map(([slug, label]) => (
                <li key={slug}>
                  <Link
                    href={`/affordable-escorts-in-${slug}`}
                    title={label}
                    className="group flex items-center gap-2 text-gray-500 hover:text-gold text-xs transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rotate-45 bg-gray-700 group-hover:bg-gold transition-colors duration-200 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location col 2 */}
          <div>
            <h3 className="flex items-center gap-2 text-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-5">
              <span className="w-3 h-px bg-gold" />
              Navi Mumbai Escorts
            </h3>
            <ul className="space-y-2.5">
              {locationCol2.map(([slug, label]) => (
                <li key={slug}>
                  <Link
                    href={`/affordable-escorts-in-${slug}`}
                    title={label}
                    className="group flex items-center gap-2 text-gray-500 hover:text-gold text-xs transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rotate-45 bg-gray-700 group-hover:bg-gold transition-colors duration-200 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location col 3 */}
          <div>
            <h3 className="flex items-center gap-2 text-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-5">
              <span className="w-3 h-px bg-gold" />
              Thane &amp; Suburbs
            </h3>
            <ul className="space-y-2.5">
              {locationCol3.map(([slug, label]) => (
                <li key={slug}>
                  <Link
                    href={`/affordable-escorts-in-${slug}`}
                    title={label}
                    className="group flex items-center gap-2 text-gray-500 hover:text-gold text-xs transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rotate-45 bg-gray-700 group-hover:bg-gold transition-colors duration-200 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-dark-border bg-dark-surface">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-600 text-xs text-center md:text-left">
              © {new Date().getFullYear()}{" "}
              <Link href="/" title="Riya Mumbai Escorts" className="text-gray-500 hover:text-gold transition-colors">
                Riya Mumbai Escorts
              </Link>
              . All rights reserved. Premium Escort Services in Mumbai.
            </p>

            {/* Bottom nav */}
            <nav className="flex flex-wrap justify-center md:justify-end items-center gap-x-5 gap-y-1">
              {[
                ["/", "Home"],
                ["/services", "Services"],
                ["/gallery", "Gallery"],
                ["/location", "Locations"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  title={`${label} — Riya Mumbai Escorts`}
                  className="text-gray-600 hover:text-gold text-xs transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Disclaimer */}
            <p className="text-gray-700 text-[10px] text-center md:text-right">
              For adults 18+ only. Content is for entertainment purposes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
