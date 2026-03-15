import Image from 'next/image';
import Link from 'next/link';

export default function CategoryCard({ category }) {
  return (
    <Link
      href={`/shop?category=${category.id}`}
      className="group relative overflow-hidden block aspect-[3/4]"
    >
      <Image
        src={category.image}
        alt={category.label}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
      {/* Gold border on hover */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[#c9a84c]/60 transition-all duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
        <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-8 h-px bg-[#c9a84c] mx-auto mb-4 scale-0 group-hover:scale-100 transition-transform duration-500" />
          <h3 className="text-white text-2xl font-light tracking-[0.2em] uppercase mb-2">
            {category.label}
          </h3>
          <p className="text-white/60 text-xs tracking-[0.15em] font-light">
            {category.description}
          </p>
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[#c9a84c] text-[10px] tracking-[0.25em] uppercase font-medium border-b border-[#c9a84c]/50 pb-0.5">
              Explore Collection
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
