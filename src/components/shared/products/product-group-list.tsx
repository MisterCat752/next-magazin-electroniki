'use client';
import React from 'react';

import { cn } from '@/lib/utils';
import { Title } from '@/components/ui';
import { ProductCard } from './product-card';
import { IProduct } from '@/types';

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
      <Title text={title} size='lg' className='font-extrabold mb-5 ' />

      <div className={cn('grid grid-cols-4 gap-[20px]', listClassName)}>
        {items.map((product, id) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              price={product.variants[0].price}
              name={product.name}
              image={product?.image}
            />
          );
        })}
      </div>
    </div>
  );
};
