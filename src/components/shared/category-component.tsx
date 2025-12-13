'use client';

import React from 'react';
import { Filters, ProductGroupList } from '@/components/shared';
import { useFilterStore } from '@/store/filterStore';
import { useQuery, keepPreviousData } from '@tanstack/react-query';

import { getProducts } from '@/lib/api/get-products';
import type { IProduct } from '@/types/products.types';

interface Props {
  category: string;
  initialProducts: IProduct[];
  filters: any[];
}

export const CategoryContent: React.FC<Props> = ({
  category,
  initialProducts,
  filters,
}) => {
  const selectedSpecs = useFilterStore((s) => s.selectedSpecs);
  const sort = useFilterStore((s) => s.sort);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products', category, selectedSpecs, sort],
    queryFn: () =>
      getProducts({
        category,
        specs: selectedSpecs,
        sort,
      }),
    initialData: initialProducts, // 🔥 SSR + плавный UX
    placeholderData: keepPreviousData,
    staleTime: 1_000,
  });

  return (
    <main className='bg-[#000] py-30 flex relative gap-4 items-start justify-end'>
      <Filters filters={filters} />

      <div className='w-full'>
        {isLoading ? (
          <p className='text-white'>Загрузка...</p>
        ) : (
          <ProductGroupList title='Товары' items={products} />
        )}
      </div>
    </main>
  );
};
