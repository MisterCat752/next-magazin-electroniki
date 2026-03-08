'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useFavoriteStore } from '@/store/favoriteStore';
import { ProductCard } from '../products';
import { Heart } from 'lucide-react';

interface Props {
  className?: string;
}

export const WishLIshContent: React.FC<Props> = ({ className }) => {
  const items = useFavoriteStore((state) => state.items);

  // ⭐ if empty → show nice empty state
  if (items.length === 0) {
    return (
      <div
        className={cn(
          className,
          'w-full flex flex-col items-center justify-center text-center py-20 text-white',
        )}
      >
        <div className='bg-gray-dark p-6 rounded-full mb-6'>
          <Heart size={48} />
        </div>

        <h2 className='text-xl font-semibold mb-2'>Your wishlist is empty</h2>

        <p className='text-gray-400 mb-6 max-w-md'>
          Add products to your wishlist to quickly find them later
        </p>

        <Link
          href='/category/smartphones'
          className='px-6 py-3 bg-white text-black rounded-xl font-medium hover:opacity-80 transition'
        >
          Go to catalog
        </Link>
      </div>
    );
  }

  // ⭐ if there are products → show grid
  return (
    <div
      className={cn(
        className,
        'grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-4 w-full mt-2',
      )}
    >
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
