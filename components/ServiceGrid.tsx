import Link from "next/link";
import { serviceTypes } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

interface ServiceGridProps {
  location?: string;
}

export default function ServiceGrid({ location = "Mumbai" }: ServiceGridProps) {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            Our Collection
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-5">
            Types of Escorts Available
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Explore our diverse range of premium companions in {location}. Each
            brings unique charm and elegance — tailored for the discerning
            individual.{" "}
            <Link href="/" title="Mumbai Escorts" className="text-gold hover:text-gold-light transition-colors">
              Discover more about Mumbai Escorts
            </Link>
            .
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceTypes.map((service) => (
            <ServiceCard
              key={service.slug}
              image={service.image}
              alt={service.alt}
              href={`/${service.slug}`}
              title={service.title}
              description={service.description}
              category={service.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
