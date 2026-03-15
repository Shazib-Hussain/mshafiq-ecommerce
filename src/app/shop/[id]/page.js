import { perfumes } from '@/data/perfumes';
import { notFound } from 'next/navigation';
import ProductDetailClient from './ProductDetailClient';

export async function generateStaticParams() {
  return perfumes.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const perfume = perfumes.find((p) => p.id === params.id);
  if (!perfume) return {};
  return {
    title: `${perfume.name} — Maison Élite`,
    description: perfume.description,
  };
}

export default function ProductPage({ params }) {
  const perfume = perfumes.find((p) => p.id === params.id);
  if (!perfume) notFound();

  const related = perfumes
    .filter((p) => p.id !== perfume.id && p.category === perfume.category)
    .slice(0, 4);

  return <ProductDetailClient perfume={perfume} related={related} />;
}
