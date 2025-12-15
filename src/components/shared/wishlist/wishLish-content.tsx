'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { useFavoriteStore } from '@/store/favoriteStore';
import { ProductCard } from '../products';

interface Props {
  className?: string;
}

export const WishLIshContent: React.FC<Props> = ({ className }) => {
  const items = useFavoriteStore((state) => state.items);
  return (
    <div
      className={cn(
        className,
        'grid  grid-cols-[repeat(auto-fill,minmax(160px,1fr))]   gap-4  w-full     '
      )}
    >
      {items.length === 0 && <p>Пусто</p>}

      {items.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          price={item.price}
          name={item.name}
          imageUrl={item.imageUrl}
          className='bg-gray-dark text-white'
        />
      ))}
    </div>
  );
};
