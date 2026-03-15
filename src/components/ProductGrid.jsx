import ProductCard from './ProductCard';

export default function ProductGrid({ perfumes, title, subtitle }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {(title || subtitle) && (
        <div className="text-center mb-14">
          {subtitle && (
            <p className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase font-light mb-3">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="text-white text-3xl md:text-4xl font-light tracking-wide">
              {title}
            </h2>
          )}
          <div className="w-12 h-px bg-[#c9a84c] mx-auto mt-6" />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {perfumes.map((perfume) => (
          <ProductCard key={perfume.id} perfume={perfume} />
        ))}
      </div>
    </section>
  );
}
