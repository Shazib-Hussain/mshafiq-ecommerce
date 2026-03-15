import Link from 'next/link';
import { getWhatsAppContactLink } from '@/lib/whatsapp';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541643600914-78b084683702?w=1920&q=80')",
        }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

      {/* Decorative lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-[#c9a84c]/50" />
        <div className="w-1 h-1 rounded-full bg-[#c9a84c]/50" />
        <div className="w-px h-24 bg-gradient-to-t from-transparent to-[#c9a84c]/50" />
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-[#c9a84c]/50" />
        <div className="w-1 h-1 rounded-full bg-[#c9a84c]/50" />
        <div className="w-px h-24 bg-gradient-to-t from-transparent to-[#c9a84c]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase font-light mb-6 animate-fade-in">
          Maison Élite — Luxury Perfumery
        </p>

        <h1 className="text-white font-light leading-tight mb-6">
          <span className="block text-4xl sm:text-6xl md:text-7xl tracking-wide">
            The Art of
          </span>
          <span className="block text-5xl sm:text-7xl md:text-8xl tracking-wider text-[#c9a84c] font-extralight italic">
            Fragrance
          </span>
        </h1>

        <div className="w-16 h-px bg-[#c9a84c] mx-auto my-8" />

        <p className="text-white/60 text-sm sm:text-base font-light tracking-wide max-w-xl mx-auto leading-relaxed mb-12">
          Discover our curated collection of rare and exquisite fragrances, crafted from the world&apos;s finest ingredients for those who demand nothing but the extraordinary.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop"
            className="w-full sm:w-auto bg-[#c9a84c] hover:bg-[#b8963e] text-black px-10 py-4 text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
          >
            Explore Collection
          </Link>
          <a
            href={getWhatsAppContactLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-white/30 hover:border-[#c9a84c] text-white hover:text-[#c9a84c] px-10 py-4 text-xs tracking-[0.25em] uppercase font-light transition-all duration-300"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
