'use client';

import React from 'react';
import { Filters, ProductGroupList } from '@/components/shared';
import { Pagination } from './pagination/pagination';
import { useCatalogProducts } from '@/hooks/useCatalogProducts';

interface Props {
  category: string;
}

export const CategoryContent: React.FC<Props> = ({ category }) => {
  const { products, totalPages, page, setPage, isLoading } =
    useCatalogProducts(category);
  return (
    <main className='bg-[#000] py-30 flex relative gap-4 items-start justify-end'>
      <Filters categoryId={category} />

      <div className='w-full px-2'>
        {isLoading ? (
          <p className='text-white'>Loading...</p>
        ) : (
          <ProductGroupList title='Товары' items={products} />
        )}
        <Pagination
          page={page}
          totalPages={totalPages}
          onChange={(e: number) => {
            setPage(e);
          }}
        />
      </div>
    </main>
  );
};
