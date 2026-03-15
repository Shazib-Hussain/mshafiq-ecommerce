'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function ProductDetailClient({ perfume, related }) {
  const [activeImage, setActiveImage] = useState(0);

  const whatsappLink = getWhatsAppLink(perfume.name);

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-xs text-white/30 tracking-wide">
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#c9a84c] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-white/60">{perfume.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[#0d0d0d] border border-white/5">
              <Image
                src={perfume.images[activeImage]}
                alt={perfume.name}
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-black/60 backdrop-blur-sm border border-white/10 text-white/60 text-[10px] tracking-[0.2em] uppercase px-3 py-1">
                  {perfume.category}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {perfume.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-20 aspect-square overflow-hidden border transition-all duration-300 ${
                    activeImage === i
                      ? 'border-[#c9a84c]'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${perfume.name} view ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase font-light mb-2">
              {perfume.brand}
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-light tracking-wide mb-4">
              {perfume.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill={i < Math.floor(perfume.rating) ? '#c9a84c' : '#ffffff20'}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/40 text-xs">
                {perfume.rating} ({perfume.reviews} reviews)
              </span>
            </div>

            <div className="w-12 h-px bg-[#c9a84c] mb-8" />

            {/* Price & Size */}
            <div className="flex items-end gap-4 mb-8">
              <span className="text-white text-4xl font-light">${perfume.price}</span>
              <span className="text-white/30 text-sm mb-1">{perfume.size}</span>
            </div>

            {/* Description */}
            <p className="text-white/50 text-sm leading-relaxed font-light mb-10">
              {perfume.description}
            </p>

            {/* Fragrance Notes */}
            <div className="mb-10 p-6 bg-[#0d0d0d] border border-white/5">
              <h3 className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-medium mb-6">
                Fragrance Notes
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Top Notes', notes: perfume.fragranceNotes.top },
                  { label: 'Heart Notes', notes: perfume.fragranceNotes.middle },
                  { label: 'Base Notes', notes: perfume.fragranceNotes.base },
                ].map((group) => (
                  <div key={group.label}>
                    <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase mb-3">
                      {group.label}
                    </p>
                    <ul className="space-y-1.5">
                      {group.notes.map((note) => (
                        <li key={note} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#c9a84c]/60 shrink-0" />
                          <span className="text-white/60 text-xs font-light">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Order Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#c9a84c] hover:bg-[#b8963e] text-black py-5 text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.25)] mb-4"
            >
              <WhatsAppIcon size={18} />
              Order on WhatsApp
            </a>

            <p className="text-white/20 text-xs text-center tracking-wide font-light">
              Click to open WhatsApp and place your order directly
            </p>

            {/* Badges */}
            <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-white/5">
              {[
                { icon: '✦', label: 'Authentic' },
                { icon: '✦', label: 'Premium Quality' },
                { icon: '✦', label: 'Fast Delivery' },
              ].map((badge) => (
                <div key={badge.label} className="text-center">
                  <span className="text-[#c9a84c] text-xs block mb-1">{badge.icon}</span>
                  <span className="text-white/30 text-[10px] tracking-[0.15em] uppercase">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-24">
            <div className="text-center mb-12">
              <p className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase font-light mb-3">
                You May Also Like
              </p>
              <h2 className="text-white text-3xl font-light tracking-wide">
                Related Fragrances
              </h2>
              <div className="w-12 h-px bg-[#c9a84c] mx-auto mt-6" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} perfume={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function WhatsAppIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
