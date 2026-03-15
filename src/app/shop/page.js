import ShopClient from './ShopClient';
import { perfumes } from '@/data/perfumes';

export const metadata = {
  title: 'Shop — Maison Élite',
  description: 'Browse our full collection of luxury fragrances.',
};

export default function ShopPage() {
  return <ShopClient perfumes={perfumes} />;
}
