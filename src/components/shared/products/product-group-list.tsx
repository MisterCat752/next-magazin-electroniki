'use client';
import React from 'react';

import { cn } from '@/lib/utils';
import { Title } from '@/components/ui';
import { ProductCard } from './product-card';
import { IProduct } from '@/types';
import { SortSelect } from '../filter/SortSelect';
import { OpenSideButton } from '../profile/open-side-button';

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
  return (
    <div id={title} className={cn(className)}>
      <div className='flex items-center justify-between mb-4 text-white'>
        <Title
          text={title}
          size='lg'
          className='font-extrabold hidden lg:block text-white text-[18px] mb-5 '
        />
        <OpenSideButton />

        <SortSelect />
      </div>
      <div
        className={cn(
          `   grid  grid-cols-[repeat(auto-fill,minmax(226px,1fr))]   gap-3`,
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
