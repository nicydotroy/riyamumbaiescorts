interface HeroBannerProps {
  title: string;
  tall?: boolean;
}

export default function HeroBanner({ title, tall = false }: HeroBannerProps) {
  if (tall) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/escorts-in-mumbai-banner.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          <div className="inline-flex items-center gap-2.5 bg-gold/10 border border-gold/30 rounded-full px-5 py-2 mb-10">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
              Mumbai&apos;s Premier Escort Service
            </span>
          </div>

          <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-3 h-3 rotate-45 bg-gold" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold" />
          </div>

          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Experience unmatched elegance, sophistication, and absolute discretion
            with Mumbai&apos;s most exclusive escort companions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="tel:+918169808077"
              className="flex items-center gap-3 bg-gradient-to-r from-gold to-gold-dark text-black font-bold text-base px-10 py-4 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-[0_8px_30px_rgba(232,25,91,0.35)]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now: +91 8169808077
            </a>
            <a
              href="https://wa.me/918169808077"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-gold/50 text-gold font-semibold text-base px-10 py-4 rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "100%", label: "Discretion" },
              { value: "24/7", label: "Available" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-gradient-gold font-playfair text-2xl font-bold">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-xs tracking-wider uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-5 h-9 border border-gray-700 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-28 md:py-36 overflow-hidden -mt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/escorts-in-mumbai-banner.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-dark" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      <div className="relative z-10 text-center px-4 pt-20">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Riya Mumbai Escorts
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
        </div>
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}
