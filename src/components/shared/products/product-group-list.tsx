'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from '@/components/ui';
import { ProductCard } from './product-card';
import { IProduct } from '@/types';
import { SortSelect } from '../filter/SortSelect';
import { SkeletonCard } from '../skeletons/skeleton-card';

interface Props {
  title: string;
  items: IProduct[];
  isLoading?: boolean;
  listClassName?: string;
  className?: string;
}

export const ProductGroupList: React.FC<Props> = ({
  className,
  title,
  items,
  isLoading = false,
  listClassName,
}) => {
  const showSkeleton = isLoading;
  const skeletonCount = 6;

  return (
    <div id={title} className={cn(className)}>
      <div className='flex items-center justify-between mb-4 text-white'>
        <Title
          text={title}
          size='lg'
          className='font-extrabold hidden lg:block text-white text-[18px] mb-5'
        />
        <SortSelect />
      </div>

      <div
        className={cn(
          `
          grid 
          grid-cols-1 justify-items-center
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-[repeat(auto-fill,minmax(226px,1fr))]
          gap-3
        `,
          listClassName,
        )}
      >
        {showSkeleton ? (
          Array.from({ length: skeletonCount }).map((_, idx) => (
            <SkeletonCard key={idx} />
          ))
        ) : items.length === 0 ? (
          <div className='col-span-full text-center text-gray-400 text-lg py-10'>
            Товары не найдены
          </div>
        ) : (
          items.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              price={product.price}
              variantId={product.variants[0].id}
              name={product.name}
              imageUrl={product?.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};
