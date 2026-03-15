'use client';

import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';

const CATEGORIES = ['all', 'men', 'women', 'unisex'];
const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name A–Z' },
  { value: 'rating', label: 'Top Rated' },
];

export default function ShopClient({ perfumes }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState(500);
  const [sort, setSort] = useState('featured');

  const filtered = useMemo(() => {
    let result = [...perfumes];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (category !== 'all') {
      result = result.filter((p) => p.category === category);
    }

    result = result.filter((p) => p.price <= maxPrice);

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [perfumes, search, category, maxPrice, sort]);

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Page Header */}
      <div className="border-b border-white/5 pb-12 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase font-light mb-3">
            All Fragrances
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-light tracking-wide">
            The Collection
          </h1>
          <div className="w-12 h-px bg-[#c9a84c] mx-auto mt-6" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters Bar */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 p-6 bg-[#0d0d0d] border border-white/5">
          {/* Search */}
          <div className="flex-1 relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search fragrances..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent border border-white/10 focus:border-[#c9a84c]/50 text-white placeholder-white/20 pl-9 pr-4 py-2.5 text-sm font-light focus:outline-none transition-colors duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2.5 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 ${
                  category === cat
                    ? 'bg-[#c9a84c] text-black'
                    : 'border border-white/10 text-white/50 hover:border-[#c9a84c]/40 hover:text-[#c9a84c]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Price Range */}
          <div className="flex items-center gap-3 min-w-[180px]">
            <span className="text-white/30 text-xs tracking-wide whitespace-nowrap">
              Max: ${maxPrice}
            </span>
            <input
              type="range"
              min={50}
              max={500}
              step={10}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="flex-1 accent-[#c9a84c] cursor-pointer"
            />
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-[#0d0d0d] border border-white/10 focus:border-[#c9a84c]/50 text-white/70 px-4 py-2.5 text-xs tracking-wide focus:outline-none transition-colors duration-300 cursor-pointer"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[#0d0d0d]">
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-white/30 text-xs tracking-[0.15em] uppercase">
            {filtered.length} {filtered.length === 1 ? 'fragrance' : 'fragrances'} found
          </p>
          {(search || category !== 'all' || maxPrice < 500) && (
            <button
              onClick={() => {
                setSearch('');
                setCategory('all');
                setMaxPrice(500);
                setSort('featured');
              }}
              className="text-[#c9a84c] text-xs tracking-wide hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((perfume) => (
              <ProductCard key={perfume.id} perfume={perfume} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-white/20 text-lg font-light tracking-wide mb-2">
              No fragrances found
            </p>
            <p className="text-white/10 text-sm">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
