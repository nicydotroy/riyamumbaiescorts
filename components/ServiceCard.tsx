import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  image: string;
  alt: string;
  href: string;
  title: string;
  description: React.ReactNode;
  category?: string;
}

export default function ServiceCard({
  image,
  alt,
  href,
  title,
  description,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-dark-card border border-dark-border hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(0,0,0,0.6),0_0_20px_rgba(232,25,91,0.08)]">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={image}
            alt={alt}
            fill
            loading="lazy"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="w-8 h-0.5 bg-gold mb-4 transition-all duration-300 group-hover:w-14" />
          <h3 className="font-playfair text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-300 leading-snug">
            {title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
          <div className="mt-5 flex items-center gap-2 text-gold text-xs font-semibold tracking-wider uppercase">
            <span>View Details</span>
            <span className="transition-transform duration-300 group-hover:translate-x-2">&#8594;</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
