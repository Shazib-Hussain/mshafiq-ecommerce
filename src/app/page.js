import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import CategoryCard from '@/components/CategoryCard';
import TestimonialCard from '@/components/TestimonialCard';
import { perfumes, testimonials, categories } from '@/data/perfumes';
import Link from 'next/link';
import { getWhatsAppContactLink } from '@/lib/whatsapp';

export default function HomePage() {
  const featured = perfumes.filter((p) => p.featured);
  const bestSellers = perfumes.filter((p) => p.bestSeller);

  return (
    <>
      <HeroSection />

      {/* Featured Perfumes */}
      <section className="bg-black">
        <ProductGrid
          perfumes={featured}
          title="Featured Fragrances"
          subtitle="Curated Selection"
        />
      </section>

      {/* Best Sellers */}
      <section className="bg-[#050505]">
        <ProductGrid
          perfumes={bestSellers}
          title="Best Sellers"
          subtitle="Most Loved"
        />
      </section>

      {/* Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase font-light mb-3">
            Browse By
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-light tracking-wide">
            Our Collections
          </h2>
          <div className="w-12 h-px bg-[#c9a84c] mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section id="about" className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80"
                  alt="Brand Story"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Decorative gold border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c9a84c]/20 -z-10" />
            </div>

            {/* Text side */}
            <div>
              <p className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase font-light mb-4">
                Our Story
              </p>
              <h2 className="text-white text-3xl md:text-4xl font-light tracking-wide leading-tight mb-8">
                The Pursuit of<br />
                <span className="text-[#c9a84c] italic">Olfactory Perfection</span>
              </h2>
              <div className="w-12 h-px bg-[#c9a84c] mb-8" />
              <p className="text-white/50 text-sm leading-relaxed font-light mb-6">
                Founded on the belief that fragrance is the most intimate form of luxury, Maison Élite was born from a passion for rare ingredients and master craftsmanship. Each of our fragrances is a journey — a story told through scent.
              </p>
              <p className="text-white/50 text-sm leading-relaxed font-light mb-10">
                We source only the finest raw materials from around the world: Bulgarian rose, aged oud from Southeast Asia, Grasse jasmine, and precious resins that have been treasured for centuries. Every bottle is a testament to the art of perfumery.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { value: '15+', label: 'Years of Craft' },
                  { value: '50+', label: 'Unique Scents' },
                  { value: '10K+', label: 'Happy Clients' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center border-r border-white/10 last:border-0">
                    <p className="text-[#c9a84c] text-2xl font-light mb-1">{stat.value}</p>
                    <p className="text-white/30 text-[10px] tracking-[0.15em] uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/shop"
                className="inline-block border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase font-light mb-3">
              What They Say
            </p>
            <h2 className="text-white text-3xl md:text-4xl font-light tracking-wide">
              Client Testimonials
            </h2>
            <div className="w-12 h-px bg-[#c9a84c] mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="contact" className="py-24 bg-[#050505] border-t border-[#c9a84c]/10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase font-light mb-4">
            Stay Connected
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-light tracking-wide mb-4">
            Join Our World
          </h2>
          <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-8" />
          <p className="text-white/40 text-sm font-light leading-relaxed mb-10">
            Be the first to discover new fragrances, exclusive offers, and the stories behind our scents. Or simply reach out to us on WhatsApp to place your order.
          </p>

          {/* Email form */}
          <form className="flex flex-col sm:flex-row gap-0 mb-8 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/5 border border-white/10 text-white placeholder-white/20 px-5 py-3.5 text-sm font-light focus:outline-none focus:border-[#c9a84c]/50 transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-[#c9a84c] hover:bg-[#b8963e] text-black px-6 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <div className="flex items-center gap-4 justify-center">
            <div className="h-px flex-1 bg-white/10 max-w-[80px]" />
            <span className="text-white/20 text-xs tracking-widest uppercase">or</span>
            <div className="h-px flex-1 bg-white/10 max-w-[80px]" />
          </div>

          <a
            href={getWhatsAppContactLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-6 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] px-8 py-4 text-sm tracking-wide transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat with us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
