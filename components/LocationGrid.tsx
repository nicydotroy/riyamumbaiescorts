import Link from "next/link";
import Image from "next/image";
import { locations } from "@/data/locations";

export default function LocationGrid() {
  return (
    <section className="py-24 bg-dark-surface relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(232,25,91,0.08) 0%, transparent 65%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            We Cover All of Mumbai
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-5">
            Escorts by Location
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Premium escort services available across 80+ sub-locations in Mumbai,
            Navi Mumbai, and surrounding suburbs. Discreet, elite, and always available.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/affordable-escorts-in-${loc.slug}`}
              title={`Escorts in ${loc.name} – Riya Mumbai Escorts`}
              className="group relative overflow-hidden rounded-2xl bg-dark-card border border-dark-border hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(0,0,0,0.6),0_0_20px_rgba(232,25,91,0.08)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={loc.image}
                  alt={`Premium Escorts in ${loc.name}, Mumbai – Riya Mumbai Escorts`}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <div className="w-8 h-0.5 bg-gold mb-3 transition-all duration-300 group-hover:w-14" />
                <h3 className="font-playfair text-lg font-semibold text-white group-hover:text-gold transition-colors duration-300 mb-2">
                  Escorts in {loc.name}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                  Experience luxury and elegance with our premium{" "}
                  <span className="text-gold/70">Escorts in {loc.name}</span>. Unforgettable experiences await.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-gold text-xs font-semibold tracking-wider uppercase">
                  <span>Explore</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
