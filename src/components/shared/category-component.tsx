'use client';

import React, { useEffect } from 'react';
import { Filters, ProductGroupList } from '@/components/shared';
import { useFilterStore } from '@/store/filterStore';
import { useQuery, keepPreviousData } from '@tanstack/react-query';

import { getProducts } from '@/lib/api/get-products';
import type { IProduct } from '@/types/products.types';
import { Pagination } from './pagination/pagination';

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
  const [page, setPage] = React.useState(1);
  const specsKey = React.useMemo(
    () => JSON.stringify(selectedSpecs),
    [selectedSpecs],
  );
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, sort, category, specsKey]);
  const { data, isLoading } = useQuery({
    queryKey: ['products', category, selectedSpecs, sort, page],
    queryFn: () =>
      getProducts({
        category,
        specs: selectedSpecs,
        sort,
        page,
        limit: 12,
      }),

    placeholderData: keepPreviousData,
    staleTime: 3_000,
  });

  const totalPages = data?.meta.totalPages ?? 1;
  const products = data?.products || [];
  return (
    <main className='bg-[#000] py-30 flex relative gap-4 items-start justify-end'>
      <Filters categoryId={category} />

      <div className='w-full px-2'>
        {isLoading ? (
          <p className='text-white'>Загрузка...</p>
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
