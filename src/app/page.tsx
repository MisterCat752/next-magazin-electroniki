import { ProductCard, CategoryCard, Slider } from '@/components/shared';
import HomeContent from '@/components/shared/home/home-content';
import { categories, products } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const images = ['/iphone.webp', '/iphone.webp', '/xiamo.webp'];

  return <HomeContent />;
}
