'use client';
import React from 'react';

import { cn } from '@/lib/utils';
import { Title } from '@/components/ui';
import { ProductCard } from './product-card';
import { IProduct } from '@/types';
import { SortSelect } from '../filter/SortSelect';
import { useFilterStore } from '@/store/filterStore';

interface Props {
  title: string;
  items: IProduct[];
  listClassName?: string;
  className?: string;
}

export const ProductGroupList: React.FC<Props> = ({
  className,
  title,
  items,
  listClassName,
}) => {
  console.log(items, 'items');
  return (
    <div id={title} className={cn(className)}>
      <div className='flex  justify-between mb-4 text-white'>
        <Title
          text={title}
          size='lg'
          className='font-extrabold hidden lg:block text-white text-[18px] mb-5 '
        />

        <SortSelect />
      </div>
      <div
        className={cn(
          `   grid  grid-cols-[repeat(auto-fill,minmax(160px,1fr))]   gap-4`,
          listClassName,
        )}
      >
        {items.map((product, id) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              price={product.price}
              variantId={product.variants[0].id}
              name={product.name}
              imageUrl={product?.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
